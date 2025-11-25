"use client"

import Link from "next/link";
import { Button } from "@/component/ui/button";
import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react";

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
        { name: "About", href: "#about" },
        { name: "Work", href: "#work" },
        { name: "Skills", href: "#about" },
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
                        ${scrolled
                        ? "w-[90%] md:w-[85%] lg:w-[1000px] h-14 bg-[#050505]/80 border-white/10 shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]"
                        : "w-[95%] md:w-[90%] lg:w-[1200px] h-16 bg-transparent border-transparent shadow-none"
                    }
                        backdrop-blur-md rounded-full border
                    `}
                >
                    {/* 1. LOGO (Gauche) */}
                    <Link href="/" className="flex items-center gap-2 group z-20">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#D946EF] flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                            TF
                        </div>
                        <span className="font-bold text-white tracking-tight hidden sm:block group-hover:text-[#8B5CF6] transition-colors">
                            Tony Fages
                        </span>
                    </Link>

                    {/* 2. LIENS (Centre - Desktop uniquement) */}
                    <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 gap-1 bg-white/5 p-1 rounded-full border border-white/5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-5 py-1.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* 3. ACTIONS (Droite) */}
                    <div className="flex items-center gap-4 z-20">

                        <div className="hidden md:flex items-center gap-3 border-r border-white/10 pr-4">
                            <Link href="https://github.com/tonyfgs" className="text-gray-400 hover:text-[#8B5CF6] transition-colors hover:scale-110">
                                <Github size={18} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/tony-fages/" className="text-gray-400 hover:text-[#8B5CF6] transition-colors hover:scale-110">
                                <Linkedin size={18} />
                            </Link>
                        </div>

                        {/* CTA Button */}
                        <Button
                            className="hidden md:flex bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full px-6 h-9 text-sm shadow-[0_0_15px_-3px_rgba(139,92,246,0.6)] hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.8)] transition-all"
                        >
                            Let&apos;s Talk
                        </Button>

                        {/* Burger Menu (Mobile) */}
                        <button
                            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </nav>
            </header>

            {/* --- MENU MOBILE FULLSCREEN (Overlay) --- */}
            <div
                className={`
                    fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center
                    transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                    ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
                `}
            >
                {/* Background Decor */}
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#8B5CF6]/20 blur-[100px] rounded-full pointer-events-none" />

                {/* Bouton Fermer */}
                <button
                    className="absolute top-8 right-8 p-3 bg-white/5 rounded-full text-white hover:bg-white/20 transition-colors border border-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <X size={24} />
                </button>

                {/* Liens Mobile */}
                <nav className="flex flex-col items-center gap-8 relative z-10">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 hover:to-[#8B5CF6] transition-all duration-300"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Footer Mobile */}
                <div className="absolute bottom-12 flex flex-col items-center gap-6 w-full px-8">
                    <div className="w-full h-px bg-white/10" />
                    <div className="flex gap-6">
                        <Link href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white border border-white/5">
                            <Github size={20} />
                        </Link>
                        <Link href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white border border-white/5">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white border border-white/5">
                            <Twitter size={20} />
                        </Link>
                    </div>
                    <Button className="w-full bg-[#8B5CF6] text-white py-6 text-lg rounded-2xl shadow-lg shadow-purple-900/40">
                        Me contacter
                    </Button>
                </div>
            </div>
        </>
    )
}