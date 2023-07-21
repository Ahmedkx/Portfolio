export default function Background({ className, show }) {
    return (
        <div
            className={`absolute w-full h-full ${
                show ? "bg-transparent" : "bg-[#04061580]"
            } backdrop-blur-[32px] -z-10 transition ${className}`}
        ></div>
    );
}
