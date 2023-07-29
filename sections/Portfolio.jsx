import Project from "../components/Project";
import Title from "@/components/Title";

import clone from "../imgs/clone.png";
import Container from "@/components/Container";

export default function Portfolio() {
    return (
        <>
            <Container className="text-white">
                <Title text="Portfolio" />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                    <Project image={clone} name="E Commerce Project" />
                    <Project image={clone} name="E Commerce Project" />
                    <Project image={clone} name="E Commerce Project" />
                    <Project image={clone} name="E Commerce Project" />
                    <Project image={clone} name="E Commerce Project" />
                </div>
            </Container>
        </>
    );
}
