import Image from "next/image";
import Picture from "../imgs/Untitled.png";
import Border from "../components/Border";

export default function AboutMe() {
    return (
        <div
            id="about-me"
            className="flex flex-col gap-x-32 text-white md:flex-row"
        >
            <div className="flex col-span-1 relative">
                <Border />
                <Image
                    className="max-w-none"
                    src={Picture}
                    width="400"
                    height="500"
                    alt="image"
                />
            </div>
            <div className="flex col-span-1 flex-col justify-center">
                <h1 className="text-4xl">ABOUT ME</h1>
                <p className=" mt-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iste vero tempore officiis animi eligendi optio ea deserunt
                    facere quae non, possimus incidunt, unde eveniet accusantium
                    expedita quos sunt asperiores dolor.
                </p>
                <div className="mt-12">
                    <a className="font-semibold gradient mr-6 px-6 py-3 rounded-lg">
                        HIRE ME
                    </a>
                    <a className="font-semibold border-2 border-purple-600 mr-6 px-6 py-3 rounded-lg">
                        RESUME
                    </a>
                </div>
            </div>
        </div>
    );
}
