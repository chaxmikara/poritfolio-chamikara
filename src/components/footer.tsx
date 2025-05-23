import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {currentYear} Chamikara Kodithuwakku. All rights reserved.
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="https://github.com/chaxmikara" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/chamikara-kodithuwakku-5a1532292" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
