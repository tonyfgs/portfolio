"use client" // Nécessaire si on veut des petites animations plus tard

import { Card } from "@/component/ui/card";
import { Skills } from "@/component/skills";
import {Computer, User} from "lucide-react"; // Optionnel : petite icône sympa

export function About() {
    return (
        <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">

            {/* Décoration d'arrière-plan (Lueur très subtile) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* --- CARTE GAUCHE : BIO --- */}
                    <Card className="
                        relative overflow-hidden
                        border border-white/10 bg-[#0a0a0a] 
                        p-10 rounded-[2.5rem] 
                        shadow-[0_0_50px_-10px_rgba(139,92,246,0.05)]
                        group
                    ">
                        {/* Effet de brillance au survol (Glow) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* En-tête avec Icône */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/20">
                                <User className="text-[#8B5CF6] w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-bold text-white tracking-tight">
                                À propos
                            </h2>
                        </div>

                        {/* Texte de présentation */}
                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed relative z-10">
                            <p>
                                Je suis un développeur passionné par la création d'interfaces numériques qui marquent les esprits. Mon approche combine <span className="text-white font-medium">précision technique</span> et <span className="text-white font-medium">sensibilité artistique</span>.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            </p>
                        </div>

                        {/* Tags / Badges */}
                        <div className="flex flex-wrap gap-3 mt-10 relative z-10">
                            {["Mobile Expert", "Fullstack", "UI Lover", "Creative"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 rounded-full border border-white/5 bg-white/5 text-sm text-gray-300 hover:border-[#8B5CF6]/30 hover:text-white transition-colors cursor-default"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Card>
                    <Card className="  relative overflow-hidden
                        border border-white/10 bg-[#0a0a0a]
                        p-10 rounded-[2.5rem]
                        shadow-[0_0_50px_-10px_rgba(139,92,246,0.05)]
                        group">
                    <div className="flex flex-col h-full justify-center">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/20">
                                <Computer className="text-[#8B5CF6] w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-bold text-white tracking-tight">
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