"use client";

import { usePathname } from "next/navigation";
import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
	useRef,
} from "react";

interface LayoutContextType {
  isScrolled: boolean;
  isHome: boolean;
  isMenuOpen: boolean;
  // setIsMenuOpen: (value: boolean) => void;
  toggleMenu: () => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const pathname = usePathname();
  const ticking = useRef(false);

  useEffect(() => {
    setIsHome(pathname === '/');
  }, [pathname]);

  useEffect(() => {
    if (!isHome) return; // Only add scroll event listener if on home page

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 1);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <LayoutContext.Provider value={{ isScrolled, isHome, toggleMenu, isMenuOpen }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
	const context = useContext(LayoutContext);
	if (context === undefined) {
		throw new Error("useLayout must be used within a LayoutProvider");
	}
	return context;
}
