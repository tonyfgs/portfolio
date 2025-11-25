import { Button } from "@/component/ui/button";

export function Presentation() {
    return (
        <section id="home" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20 m-4 rounded-[2rem] border border-white/5 bg-[#050505]">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#8B5CF6] opacity-20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
                    Je m'appelle <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">Tony</span>
                </h1>

                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Développeur passionné créant des expériences numériques immersives et performantes.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {/* Boutons avec couleurs "en dur" pour être sûr que ça marche */}
                    <Button
                        size="lg"
                        className="rounded-full px-8 text-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-white shadow-lg shadow-purple-500/20 transition-all duration-300"
                    >
                        M'embaucher
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full px-8 text-lg border-white/10 text-white hover:bg-white/5 hover:text-white"
                    >
                        Télécharger le CV
                    </Button>
                </div>
            </div>
        </section>
    )
}