"use client"

import { Card } from "@/component/ui/card";
import { Skills } from "@/component/skills";
import { Computer, User } from "lucide-react";

export function About() {
    return (
        <section id="about&skills" className="py-24 bg-background relative overflow-hidden transition-colors duration-300">

            {/* Décoration d'arrière-plan */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* --- CARTE GAUCHE : BIO --- */}
                    <Card className="
                        relative overflow-hidden
                        border border-border bg-card
                        p-10 rounded-[2.5rem]
                        shadow-lg dark:shadow-[0_0_50px_-10px_rgba(139,92,246,0.05)]
                        group
                    ">
                        {/* Effet de brillance au survol */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* En-tête avec Icône */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                <User className="text-primary w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-bold text-foreground tracking-tight">
                                À propos
                            </h2>
                        </div>

                        {/* Texte de présentation */}
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed relative z-10">
                            <p>
                                Je suis un développeur passionné par la création d'interfaces numériques qui marquent les esprits. Mon approche combine <span className="text-foreground font-medium">précision technique</span> et <span className="text-foreground font-medium">sensibilité artistique</span>.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        {/* Tags / Badges */}
                        <div className="flex flex-wrap gap-3 mt-10 relative z-10">
                            {["Mobile Expert", "Fullstack", "UI Lover", "Creative"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors cursor-default"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Card>

                    <Card className="relative overflow-visible border-none bg-transparent shadow-none p-0">
                        <div className="flex flex-col h-full justify-center">
                            <div className="flex items-center gap-4 mb-8 pl-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <Computer className="text-primary w-6 h-6" />
                                </div>
                                <h2 className="text-4xl font-bold text-foreground tracking-tight">
                                    Compétences
                                </h2>
                            </div>

                            <Skills/>
                        </div>
                    </Card>

                </div>
            </div>
        </section>
    )
}