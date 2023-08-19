import Image from "next/image";
import Picture from "../imgs/Untitled.png";
import Border from "../components/Border";
import Container from "@/components/Container";

export default function AboutMe() {
    return (
        <section id="about">
            <Container className="max-w-[85rem]">
                <div
                    id="about-me"
                    className="container mx-auto flex flex-col gap-x-32 text-white lg:flex-row mt-16"
                >
                    <div className="flex col-span-1 relative w-[80%] md:w-fit m-auto lg:m-0">
                        <Border />

                        {/* <Image
                    className="max-w-none"
                    src={Picture}
                    width="400"
                    height="500"
                    alt="image"
                /> */}
                        <video autoPlay muted>
                            <source src="/animation.mp4" />
                        </video>
                    </div>
                    <div className="flex col-span-1 flex-col justify-center mt-14 lg:mt-0 mx-10 md:mx-0">
                        <h1 className="text-4xl">ABOUT ME</h1>
                        <p className=" mt-6">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Iste vero tempore officiis animi eligendi
                            optio ea deserunt facere quae non, possimus
                            incidunt, unde eveniet accusantium expedita quos
                            sunt asperiores dolor.
                        </p>
                        <div className="mt-12 mx-auto md:mx-0">
                            <a className="font-semibold gradient mr-6 px-6 py-3 rounded-lg">
                                HIRE ME
                            </a>
                            <a className="font-semibold border-2 border-purple-600 mr-6 px-6 py-3 rounded-lg">
                                RESUME
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
