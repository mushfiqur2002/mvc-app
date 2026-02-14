import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { LuAlignJustify, LuCreativeCommons, LuSearch } from "react-icons/lu";

function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // change at 50px scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    console.log(scrolled);


    return (
        <div className={`w-full h-20 flex items-center justify-between md:flex-row flex-row-reverse px-8 fixed top-0 z-50 transition-all duration-300
        ${scrolled ? "bg-[rgba(255,255,255,.19)] bg-blur-xl backdrop-blur-lg shadow-lg" : "bg-transparent"}
      `}
        >
            <div className="flex gap-6">
                <Button className="center-center bg-transparent border-none text-[14px]">
                    <span className="hidden md:flex">Menu</span>
                    <LuAlignJustify className="size-6 md:size-5" />
                </Button>

                <Button className="hidden md:flex bg-transparent border-none text-[14px]">
                    <span>Tools</span>
                    <LuSearch className="size-5" />
                </Button>
            </div>

            <div className="relative ml-2 md:ml-0">
                <h1 className="uppercase text-white text-[22px] md:text-[24px] flex relative">
                    <span>Mavc</span>
                    <span className="absolute top-1 right-[-10px]">
                        <LuCreativeCommons size={8} />
                    </span>
                </h1>
            </div>

            <div className="hidden md:flex">
                <Button className="text-[12px] md:text-[14px] rounded-full gradient-button">
                    Buy Now
                </Button>
            </div>
        </div>
    );
}

export default NavBar;
