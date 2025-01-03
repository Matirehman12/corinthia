import clsx from "clsx";
import Link from "next/link";
import React, { forwardRef } from "react";

const baseStyles = {
    solid:
        "inline-flex justify-center items-center  outline-2 outline-offset-2 transition-colors",
    outline:
        "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
};

const variantStyles = {
    solid: {
        blue: "relative overflow-hidden bg-blue-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-blue-600 active:text-white/80 before:transition-colors",
        white:
            "bg-white text-blue-900 hover:bg-white/90 active:bg-white/90 active:text-blue-900/70",
        gray: "bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80",
        dark: "bg-[#080808] font-caslon text-[12px] xl:text-[16px] font-normal px-3 md:px-9 py-2 md:py-4 pt-[12px] md:pt-5 text-white hover:bg-gray-900 rounded uppercase"
    },
    outline: {
        gray: "border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80",
    },
};

const Button = forwardRef(function Button(
    { variant = "solid", color = "gray", className, href, ...props },
    ref
) {
    className = clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        className
    );

    return href ? (
        <Link ref={ref} href={href} className={className} {...props} />
    ) : (
        <button ref={ref} className={className} {...props} />
    );
});

export default Button;
