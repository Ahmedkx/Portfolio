import Image from "next/image";
import Border from "./Border";

export default function Project(props) {
    return (
        <div className="m-auto lg:m-0">
            <div className="relative w-fit">
                <Border />
                <Image
                    className="rounded-lg max-w-none"
                    src={props.image}
                    width="300"
                    height="300"
                    alt="project-photo"
                />
            </div>
            <div>
                <p className="text-blue-400 text-4xl font-bold mt-10">
                    Project 1
                </p>
                <p className="font-semibold mt-3">{props.name}</p>
                <p className="text-gray-400 max-w-xs mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                    placeat maxime animi expedita quisquam odit accusamus
                    exercitationem officiis aliquid facilis voluptatem labore
                    iste repellendus laboriosam quasi quas delectus, suscipit
                    ea.
                </p>
            </div>
        </div>
    );
}
