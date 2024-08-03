export default function Card(props:any){
    return(
        <div className="h-[20rem] overflow-hidden p-2">
            <img src={props.img} alt="" className="h-[20rem] w-[14rem]"/>
        </div>
    )
}