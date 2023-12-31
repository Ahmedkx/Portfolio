import Background from "./Background";

export default function NavLinks() {
    let Links = [
        { name: "HOME", link: "home" },
        { name: "ABOUT", link: "about" },
        { name: "EXPERIANCE", link: "experience" },
        { name: "PROJECTS", link: "projects" },
    ];

    return (
        <ul className="md:flex md:items-center absolute md:static md:z-20 left-0 w-full md:w-auto md:pl-0 transition-all duration-500 top-[82px]">
            <Background className="md:hidden" />
            {Links.map((link) => (
                <li
                    key={link.name}
                    className="md:pl-8 md:py-0 py-7 border-t border-[#ffffff26] md:border-none"
                >
                    <a
                        href={`#${link.link}`}
                        className="block px-3 md:px-0 container mx-auto hover:text-cyan-500 duration-500"
                        onClick={() => setOpen((p) => !p)}
                    >
                        {link.name}
                    </a>
                </li>
            ))}
            <div className="px-3 md:pl-8 md:py-0 py-7 border-b border-t border-[#ffffff26] md:border-none">
                <a
                    href="#contact"
                    className="gradient p-3 rounded-lg px-10 block w-full text-center"
                    onClick={() => setOpen((p) => !p)}
                >
                    Contact
                </a>
            </div>
        </ul>
    );
}
