import Project from "../components/Project";
import Title from "@/components/Title";

import clone from "../imgs/clone.png";

export default function Portfolio() {
    return (
        <div className="container mx-auto text-white">
            <Title text="Portfolio" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                <Project image={clone} name="E Commerce Project" />
                <Project image={clone} name="E Commerce Project" />
                <Project image={clone} name="E Commerce Project" />
                <Project image={clone} name="E Commerce Project" />
                <Project image={clone} name="E Commerce Project" />
            </div>
        </div>
    );
}
