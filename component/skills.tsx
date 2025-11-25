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
    small: "text-xs px-4 py-2 border-white/5",
    medium: "text-sm px-5 py-2.5 border-white/10",
    large: "text-base px-6 py-3 border-white/10 font-medium",
}

export function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrappers = containerRef.current?.querySelectorAll(".skill-wrapper");
        if (!wrappers) return;

        wrappers.forEach((wrapper) => {
            const element = wrapper as HTMLElement;

            // Paramètres de mouvement organique "Lent et fluide"
            const duration = 15 + Math.random() * 10; // Plus lent (15-25s)
            const delay = Math.random() * -20;

            // Mouvements aléatoires sur les axes X et Y
            const tx1 = (Math.random() * 40) - 20;
            const ty1 = (Math.random() * 40) - 20;
            const tx2 = (Math.random() * 40) - 20;
            const ty2 = (Math.random() * 40) - 20;

            // Rotation légère pour l'effet de flottement
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

            <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#8B5CF6]/10 blur-[80px] rounded-full pointer-events-none" />

            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="skill-wrapper animate-float-organic will-change-transform z-10"
                >
                    <div
                        className={`
                            ${sizeClasses[skill.size]} 
                            rounded-full 
                            
                            /* STYLE GLASS (Verre sombre) */
                            bg-white/[0.03] 
                            backdrop-blur-md 
                            border 
                            text-gray-300
                            shadow-lg shadow-black/20

                            /* INTERACTIONS */
                            hover:bg-[#8B5CF6]/20 
                            hover:border-[#8B5CF6]/50
                            hover:text-white
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