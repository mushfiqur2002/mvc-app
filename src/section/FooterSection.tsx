import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import { LuCreativeCommons } from "react-icons/lu"
import { Link } from "react-router-dom"

function FooterSection() {
    return (
        <div className="flex center-between flex-col mt-12">
            <div className="w-[90%] md:w-[80%] center-between flex-col md:flex-row py-4">
                <div className="">
                    <h1 className="uppercase text-white text-[22px] flex relative">
                        <span>Mavc</span>
                        <span className="absolute top-1 right-[-10px]">
                            <LuCreativeCommons size={8} />
                        </span>
                    </h1>
                </div>

                <div>
                    <NavigationMenu className="text-white font-thin">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent font-thin">Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>

                        <NavigationMenuLink>Product</NavigationMenuLink>
                        <NavigationMenuLink>Warranty</NavigationMenuLink>
                        <NavigationMenuLink>Contact Us</NavigationMenuLink>
                    </NavigationMenu>
                </div>
            </div>

            <div className="w-[90%] md:w-[80%] h-[1.25px] bg-[rgba(255,255,255,.20)]"></div>

            <div className="w-[90%] md:w[80%] center-center flex-col-reverse gap-4 text-white font-thin py-8">
                <p className="text-xs text-[rgba(255,255,255,.5)]">Copyright © 2026 MACV. All Rights Reserved</p>
                <div className="w-[90%] flex items-center justify-center flex-col-reverse md:flex-row md:justify-between gap-4">
                    <div className="flex gap-4">
                        <Link to={'/'}>Privacy Policy</Link>
                        <Link to={'/'}>Terms of Use</Link>
                    </div>
                    <div className="flex gap-4">
                        <FaFacebook size={19} />
                        <FaInstagram size={19} />
                        <FaX size={19} />
                        <FaLinkedin size={19} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection
