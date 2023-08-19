import Waves from "@/components/Waves";
import LinkedIN from "../imgs/linkedin.png";
import Image from "next/image";
import Container from "@/components/Container";

export default function Footer() {
    return (
        <Container className="flex items-center gap-6 flex-col md:flex-row md:justify-between text-white mt-10">
            <p className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                Feel free to contact me
            </p>
            <div>Email@mail.com</div>
            <div>Email@mail.com</div>
        </Container>
    );
}
