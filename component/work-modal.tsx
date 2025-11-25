"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/component/ui/button"

// Define the Project type structure
export type Project = {
    title: string;
    imagePresentation: string;
    category: string;
    description: string;
    photos: string[];
}

interface WorkModalProps {
    project: Project | null;
    onClose: () => void;
}

export function WorkModal({ project, onClose }: WorkModalProps) {

    // Lock body scroll when the modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    // If no project is selected, do not render anything
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#050505]/90 backdrop-blur-md animate-in fade-in duration-300"
            onClick={onClose}
        >
            <div
                className="
                    relative w-full max-w-5xl max-h-[90vh] overflow-y-auto
                    bg-[#0a0a0a] border border-white/10
                    text-white rounded-3xl shadow-[0_0_50px_-10px_rgba(139,92,246,0.15)]
                    animate-in zoom-in-95 duration-300
                    scrollbar-hide
                "
                onClick={(e) => e.stopPropagation()}
            >
                {/* Floating Close Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="fixed top-6 right-6 z-50 bg-black/50 hover:bg-white/10 text-white rounded-full border border-white/10 backdrop-blur-md transition-all hover:rotate-90 duration-300"
                    onClick={onClose}
                >
                    <X className="h-5 w-5" />
                </Button>

                {/* --- HEADER IMAGE (Presentation) --- */}
                <div className="relative h-[400px] w-full bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center overflow-hidden group">

                    {/* Glow effect behind the image */}
                    <div className="absolute inset-0 bg-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <Image
                        src={project.imagePresentation}
                        alt={project.title}
                        fill
                        className="object-contain p-8 z-10 drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient fade at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20" />
                </div>

                {/* --- CONTENT SECTION --- */}
                <div className="p-8 md:p-12">

                    {/* Header Info */}
                    <div className="flex flex-col items-start gap-4 mb-8">
                        <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20 shadow-[0_0_10px_-3px_rgba(139,92,246,0.3)]">
                            {project.category}
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            {project.title}
                        </h2>
                    </div>

                    {/* Description Text */}
                    <div className="prose prose-invert max-w-none text-gray-400 text-lg leading-relaxed mb-12">
                        <p>{project.description}</p>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

                    {/* --- GALERIE --- */}
                    {project.photos.length > 0 && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="w-1 h-8 bg-[#8B5CF6] rounded-full block"></span>
                                Galerie du projet
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.photos.map((photo, index) => (
                                    <div
                                        key={index}
                                        className="relative h-72 w-full rounded-2xl border border-white/10 bg-black/40 overflow-hidden group"
                                    >
                                        <Image
                                            src={photo}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            fill
                                            className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Effet subtil au survol */}
                                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#8B5CF6]/30 rounded-2xl transition-colors duration-300 pointer-events-none" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Footer / Close Button */}
                    <div className="mt-12 flex justify-end">
                        <Button
                            onClick={onClose}
                            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full px-8 py-6 text-base transition-colors"
                        >
                            Fermer le projet
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}