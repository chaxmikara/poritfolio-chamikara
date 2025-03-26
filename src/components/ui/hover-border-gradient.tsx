"use client";

import { cn } from "@/lib/utils";
import React, { ElementType, ReactNode } from "react";

interface HoverBorderGradientProps {
    children: ReactNode;
    containerClassName?: string;
    className?: string;
    as?: ElementType;
    onClick?: () => void;
    [key: string]: any;
}

export const HoverBorderGradient = ({
    children,
    containerClassName,
    className,
    as: Component = "div",
    onClick,
    ...props
}: HoverBorderGradientProps) => {
    return (
        <div
            className={cn(
                "group relative p-[1px] overflow-hidden rounded-lg",
                containerClassName
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Component
                className={cn(
                    "relative z-10 rounded-lg",
                    className
                )}
                onClick={onClick}
                {...props}
            >
                {children}
            </Component>
        </div>
    );
};
