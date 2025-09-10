export default function Gallery() {
    const pic = [
        {id: 1, country: "UNITED KINGDOM", price: "$5,000", pic:"/gallery/london.jpeg"},
        {id: 2, country: "JAPAN", price: "$5,000", pic:"/gallery/japan.jpeg"},
        {id: 3, country: "TURKEY", price: "$5,000", pic:"/gallery/turkey.jpeg"},
        {id: 4, country: "SPAIN", price: "$5,000", pic:"/gallery/spain.jpeg"},
        {id: 5, country: "ITALY", price: "$5,000", pic:"/gallery/italy.jpeg"},
        {id: 6, country: "MALDIVES", price: "$5,000", pic:"/gallery/maldive.jpeg"},
    ]

    return (
        <div>
            <section className="px-20 py-10 bg-gray-100">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">POPULAR TOUR PACKAGES</h2>
                    <p className="text-gray-600 mt-2">Discover the most engaging tours</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {pic.map((item) => (
                        <div 
                            key={item.id} 
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col"
                        >
                            {/* gambar */}
                            <div className="h-48 w-full">
                                <img src={item.pic} alt={item.country} className="w-full h-full object-cover"/>
                            </div>

                            {/* isi */}
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold">{item.country}</h3>
                                <p className="text-yellow-500 font-bold my-2">{item.price}</p>

                                {/* tombol di bawah */}
                                <button className="mt-auto w-full bg-[#04356A] text-white py-2 rounded hover:bg-[#032B56] transition-colors duration-300">
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
