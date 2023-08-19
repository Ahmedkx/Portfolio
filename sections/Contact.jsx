import Container from "@/components/Container";
import Title from "@/components/Title";
import Image from "next/image";

import Email from "../imgs/email.png";
import LinkedIN from "../imgs/linkedin.png";
import GitHub from "../imgs/github.png";
import Link from "@/components/Link";

export default function Contact() {
    return (
        <section>
            <div className="text-white mb-16">
                <Title text="Contact Me" className="mb-10 md:mb-20" />

                <Container>
                    <div className="flex flex-col md:flex-row gap-10 justify-between">
                        <div className="flex flex-col items-center md:items-start justify-center">
                            <p className="hidden md:block text-3xl font-bold mb-10">
                                Drop Me a Message
                            </p>

                            <Link
                                src={Email}
                                type="mail"
                                link="Email.mail.com"
                            />
                            <Link src={LinkedIN} link="google.com" />
                            <Link src={GitHub} link="www.google.com" />
                        </div>

                        {/* w-11/12 md:w-96  */}
                        <form className="bg-gradient-to-r from-[#50aada] to-[#493bc4] flex flex-col gap-5 px-10 py-12 rounded-3xl drop-shadow-xl text-2xl">
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
                </Container>
            </div>
        </section>
    );
}
