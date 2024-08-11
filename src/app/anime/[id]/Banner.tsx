export default function Banner({ image }: { image: string }) {
    return (
        <div>
            {image ? (
                <div className="relative pt-16 overflow-hidden">
                    <img src={image} alt="" className="w-full h-[20rem] blur-sm"/>
                    <img src={image} alt="" className="absolute h-[20rem] top-16 left-[30vw]"/>
                </div>
            ) : (
                <div className="pt-16 overflow-hidden">
                    <div className="w-full h-[20rem]"></div>
                    <img src="/DeathCodeLogo.jpeg" alt="Deathcode" className="absolute h-[20rem] top-16 left-[30vw]"/>
                </div>
                
            )}
        </div>
    );
}
