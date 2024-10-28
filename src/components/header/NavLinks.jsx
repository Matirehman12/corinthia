import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navData } from "@/constants";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const location = usePathname();

  return (
    <>
      {navData.map(({ _id, title, href }) => {
        const isActive = location === href;
        return (
          <Link
            key={_id}
            href={href}
            className={`relative -mx-3 -my-2 rounded-lg px-3 pt-2 lg-[14px] xl:text-lg text-[#080808] font-caslon transition-colors hover:text-gray-900 uppercase ${
              isActive ? "bg-gray-100" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(_id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === _id && !isActive && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-gray-100"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <span className="relative z-10">{title}</span>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
