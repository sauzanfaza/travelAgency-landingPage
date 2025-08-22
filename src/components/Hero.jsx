export default function Hero() {
    return (
        <section
            className="relative min-h-screen w-full bg-cover"
            style={{ backgroundImage: 'url("/assets/bg1.jpeg")' }}
        >
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
                <h2 className="text-lg md:text-xl">LETS US TAKE YOU TO YOUR</h2>
                <h1 className="text-3xl md:text-6xl font-bold mt-2">
                    DREAM DESTINATIONS
                </h1>
                <div className="mt-4 flex flex-wrap bg-white rounded-full shadow-md overflow-hidden">
                    <select name="" id="" className="text-black px-4 py-3 outline-none">
                        <option value="">Asia</option>
                        <option value="">Europe</option>
                        <option value="">America</option>
                    </select>
                    <select className="px-4 py-3 text-black outline-none">
                        <option>All Countries</option>
                        <option>Indonesia</option>
                        <option>Japan</option>
                    </select>
                    <select className="px-4 py-3 text-black outline-none">
                        <option>Your Budget ($)</option>
                        <option className="hover:bg-[#04356A]">$1000</option>
                        <option>$2000</option>
                        <option>$3000</option>
                        <option>$3000</option>
                        <option>$3000</option>
                    </select>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3">
                    FIND YOUR TOURS
                    </button>
                </div>
            </div>
        </section>
    )
}
