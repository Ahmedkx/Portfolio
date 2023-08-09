import Image from "next/image";

export default function Header() {
    return (
        <section>
            <div className="overflow-hidden text-white relative h-[calc(100vh-82px)]">
                <div className="sky-body flex overflow-hidden relative h-screen">
                    <div className="sky-container">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                    </div>
                    <div className="flex flex-col items-center absolute top-1/3 w-full h-full font-bold">
                        <h1 className=" bg-clip-text text-6xl font-extrabold text-transparent sm:text-5xl">
                            John Doe
                        </h1>
                        {/* <h1 className="textshine text-4xl md:text-7xl text-center">
                            John Doe
                        </h1> */}
                        <h1 className="block textshine text-2xl md:text-3xl text-center">
                            A Frontend Developer
                        </h1>
                    </div>
                    <div className="absolute bottom-32 left-[50%] bounce text-center">
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
