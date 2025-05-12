export default function Navbar()
{
    return <>
        <div className=" sticky top-0 z-20">
            <div className=" flex">
                <nav className="flex gap-5 h-16 w-full px-10 items-center bg-white font-inter font-semibold">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>

                </nav>

                <nav className=" flex justify-end w-full bg-white h-16" >
                    <a className=" flex items-center justify-center h-full aspect-video"
                        href="https://github.com/Dr3EmUr">
                        <img
                        className=" h-[60%]"
                        src={new URL("../../images/Github.png", import.meta.url).href}></img></a>
                </nav>
            </div>
                
            <div className=" h-2 bg-gradient-to-b from-white to-transparent "></div>
        </div>
        
    </>
}