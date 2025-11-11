import Link from "next/link";
import {Button} from "@/component/ui/button";

export function Navigation(){
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold text-foreground">
                        Tony Fages
                    </Link>

                    <div className="flex items-center gap-8">
                        <Link href="#home" className="text-sm text-foreground hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="#about" className="text-sm text-foreground hover:text-primary transition-colors">
                            About
                        </Link>
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                            </svg>
                        </div>
                        <Link href="#work" className="text-sm text-foreground hover:text-primary transition-colors">
                            Work
                        </Link>
                        <Link href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">
                            Contact
                        </Link>
                    </div>

                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                        LET&apos;S TALK →
                    </Button>
                </div>
            </div>
        </nav>
    )
}