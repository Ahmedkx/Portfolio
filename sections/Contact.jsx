import Title from "@/components/Title";
import Circle from "@/components/Circle";
import Image from "next/image";

import Email from "../imgs/email.png";
import LinkedIN from "../imgs/linkedin.png";
import GitHub from "../imgs/github.png";

export default function Contact() {
    return (
        <div id="contact" className="text-white relative overflow-x-clip">
            <Circle className="-left-52 bg-gradient-to-tl hidden md:block" />
            <Circle className="-right-52 bg-gradient-to-tr hidden md:block" />
            <div className="pt-px rounded-t-full bg-gradient-to-r from-[#4a35c2] to-[#719abb]/50 z-10">
                <Title text="Contact" className="!my-0 py-10" />
            </div>

            <div className="flex flex-col md:px-40 container min-w-full py-10 bg-gradient-to-r from-[#4a35c2] to-[#719abb]/50 -z-10 ">
                <div className="flex flex-col xl:flex-row w-fit xl:w-auto place-content-between z-10 gap-20 ">
                    <div>
                        <p className="font-bold text-4xl">Drop Me A Message</p>
                        <p className="text-gray-400 text-xl max-w-lg mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sapiente officia, repellendus officiis facilis
                            rem ex magni rerum delectus, ullam accusantium
                            dolore, quo in veniam? Quod nostrum aut odit. Odio,
                            dolor.
                        </p>

                        <div className="flex gap-5 items-center mt-12">
                            <div className="bg-[#4d9dd6] p-2 w-fit rounded-lg">
                                <Image
                                    className="max-w-none"
                                    src={Email}
                                    width={60}
                                    height={60}
                                    alt="Email"
                                ></Image>
                            </div>
                            <p>Email@mail.com</p>
                        </div>

                        <div className="flex gap-5 items-center mt-12">
                            <div className="bg-[#4d9dd6] p-2 w-fit rounded-lg">
                                <Image
                                    className="max-w-none"
                                    src={LinkedIN}
                                    width={60}
                                    height={60}
                                    alt="Email"
                                ></Image>
                            </div>
                            <p>Email@mail.com</p>
                        </div>

                        <div className="flex gap-5 items-center mt-12">
                            <div className="bg-[#4d9dd6] p-2 w-fit rounded-lg">
                                <Image
                                    className="max-w-none"
                                    src={GitHub}
                                    width={60}
                                    height={60}
                                    alt="Email"
                                ></Image>
                            </div>
                            <p>Email@mail.com</p>
                        </div>
                    </div>

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
                {/* <hr className="container !max-w-full mt-20"></hr>
                <img
                    className="container mx-auto w-12 mt-12"
                    src="https://placehold.co/50x50"
                    alt="logo"
                    width="50"
                /> */}
            </div>
        </div>
    );
}
