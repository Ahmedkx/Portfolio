export default function Nav() {
    return (
        <nav className="text-white flex justify-between items-center">
            <img src="https://placehold.co/50x50" alt="logo" />
            <div className="flex lg:gap-x-20 sm:gap-x-5 items-center">
                <a>HOME</a>
                <a href="#about-me">ABOUT ME</a>
                <a>Services</a>
                <a>Projects</a>
                <a className="gradient p-3 rounded-lg px-10">Contact</a>
            </div>
        </nav>
    );
}
