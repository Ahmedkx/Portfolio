import Nav from "@/sections/Nav";
import Header from "@/sections/Header";
import AboutMe from "@/sections/AboutMe";
import Portfolio from "@/sections/Portfolio";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
    return (
        <>
            <Nav />
            <Header />
            <main className="container mx-auto grid">
                <AboutMe />
                <Portfolio />
                <Experience />
            </main>
            <Contact />
        </>
    );
}
