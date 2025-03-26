"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function HeroSection() {
    return (
        <section className="relative flex items-center justify-center py-8 md:py-10 lg:py-20 overflow-hidden w-full px-4 md:px-0">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
                    <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1 text-center lg:text-left mt-8 lg:mt-0">
                        <div className="space-y-2">
                            <h1 className="relative z-20 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                                Hi, I&apos;m{" "}
                                <div className="mt-2">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                                        Chamikara <br className="hidden sm:inline" /> Kodithuwakku
                                    </span>
                                </div>
                            </h1>
                            <p className="relative z-20 max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                                A passionate developer creating beautiful and functional web experiences
                            </p>
                        </div>
                        <div className="relative z-20 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Link href="#contact">
                                <Button className="group w-full sm:w-auto text-sm py-2 px-4">
                                    Contact Me
                                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                                </Button>
                            </Link>
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 py-2 px-4 text-sm"
                            >
                                <span>Download CV</span>
                                <span className="inline-block ml-1">📄</span>
                            </HoverBorderGradient>
                        </div>
                    </div>
                    <div className="flex items-center justify-center order-1 lg:order-2">
                        <div className="relative z-20 aspect-square overflow-hidden rounded-full border-8 border-muted w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                            <div className="w-full h-full relative p-4">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src="/images/pic_2.png"
                                        alt="Profile picture"
                                        fill
                                        priority
                                        sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 350px, 400px"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
