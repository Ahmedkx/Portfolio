export default function Title({ text, className }) {
    return (
        <div
            className={`text-center text-5xl font-bold my-20 text-white ${className}`}
        >
            {text}
        </div>
    );
}
