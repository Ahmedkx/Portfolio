export default function Header() {
    return (
        <div className="overflow-hidden text-white">
            <div className="sky-body flex overflow-hidden relative h-screen">
                <div className="sky-container">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
                <div className="flex justify-center absolute top-1/3 w-full h-full text-6xl font-bold">
                    <h1 className="headder w-[36rem] text-center">
                        Crafting products to shape tomorrow
                    </h1>
                </div>
            </div>
        </div>
    );
}
