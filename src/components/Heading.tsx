export default function Heading({title,subtitle}:{title:string, subtitle:string}){
    return(
        <>
            <p className="text-white text-2xl font-[500] pb-2 mx-[4rem]">{title}</p>
            <p className="text-gray-500 font-normal pb-4 mx-[4rem]">{subtitle}</p>
        </>
    )
}