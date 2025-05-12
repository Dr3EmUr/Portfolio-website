export default function (props : {rotation : number})
{
    return (
        <div style={{transform : `rotate(${props.rotation}deg)`} } className="w-[150vw] translate-x-[-10%]">
            <div className=" h-2 bg-gradient-to-t from-white to-transparent "></div>
            <div className="h-96 bg-white"></div>
        </div>
    )
}