"use client"
import { useEffect, useRef } from "react";

const skills = [
    { name: "React", size: "large" },
    { name: "C#", size: "medium" },
    { name: "Android", size: "large" },
    { name: "Java", size: "small" },
    { name: "Angular", size: "large" },
    { name: "HTML/CSS", size: "small" },
    { name: "SQL", size: "small" },
    { name: "Next.js", size: "large" },
    { name: "Tailwind", size: "medium" },
]

const sizeClasses: Record<string, string> = {
    small: "text-xs px-4 py-2 border-border/50",
    medium: "text-sm px-5 py-2.5 border-border",
    large: "text-base px-6 py-3 border-border font-medium",
}

export function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrappers = containerRef.current?.querySelectorAll(".skill-wrapper");
        if (!wrappers) return;

        wrappers.forEach((wrapper) => {
            const element = wrapper as HTMLElement;
            const duration = 15 + Math.random() * 10;
            const delay = Math.random() * -20;
            const tx1 = (Math.random() * 40) - 20;
            const ty1 = (Math.random() * 40) - 20;
            const tx2 = (Math.random() * 40) - 20;
            const ty2 = (Math.random() * 40) - 20;
            const r1 = (Math.random() * 15) - 7.5;
            const r2 = (Math.random() * 15) - 7.5;

            element.style.setProperty('--tx1', `${tx1}px`);
            element.style.setProperty('--ty1', `${ty1}px`);
            element.style.setProperty('--tx2', `${tx2}px`);
            element.style.setProperty('--ty2', `${ty2}px`);
            element.style.setProperty('--r1', `${r1}deg`);
            element.style.setProperty('--r2', `${r2}deg`);
            element.style.animationDuration = `${duration}s`;
            element.style.animationDelay = `${delay}s`;
        })
    }, [])

    return (
        <div ref={containerRef} className="flex flex-wrap gap-4 justify-center items-center min-h-[350px] p-4 relative overflow-hidden">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="skill-wrapper animate-float-organic will-change-transform z-10"
                >
                    <div
                        className={`
                            ${sizeClasses[skill.size]} 
                            rounded-full 
                            
                            /* STYLE DYNAMIQUE (Glass Clair / Sombre) */
                            bg-white/50 dark:bg-white/[0.03]
                            backdrop-blur-md 
                            border 
                            text-foreground/80 dark:text-gray-300
                            shadow-sm dark:shadow-black/20

                            /* INTERACTIONS */
                            hover:bg-primary/20 
                            hover:border-primary/50
                            hover:text-foreground dark:hover:text-white
                            hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)]
                            hover:scale-110 
                            
                            transition-all duration-500 ease-out 
                            cursor-default
                            tracking-wide
                        `}
                    >
                        {skill.name}
                    </div>
                </div>
            ))}
        </div>
    )
}