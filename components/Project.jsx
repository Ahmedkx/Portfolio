import Image from "next/image";

export default function Project(props) {
    return (
        <div className="m-auto lg:m-0 rounded-xl border p-[45px] border-blue-400 shadowss hover:-translate-y-5 transition">
            <div className="relative m-auto">
                <Image
                    className=""
                    src={props.image}
                    width="500"
                    height="300"
                    alt="project-photo"
                />
            </div>
            <div>
                <p className="text-blue-400 text-4xl font-bold mt-10">
                    Project 1
                </p>
                <p className="font-semibold mt-3">{props.name}</p>
                <p className="text-gray-400 max-w-[500px] mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                    placeat maxime animi expedita quisquam odit accusamus
                    exercitationem officiis aliquid facilis voluptatem labore
                    iste repellendus laboriosam quasi quas delectus, suscipit
                    ea.
                </p>
            </div>
            <div className="flex gap-5 pt-14 justify-center flex-col md:flex-row">
                <button className="button pt-[25px] pb-[26px] px-[51px] rounded-[60px] font-semibold">
                    Live preview
                </button>
                <button className="pt-[25px] pb-[26px] px-[51px] rounded-[60px] font-semibold border-[1.2px] border-white hover:bg-white hover:text-black active:text-white active:bg-transparent transition-all">
                    Check on GitHub
                </button>
            </div>
        </div>
    );
}
