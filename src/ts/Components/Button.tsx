export default function ButtonLink(props : {url : string, text : string})
{
    return (
        <>
            <div className=" transition-all">
                <a
                    
                    className=" flex items-center justify-center rounded-xl h-15 w-[150px] font-[Quicksand] bg-white font-bold text-xl relative z-10
                    hover:translate-y-[3%] transition active:translate-y-[7%] text-black"
                    href={props.url}>
                        {props.text}
                
                </a>
                <div className="rounded-xl h-15 w-[150px] bg-[#B9B9B9] translate-y-[-92%]
                " />
               
            </div>
            
        </>
    )
    
}