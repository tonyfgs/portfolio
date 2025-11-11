"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Card } from "@/component/ui/card"
import { Button } from "./ui/button"

export function Work() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    const scrollEndTimeout = useRef<NodeJS.Timeout | null>(null)



    const originalProjects = [
        { title: "Optifit", image: "/optifit1.png", category: "Design" },
        { title: "Verax", image: "/optifit1.png", category: "Web design" },
        { title: "Twitter IA", image: "/optifit1.png", category: "IA" },
        { title: "Web Design", image: "/optifit1.png", category: "Web" },
        { title: "Branding", image: "/optifit1.png", category: "Brand" },
    ]

    const bufferSize = 2
    const projects = [
        ...originalProjects.slice(-bufferSize),
        ...originalProjects,
        ...originalProjects.slice(0, bufferSize),
    ]

    const [centerIndex, setCenterIndex] = useState(bufferSize)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const [scrollMethod, setScrollMethod] = useState<"button" | "manual">("manual")

    const transitionDuration = 500

    const scrollToCard = (index: number, behavior: "smooth" | "instant" = "smooth") => {
        if (!scrollContainerRef.current || !cardRefs.current[index]) return

        const container = scrollContainerRef.current
        const cardElement = cardRefs.current[index]!

        const scrollLeft =
            cardElement.offsetLeft -
            container.offsetLeft -
            container.clientWidth / 2 +
            cardElement.clientWidth / 2

        container.scrollTo({ left: scrollLeft, behavior })
    }

    useEffect(() => {
        const initScroll = () => {
            scrollToCard(bufferSize, "instant")
            cardRefs.current = cardRefs.current.slice(0, projects.length)
        }

        const id = setTimeout(initScroll, 0)
        return () => {
            clearTimeout(id)
            if (scrollEndTimeout.current) {
                clearTimeout(scrollEndTimeout.current)
            }
        }
    }, [])



    useEffect(() => {
        if (isTransitioning) return

        const handleTeleport = (newIndex: number, instant: boolean) => {
            if (instant) {
                // Téléportation instantanée (pour le "slide" manuel)
                scrollToCard(newIndex, "instant")
                setCenterIndex(newIndex)
            } else {
                // Téléportation après animation (pour le clic bouton)
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
        }
        else if (centerIndex < bufferSize) {
            const newIndex = centerIndex + originalProjects.length
            handleTeleport(newIndex, scrollMethod === "manual")
        }

        if (scrollMethod === "manual") {
        } else {
            setScrollMethod("manual")
        }

    }, [centerIndex, scrollMethod])

    const scroll = (direction: "left" | "right") => {
        if (isTransitioning) return

        setScrollMethod("button")

        const newIndex = direction === "left" ? centerIndex - 1 : centerIndex + 1
        setCenterIndex(newIndex)
        scrollToCard(newIndex, "smooth")
    }

    // Scroll manuel (au doigt/souris)
    const handleScroll = () => {
        if (scrollEndTimeout.current) {
            clearTimeout(scrollEndTimeout.current)
        }

        scrollEndTimeout.current = setTimeout(() => {
            if (!scrollContainerRef.current || isTransitioning) return

            const container = scrollContainerRef.current
            const { scrollLeft, clientWidth } = container
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

    return (
        <section id="work" className="bg-background">
            <div className="relative group">
                <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
                    disabled={isTransitioning}
                >
                    <ChevronLeft className="h-8 w-8" />
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
                    <div className="flex-shrink-0 w-[calc(50vw-300px)]" />

                    {projects.map((project, index) => (
                        <Card
                            key={`${project.title}-${index}`}
                            ref={el => (cardRefs.current[index] = el)}


                            className={`flex-shrink-0 w-[500px] h-[420px] bg-card/50 backdrop-blur border-border rounded-3xl overflow-hidden transition-all duration-500 ${
                                index === centerIndex
                                    ? "scale-100 opacity-100 z-10"
                                    : "scale-90 opacity-50"
                            }`}
                            style={{ scrollSnapAlign: "center" }}
                        >

                            <div className="p-6 items-center">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-sm ">{project.category}</p>
                            </div>
                            <div className="aspect-[16/9] relative">
                                <Image src={project.image} alt={project.title} fill className="object-contain" />
                            </div>
                        </Card>
                    ))}

                    <div className="flex-shrink-0 w-[calc(50vw-300px)]" />
                </div>

                <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
                    disabled={isTransitioning}
                >
                    <ChevronRight className="h-8 w-8" />
                </Button>

            </div>
        </section>
    )
}