import { Button } from "./ui/button"
import { LuAlignJustify, LuCreativeCommons, LuSearch } from "react-icons/lu";

function NavBar() {
    return (
        <div className="w-full h-20 center-between px-6 absolute top-0 z-50">
            <div className="flex gap-6">
                <Button className="center-center bg-transparent border-none text-[14px]">
                    Menu
                    <LuAlignJustify />
                </Button>

                <Button className="center-center bg-transparent border-none text-[14px]">
                    Tools
                    <LuSearch />
                </Button>
            </div>
            <div>
                <h1 className="uppercase text-white text-[22px] flex relative">
                    <span>Mavc</span>
                    <span className="absolute top-1 right-[-10px]">
                        <LuCreativeCommons size={8} />
                    </span>
                </h1>
            </div>
            <div>
                <Button className="text-[14px] rounded-full gradient-button">
                    Buy Now
                </Button>
            </div>
        </div>
    )
}

export default NavBar
