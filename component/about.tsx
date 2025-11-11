import {Card} from "@/component/ui/card";
import {Skills} from "@/component/skills";

export function About() {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border-border p-8 rounded-3xl">
                        <h2 className="text-3xl font-bold text-foreground mb-6 text-center">About Me</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="flex gap-3">
                            <span className="px-4 py-2 rounded-full border border-border text-sm text-foreground">Mobile</span>
                            <span className="px-4 py-2 rounded-full border border-border text-sm text-foreground">Development</span>
                        </div>
                    </Card>

                    <Card className="bg-transparent p-8 rounded-3xl">
                        <h2 className="text-3xl font-bold text-foreground mb-6 text-center">My skills</h2>
                        <Skills/>
                    </Card>
                </div>

            </div>
        </section>
    )
    
}