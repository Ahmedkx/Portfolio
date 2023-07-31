// import Container from "@/components/Container";
import Title from "@/components/Title";

export default function Contact() {
    return (
        <section>
            <div className="text-white">
                <Title text="Contact Me" />

                <form className="w-11/12 md:w-96 m-auto bg-gradient-to-r from-[#50aada] to-[#493bc4] flex flex-col gap-5 px-10 py-12 rounded-3xl drop-shadow-xl text-2xl">
                    <input
                        type="text"
                        placeholder="Name"
                        className="px-5 py-4 rounded-xl bg-[#101630]"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="px-5 py-4 rounded-xl bg-[#101630]"
                        required
                    />
                    <textarea
                        rows={5}
                        placeholder="Message"
                        className="px-5 py-4 rounded-xl bg-[#101630] resize-none"
                        required
                    />
                    <button className="bg-[#101630] m-auto xl:m-0 p-5 rounded-xl w-52 font-semibold">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
