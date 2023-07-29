export default function Container({ children, className }) {
    return (
        <div className={`p-5 max-w-[110rem] mx-auto ${className}`}>
            {children}
        </div>
    );
}
