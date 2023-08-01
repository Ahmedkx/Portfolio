import Waves from "@/components/Waves";
import LinkedIN from "../imgs/linkedin.png";
import Image from "next/image";

export default function Footer() {
    return <Waves>

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
    </Waves>;
}
