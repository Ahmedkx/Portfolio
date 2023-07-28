import Image from "next/image";

export default function Contact() {
    return (
        <div id="contact" className="container mx-auto flex text-white">
            <video autoPlay muted>
                <source src="/contact.mp4" />
            </video>
            <form className="flex flex-col gap-5 px-10 py-12 rounded-3xl bg-gradient-to-r from-[#50aada] to-[#493bc4] drop-shadow-xl md:h-fit text-2xl m-10">
                <input
                    type="text"
                    placeholder="Name"
                    className="px-5 py-4 w-full rounded-xl bg-[#101630]"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="px-5 py-4 w-full rounded-xl bg-[#101630]"
                    required
                />
                <textarea
                    rows={5}
                    placeholder="Message"
                    className="px-5 py-4 w-full rounded-xl bg-[#101630] resize-none"
                    required
                />
                <button className="bg-[#101630] m-auto xl:m-0 p-5 rounded-xl w-52 font-semibold">
                    Send
                </button>
            </form>
        </div>
    );
}
