"use client"

import Link from "next/link";
import { Button } from "@/component/ui/button";
import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react";
import {ThemeManagement} from "@/component/theme-management";

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About & Skills", href: "#about&skills" },
        { name: "Work", href: "#work" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <header
                className={`
                    fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300
                    ${scrolled ? "pt-4" : "pt-6"}
                `}
            >
                <nav
                    className={`
                        relative flex items-center justify-between px-6 
                        transition-all duration-300 ease-out
                        /* Ici on utilise bg-background/80 et border-border
                           Cela deviendra Blanc en Light mode et Noir en Dark mode
                        */
                        ${scrolled
                        ? "w-[90%] md:w-[85%] lg:w-[1000px] h-14 bg-background/80 border-border shadow-md"
                        : "w-[95%] md:w-[90%] lg:w-[1200px] h-16 bg-transparent border-transparent shadow-none"
                    }
                        backdrop-blur-md rounded-full border
                    `}
                >

                    <Link href="/" className="flex items-center gap-2 group z-20">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                            TF
                        </div>

                        <span className="font-bold text-foreground tracking-tight hidden sm:block group-hover:text-primary transition-colors">
                            Tony Fages
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 gap-1 bg-secondary/50 p-1 rounded-full border border-border">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background/50 rounded-full transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 z-20">

                        <div className="hidden md:flex items-center gap-3 border-r border-border pr-4">
                            <Link href="https://github.com/tonyfgs" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                                <Github size={18} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/tony-fages/" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                                <Linkedin size={18} />
                            </Link>
                        </div>

                        <ThemeManagement />

                        <Button
                            className="hidden md:flex rounded-full px-6 h-9 text-sm shadow-lg hover:shadow-primary/25 transition-all"
                        >
                            Let&apos;s Talk
                        </Button>

                        <button
                            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-full transition-colors"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </nav>
            </header>

            <div
                className={`
                    fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center
                    transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                    ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
                `}
            >
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

                <button
                    className="absolute top-8 right-8 p-3 bg-secondary rounded-full text-foreground hover:bg-muted transition-colors border border-border"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <X size={24} />
                </button>

                <nav className="flex flex-col items-center gap-8 relative z-10">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground hover:to-primary transition-all duration-300"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-12 flex flex-col items-center gap-6 w-full px-8">
                    <div className="w-full h-px bg-border" />
                    <div className="flex gap-6">
                        <Link href="#" className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-foreground border border-border">
                            <Github size={20} />
                        </Link>
                        <Link href="#" className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-foreground border border-border">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="#" className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-foreground border border-border">
                            <Twitter size={20} />
                        </Link>
                    </div>
                    <Button className="w-full py-6 text-lg rounded-2xl shadow-lg">
                        Me contacter
                    </Button>
                </div>
            </div>
        </>
    )
}