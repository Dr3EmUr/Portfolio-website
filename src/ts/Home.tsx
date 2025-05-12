import Arrow from "./Components/Icons";
import Divisor from "./Components/Divisor";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import ButtonLink from "./Components/Button";

export default function ()
{
    return (
        <>
            
            <main className=" w-full h-full bg-black">
                <Navbar />

                <div className="flex-col m-auto mt-[20vh] text-white h-fit w-fit font-roboto">
                    <h2 className=" text-5xl">Hello, I am</h2>
                    <h1 className=" text-8xl font-extrabold">Marco Chiapperini</h1>
                    <h2 className=" text-4xl mt-3">And I am a Full-stack developer</h2>
                    <div className=" mt-5 flex justify-center items-center gap-7 text-[var(--arrowGray)] font-inter">
                        <Arrow /> Scroll down to see my work!  <Arrow />
                    </div>
                </div>
                
                <div className=" mt-52">
                    <Divisor rotation={-5} />
                </div>

                <div className=" z-10 bottom-[200px] relative">
                    <section
                        id = "about"
                        className=" bg-white h-fit w-full grid grid-cols-2 px-24 scroll-mt-[100px]">
                    <div className=" max-md:col-span-2">
                        <h2 className=" font-bold font-[Inria Sans] text-3xl">I'm a Full-stack developer from Italy</h2>
                        <p className=" font-[quicksand] text-xl">
                            <br />
                            I’ve been developing various projects in a variety of languages such as JavaScript and C# for many years, but over the past years I’ve discovered my passion for website development.
                            <br /><br />
                            In this time, I have built up my skillset and now I build and deploy websites for individuals and businesses
                        </p>
                    </div>
                    <div className=" scale-[85%] max-md:hidden">
                        <img className="ml-[15%]" src = {new URL("../images/Terminal.svg",import.meta.url).toString()}></img>
                        <img className="ml-[40%]" src = {new URL("../images/Globe.svg",import.meta.url).toString()}></img>
                    </div>
                    </section>

                    <section
                        id = "projects"
                        className=" bg-white py-10 z-10 relative scroll-mt-[50px]">
                        <h2 className="font-bold font-[Inria Sans] text-3xl flex justify-center mb-10">My past projects</h2>

                        <div className=" flex flex-wrap gap-5 items-center justify-center min-w-[50%]">
                            <Project
                                name="Ducks Against Humanity"
                                description="Ducks Against Humanity is a clone of the famous card game Cards Against Humanity. It features the possibility to create and use custom cardsets"
                                imgPath={new URL("../images/DAH2.png",import.meta.url)}
                                url={"https://ducksagainsthumanity.com"}
                            />
                        </div>
                    </section>
                    <div className = "mt-[-208px] z-0">
                        <Divisor rotation={175} />
                    </div>
                        
                    <section
                        id = "contact"
                        className=" mt-52 text-white text-center scroll-mt-[200px] ">
                        <h2 className=" text-3xl font-bold font-[Inria Sans] pb-10">Let's work togheter!</h2>
                        <p className=" font-[Quicksand] text-xl max-w-[400px] m-auto">
                            Looking for a new website or a refresh on your old one? You are in the right place! 
                            <br /><br />
                            I take on commissions for web design and development
                            <br /> <br />
                            Send me an email and let’s work together!
                        </p>
                        <div className=" flex justify-center mt-10">
                            <ButtonLink text="Email me!" url="mailto:chiapperinimarco.dev@gmail.com" />
                        </div>
                        
                    </section>

                    
                </div>
                
                
            </main>
           
        </>
    )
}