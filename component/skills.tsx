    "use client"
import {useEffect, useRef} from "react";


const skills = [
    { name: "React", size: "large" },
    { name: "C#", size: "medium" },
    { name: "Android", size: "large" },
    { name: "Java", size: "small" },
    { name: "Angular", size: "large" },
    { name: "HTML/CSS", size: "small" },
    { name: "SQL", size: "small" },
]

const sizeClasses = {
    small: "text-sm px-4 py-2",
    medium: "text-base px-5 py-2.5",
    large: "text-lg px-6 py-3",
}

export function Skills() {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const bubbles = containerRef.current?.querySelectorAll(".skill-bubble");
        if (!bubbles) return;

        bubbles.forEach((bubble, index) => {
            const element = bubble as HTMLElement
            const delay: number = index * 0.1
            element.style.animationDelay = `${delay}s`
        })
    }, [])

    return (
        <div ref={containerRef} className="flex flex-wrap gap-3 justify-center items-center min-h-[200px]">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    // @ts-expect-error
                    className={`skill-bubble ${sizeClasses[skill.size]} rounded-full border border-primary-foreground/30 text-primary-foreground
            hover:bg-primary-foreground/10 hover:scale-110 transition-all duration-300 cursor-default
            animate-float`}
                    style={{
                        // eslint-disable-next-line react-hooks/purity
                        animationDuration: `${3 + Math.random()  * 2}s`,
                    }}
                >
                    {skill.name}
                </div>
            ))}
        </div>
    )
}