import Image from "next/image";

export default function Card(props: any) {
  return (
    <div className="w-[40rem] h-[25rem] bg-white">
      <Image
        src={props.img}
        alt="anime poster"
        height={0}
        width={500}
        className="mx-4"
      ></Image>
    </div>
  );
}
