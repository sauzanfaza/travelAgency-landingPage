export default function Hero() {
    return (
        <section
            className="relative min-h-screen w-full bg-cover"
            style={{ backgroundImage: 'url("/assets/bg1.jpeg")' }}
        >
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
                <h2 className="text-base sm:text-lg md:text-xl">LETS US TAKE YOU TO YOUR</h2>
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mt-2">
                    DREAM DESTINATIONS
                </h1>
                <div className="mt-6 flex flex-col md:flex-row flex-wrap bg-white rounded-xl shadow-lg overflow-hidden max-w-3xl">
                    <select className="text-black px-4 py-3 outline-none border-b md:border-none md:border-r w-full md:w-auto">
                        <option value="">Asia</option>
                        <option value="">Europe</option>
                        <option value="">America</option>
                    </select>
                    <select className="px-4 py-3 text-black outline-none border-b md:border-none md:border-r w-full md:w-auto">
                        <option>All Countries</option>
                        <option>Indonesia</option>
                        <option>Japan</option>
                    </select>
                    <select className="px-4 py-3 text-black outline-none border-b md:border-none md:border-r w-full md:w-auto">
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
