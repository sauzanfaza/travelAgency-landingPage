import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
    const testimoni = [
        {id: 1, customer: "Susan Hill", testi: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum, thanks"},
        {id: 2, customer: "Park Chanyeol", testi: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum, thanks"},
        {id: 3, customer: "John Smith", testi: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum, thanks"},
    ]

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center text-center">
            <div className="my-8">
                <h1 className="text-lg mb-1">TESTIMONIALS</h1>
                <p className="text-sm text-slate-600">WHAT OUR CUSTOMERS SAY ABOUT</p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-4 px-10">
                {testimoni.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col items-center justify-center">
                    <div className="flex items-center mb-4 text-lg">
                    <FaQuoteLeft />
                    </div>
                    <div>
                        <p>{item.testi}</p>
                        <h3 className="text-orange-500 mt-2">{item.customer}</h3>
                    </div>
                </div>
                    
                ))}
            </div>
        </div>
    )
}