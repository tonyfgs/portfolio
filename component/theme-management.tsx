"use client"
import { useEffect, useState } from "react";
import { Button } from "@/component/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeManagement() {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // 1. Lire la préférence sauvegardée ou celle du système
        const isDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

        setDarkMode(isDark);

        // 2. Appliquer la classe immédiatement
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    function toggleTheme() {
        const newMode = !isDarkMode;
        setDarkMode(newMode);

        // 3. Basculer la classe 'dark' (et non 'dark-mode')
        if (newMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = 'light';
        }
    }

    return (
        <Button
            variant="ghost"
            onClick={toggleTheme}
            className="rounded-full text-foreground hover:bg-black/5 dark:hover:bg-white/10"
        >
            {isDarkMode ? (
                <Moon className="h-[1.2rem] w-[1.2rem] text-white transition-all" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] text-black transition-all" />
            )}
            <span className="sr-only">Changer de thème</span>
        </Button>
    )
}