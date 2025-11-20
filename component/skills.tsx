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
]

const sizeClasses: Record<string, string> = {
    small: "text-sm px-4 py-2",
    medium: "text-base px-5 py-2.5",
    large: "text-lg px-6 py-3",
}

export function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrappers = containerRef.current?.querySelectorAll(".skill-wrapper");
        if (!wrappers) return;

        wrappers.forEach((wrapper) => {
            const element = wrapper as HTMLElement;

            // 1. VITESSE : Très lent (entre 12s et 20s)
            // C'est ce qui donne l'effet apaisant.
            const duration = 12 + Math.random() * 8;

            // 2. DÉLAI : Démarrage aléatoire dans le passé
            const delay = Math.random() * -20;

            // 3. DISTANCE : Mouvements courts (seulement +/- 15px)
            // On évite les grands déplacements qui fatiguent l'œil.
            const tx1 = (Math.random() * 30) - 15;
            const ty1 = (Math.random() * 30) - 15;

            const tx2 = (Math.random() * 30) - 15;
            const ty2 = (Math.random() * 30) - 15;

            // 4. ROTATION : Très subtile (+/- 5 degrés max)
            const r1 = (Math.random() * 10) - 5;
            const r2 = (Math.random() * 10) - 5;

            // Application des variables CSS
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
        <div ref={containerRef} className="flex flex-wrap gap-6 justify-center items-center min-h-[200px]">
            {skills.map((skill, index) => (
                // WRAPPER : Gère le flottement lent
                <div
                    key={index}
                    className="skill-wrapper animate-float-organic will-change-transform"
                >
                    {/* BULLE : Gère le style et le hover rapide */}
                    <div
                        className={`
                            ${sizeClasses[skill.size]} 
                            rounded-full 
                            bg-primary-foreground/5 
                            border border-primary-foreground/20 
                            text-primary-foreground/90
                            backdrop-blur-[2px]
                            shadow-sm
                            
                            hover:bg-primary-foreground/15 
                            hover:border-primary-foreground/40
                            hover:scale-110 
                            hover:text-primary-foreground
                            transition-all duration-500 ease-out 
                            cursor-default
                        `}
                    >
                        {skill.name}
                    </div>
                </div>
            ))}
        </div>
    )
}