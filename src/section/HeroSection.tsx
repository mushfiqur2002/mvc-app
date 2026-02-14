import { Button } from "@/components/ui/button"
import articleSideImage from "../assets/article_side_image.png"
function HeroSection() {
    return (
        <div className="w-full flex items-center justify-center hero-background-gradient relative pt-36">
            <div className="w-full absolute top-[-10px] left-0 z-10">
                <p className="uppercase text-[325px] font-semibold text-end hero-text-gradient text-transparent">mavc</p>
            </div>

            <div className="article w-full h-full relative z-20 flex justify-items-center items-center mx-6">
                <div className="writing z-10 flex flex-col gap-6">
                    <h1 className="hero-article-gradient text-[48px]">Effortlessly perform difficult <br></br>aerial acrobatics with<br></br> MAVC3 Pro</h1>
                    <p className="text-gray-400 text-[18px]">New pilots can now perform spectacular flips, drifts, and other<br></br> captivating manoeuvres.</p>
                    <div className="flex gap-4">
                        <Button className="gradient-button rounded-full shadow-[0px_-5px_15px_0px_rgba(3,_150,_255,_1)]">Buy Now</Button>
                        <Button className="normal-button rounded-full">Watch Demo</Button>
                    </div>
                </div>
                <div className="image absolute right-0 top-[-100px] h-full w-[650px]">
                    <img src={articleSideImage} alt="Article side image" />
                </div>
            </div>
        </div>
    )
}


export default HeroSection
