import { Url } from "url"

export default function Project(props: {
    name: string,
    description: string,
    imgPath: URL,
    url?: string
}) {

    console.log(props.imgPath)
    return (
        <>
            <div
                style={{backgroundImage : `url(${props.imgPath.href})`}}
                className={` overflow-clip aspect-video h-54 border-2 border-[#151515] rounded-xl bg-size-[100%] bg-no-repeat bg-center bg-black
                 group`}>
                
                <a
                    href = {props.url}
                    className="flex flex-col items-center justify-center  w-full h-full bg-[rgb(21,21,21,0%)] translate-y-full select-none
                    group-hover:translate-y-0 group-hover:bg-[rgb(21,21,21,100%)] transition
                    text-white text-center cursor-pointer">
                    <h3 className=" font-[Inter] font-bold text-xl">{props.name}</h3>
                    
                    <p className=" font-inter mt-2 px-10 w-fullflex justify-center items-center">{props.description}</p>
                </a>


            </div>
        </>
    )
}