import Container from "@/components/Container";
import Image from "next/image";

export default function Header() {
    return (
        <section>
            <div className="overflow-hidden text-white relative h-[calc(100vh-82px)]">
                <div className="sky-container absolute">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
                <div className="sky-body flex overflow-hidden relative h-[calc(100vh-82px)]">
                    <div className="flex flex-col md:top-1/3 h-full font-bold justify-center text-center items-center w-full">
                        <h1 className="text-[24px]">Hello, I'm</h1>
                        <h1 className="block text-[70px]">Meera Ramesh</h1>
                        <h1 className="block text-[28px]">
                            A Frontend Developer
                        </h1>
                    </div>
                    <div className="absolute bottom-10 left-[50%] bounce text-center">
                        <p>Scroll</p>
                        <Image
                            src="/arrow.png"
                            width={35}
                            height={35}
                            className="m-auto"
                            alt="arrow"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
