"use client"

import Image from "next/image"
import {ChevronLeft, ChevronRight} from "lucide-react"
import {useState, useRef, useEffect} from "react"
import {Card} from "@/component/ui/card"
import {Button} from "./ui/button"

import {WorkModal} from "@/component/work-modal";
import {currentProject, Project} from "@/model/project";

export function Work() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    const scrollEndTimeout = useRef<NodeJS.Timeout | null>(null)

    const originalProjects: Project[] = [
        {
            title: "Optifit",
            imagePresentation: "/optifit1.png",
            category: "Design",
            description: "An advanced fitness tracking application focused on UI/UX simplicity.",
            photos: ["/optifit1.png", "/optifit2.png"]
        },
        {
            title: "Verax",
            imagePresentation: "/optifit1.png",
            category: "Web design",
            description: "Corporate website redesign for a leading logistics company.",
            photos: ["/optifit1.png"]
        },
        {
            title: "Twitter IA",
            imagePresentation: "/optifit1.png",
            category: "IA",
            description: "Artificial Intelligence model analysis for social media trends.",
            photos: ["/optifit1.png", "/optifit1.png", "/optifit1.png"]
        },
        {
            title: "Web Design",
            imagePresentation: "/optifit1.png",
            category: "Web",
            description: "A collection of modern web layouts and components.",
            photos: []
        },
        {
            title: "Branding",
            imagePresentation: "/optifit1.png",
            category: "Brand",
            description: "Complete brand identity package including logo and guidelines.",
            photos: ["/optifit1.png"]
        },
    ]

    const bufferSize = 2
    const projects = currentProject;

    const [centerIndex, setCenterIndex] = useState(bufferSize)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [scrollMethod, setScrollMethod] = useState<"button" | "manual">("manual")
    const transitionDuration = 500

    const scroll = (direction: "left" | "right") => {
        if (isTransitioning) return
        setScrollMethod("button")
        const newIndex = direction === "left" ? centerIndex - 1 : centerIndex + 1
        setCenterIndex(newIndex)
        scrollToCard(newIndex, "smooth")
    }

    const handleScroll = () => {
        if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current)
        scrollEndTimeout.current = setTimeout(() => {
            if (!scrollContainerRef.current || isTransitioning) return
            const container = scrollContainerRef.current
            const {scrollLeft, clientWidth} = container
            const containerCenter = scrollLeft + clientWidth / 2
            let closestIndex = 0
            let minDistance = Infinity

            cardRefs.current.forEach((card, index) => {
                if (!card) return
                const cardCenter = card.offsetLeft + card.clientWidth / 2
                const distance = Math.abs(containerCenter - cardCenter)
                if (distance < minDistance) {
                    minDistance = distance
                    closestIndex = index
                }
            })
            if (closestIndex !== centerIndex) {
                setScrollMethod("manual")
                setCenterIndex(closestIndex)
            }
        }, 150)
    }

    const scrollToCard = (index: number, behavior: "smooth" | "instant" = "smooth") => {
        if (!scrollContainerRef.current || !cardRefs.current[index]) return
        const container = scrollContainerRef.current
        const cardElement = cardRefs.current[index]!
        const scrollLeft =
            cardElement.offsetLeft -
            container.offsetLeft -
            container.clientWidth / 2 +
            cardElement.clientWidth / 2
        container.scrollTo({left: scrollLeft, behavior})
    }

    useEffect(() => {
        const initScroll = () => {
            scrollToCard(bufferSize, "instant")
            cardRefs.current = cardRefs.current.slice(0, projects.length)
        }
        initScroll();
        return () => {
            if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current)
        }
    }, [])

    useEffect(() => {
        if (isTransitioning) return
        const handleTeleport = (newIndex: number, instant: boolean) => {
            if (instant) {
                scrollToCard(newIndex, "instant")
                setCenterIndex(newIndex)
            } else {
                setIsTransitioning(true)
                setTimeout(() => {
                    scrollToCard(newIndex, "instant")
                    setCenterIndex(newIndex)
                    setIsTransitioning(false)
                }, transitionDuration)
            }
        }
        if (centerIndex >= originalProjects.length + bufferSize) {
            const newIndex = centerIndex - originalProjects.length
            handleTeleport(newIndex, scrollMethod === "manual")
        } else if (centerIndex < bufferSize) {
            const newIndex = centerIndex + originalProjects.length
            handleTeleport(newIndex, scrollMethod === "manual")
        }
        if (scrollMethod !== "manual") {
            setScrollMethod("manual")
        }
    }, [centerIndex, scrollMethod])


    return (
        <section id="work" className="bg-background relative">
            <div className="relative group">
                <h1 className="text-white dark:text-white[50]">My work</h1>
                <Button variant="ghost" size="lg" onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
                        disabled={isTransitioning}>
                    <ChevronLeft className="h-8 w-8"/>
                </Button>

                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth py-8 px-4"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        scrollSnapType: "x mandatory",
                    }}
                >
                    <div className="flex-shrink-0 w-[calc(50vw-300px)]"/>

                    {projects.map((project: Project, index: number) => (
                        <Card
                            key={`${project.title}-${index}`}
                            ref={el => (cardRefs.current[index] = el)}
                            onClick={() => setSelectedProject(project)}
                            className={`flex-shrink-0 w-[500px] h-[420px] bg-card/50 backdrop-blur border-border rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer hover:border-primary/50 ${
                                index === centerIndex
                                    ? "scale-100 opacity-100 z-10 shadow-xl"
                                    : "scale-90 opacity-50 hover:opacity-75"
                            }`}
                            style={{scrollSnapAlign: "center"}}
                        >
                            <div className="p-6 items-center">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-sm ">{project.category}</p>
                            </div>
                            <div className="aspect-[16/9] relative">
                                <Image src={project.imagePresentation} alt={project.title} fill
                                       className="object-contain"/>
                            </div>
                        </Card>
                    ))}

                    <div className="flex-shrink-0 w-[calc(50vw-300px)]"/>
                </div>

                <Button variant="ghost" size="lg" onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
                        disabled={isTransitioning}>
                    <ChevronRight className="h-8 w-8"/>
                </Button>
            </div>

            <WorkModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    )
}