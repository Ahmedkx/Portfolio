import Project from "../components/Project";
import Title from "@/components/Title";

import clone from "../imgs/clone.png";
import Container from "@/components/Container";

export default function Portfolio() {
    return (
        <section>
            <Container className="text-white">
                <Title text="Portfolio" />
                <div className="flex flex-wrap justify-center gap-20">
                    <Project image={clone} name="E Commerce Project" />
                    <Project image={clone} name="E Commerce Project" />
                    <Project image={clone} name="E Commerce Project" />
                    <Project image={clone} name="E Commerce Project" />
                </div>
            </Container>
        </section>
    );
}
