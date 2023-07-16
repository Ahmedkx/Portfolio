"use client";
import Image from "next/image";

export default function Card(props) {
    return (
        <div className="m-auto my-5">
            <Image
                className="max-w-none"
                src={props.image}
                width={props?.width ? props.width : 120}
                height={props?.height ? props.width : 120}
                alt="ReactJs"
            />
            <p className={`text-center my-5`}>{props.name}</p>
        </div>
    );
}
