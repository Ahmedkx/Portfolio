export default function Title({ text, className }) {
    return (
        <div>
            <div
                className={`relative mx-auto text-center text-5xl font-bold my-20 text-white w-fit ${className}`}
            >
                <div className="absolute gradient-background w-full h-1 bottom-[-15px] rounded-3xl"></div>
                {text}
            </div>
        </div>
    );
}
