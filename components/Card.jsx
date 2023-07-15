import Image from "next/image";

export default function Card({ image, name }) {
    return (
        <div>
            <Image
                className="max-w-none"
                src={image}
                width={120}
                height={120}
                alt="ReactJs"
            />
            <p className="text-center">{name}</p>
        </div>
    );
}
