import Nav from "@/sections/Nav";
import Header from "@/sections/Header";
import AboutMe from "@/sections/AboutMe";
import Portfolio from "@/sections/Portfolio";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
    return (
        <>
            <main className="container mx-auto grid">
                <Nav />
                <Header />
                <AboutMe />
                <Portfolio />
                <Experience />
            </main>
            <Contact />
        </>
    );
}
