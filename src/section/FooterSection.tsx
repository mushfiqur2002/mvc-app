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

            <div className="w-[80%] center-between py-6">
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

            <div className="w-[80%] h-[1.25px] bg-[rgba(255,255,255,.20)]"></div>

            <div className="center-between w-[80%] text-white font-thin py-8">
                <div className="flex gap-6">
                    <p>Copyright © 2026 MACV. All Rights Reserved</p>
                    {/* <Link to={'/'}></Link> */}
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
    )
}

export default FooterSection
