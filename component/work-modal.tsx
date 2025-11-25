import {Project} from "@/model/project";
import {useEffect} from "react";
import {Button} from "@/component/ui/button";
import { X } from "lucide-react"
import Image from "next/image"


interface WorkModalProps {
    project: Project | null;
    onClose: () => void;
}

export function WorkModal({ project, onClose }: WorkModalProps){
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-6xl bg-[#1a1a1a] border border-white/10 text-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <Button
                    variant="ghost"
                    className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-white/20 rounded-full text-white"
                    onClick={onClose}
                >
                    <X className="h-5 w-5" />
                </Button>

                <div className="relative h-64 w-full bg-gradient-to-b from-gray-800 to-[#1a1a1a]">
                    {project.photos.map((photo: string, index: number) => (
                        <Image
                            key={index}
                            src={photo}
                            alt={project.title}
                            fill
                            className="object-contain p-4"
                        />
                    ))}

                </div>

                <div className="p-8">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {project.category}
                    </span>
                    <h2 className="text-3xl font-bold mt-4 mb-4">{project.title}</h2>
                    <p className="text-gray-400">
                        Detailed description for {project.title}.
                    </p>
                </div>
            </div>
        </div>
    );
}