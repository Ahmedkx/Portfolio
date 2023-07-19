export default function Nav() {
    return (
        <nav className="container mx-auto mt-6 text-white sticky top-6 justify-between md:items-center flex">
            <img src="https://placehold.co/50x50" alt="logo" />
            <div className="lg:gap-x-20 sm:gap-x-5 items-center hidden md:flex">
                <a>HOME</a>
                <a
                    href="#about-me"
                    className="hover:text-cyan-500 duration-500"
                >
                    ABOUT ME
                </a>
                <a className="hover:text-cyan-500 duration-500">Services</a>
                <a className="hover:text-cyan-500 duration-500">Projects</a>
                <a className="gradient p-3 rounded-lg px-10">Contact</a>
            </div>
        </nav>
    );
}
