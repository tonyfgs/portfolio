import { Button } from "@/component/ui/button";

export function Presentation() {
    return (
        <section id="home" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20 m-4 rounded-[2rem] border border-border bg-card/50">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl md:text-8xl font-bold text-foreground mb-8 leading-tight tracking-tight">
                    Sofware & Mobile Engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tony</span>
                </h1>

                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Freelance mobile
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        size="lg"
                        className="rounded-full px-8 text-lg shadow-lg shadow-primary/20 transition-all duration-300"
                    >
                        M'embaucher
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full px-8 text-lg border-border text-foreground hover:bg-secondary"
                    >
                        Télécharger le CV
                    </Button>
                </div>
            </div>
        </section>
    )
}