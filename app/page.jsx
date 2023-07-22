import Nav from "@/sections/Nav";
import Header from "@/sections/Header";
import AboutMe from "@/sections/AboutMe";
import Portfolio from "@/sections/Portfolio";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
    return (
        <main>
            <Nav />
            <Header />
            <AboutMe />
            <Portfolio />
            <Experience />
            <Contact />
        </main>
    );
}
