import {Button} from "@/component/ui/button";

export function Presentation() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a1a] to-[#9E2DF6] pt-20 m-4 rounded-4xl">
            <div className="container mx-auto px-6 text-center">

                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight text-balance">
                    Je m'appelle Tony
                </h1>



                <div className="flex items-center justify-center gap-4">
                <Button  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                    M'embaucher
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                    Télécharger le CV
                </Button>
            </div>

            </div>
        </section>
    )
}