import { useState } from "react";
import { Menu, Truck, Calendar, Shirt, Star, MapPin, Phone, Mail, Facebook, Instagram, Twitter, LogIn, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-[#0B3C49] flex flex-col">

            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-blue-200 z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
                    <h1 className="text-xl sm:text-2xl font-extrabold text-blue-700">
                        <a href="#home">The Laundry Shop</a>
                    </h1>
                    <div className="flex items-center gap-4">
                        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            <Menu className="w-6 h-6 text-blue-700" />
                        </button>
                        <ul className={`md:flex gap-6 font-medium ${menuOpen ? "block" : "hidden"} md:block bg-white md:bg-transparent absolute md:static top-full left-0 w-full md:w-auto p-4 md:p-0`}>
                            <li><a href="#home" className="hover:text-blue-600 block py-1 md:py-0">Home</a></li>
                            <li><a href="#about" className="hover:text-blue-600 block py-1 md:py-0">About</a></li>
                            <li><a href="#services" className="hover:text-blue-600 block py-1 md:py-0">Services</a></li>
                            <li><a href="#blog" className="hover:text-blue-600 block py-1 md:py-0">Blog</a></li>
                            <li><a href="#contact" className="hover:text-blue-600 block py-1 md:py-0">Contact</a></li>
                        </ul>
                        <Link to="/login" className="hidden md:flex items-center gap-2 border border-blue-400 bg-white hover:bg-blue-50 px-4 py-2 rounded-lg shadow-sm">
                            <LogIn className="w-4 h-4" /> Login
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative flex flex-col items-center justify-center text-center h-screen overflow-hidden bg-gradient-to-b from-[#B3E5FC] to-[#E6F7F9] px-4 sm:px-6">
                <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute -bottom-40 -right-40 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-green-300 to-green-500 rounded-full opacity-30 blur-3xl"></div>

                <h1 className="relative text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#007C91] drop-shadow-lg">
                    Laundry Done in Just a Few Clicks
                </h1>
                <p className="relative mt-4 sm:mt-6 max-w-xs sm:max-w-xl text-base sm:text-lg md:text-xl font-semibold text-[#0B3C49]">
                    Fast pickup, spotless cleaning, and quick delivery — all from your phone.
                </p>
                <button className="relative mt-6 sm:mt-10 w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl bg-[#00ACC1] hover:bg-[#26C6DA] text-white font-bold rounded-lg shadow-lg">
                    Book Your Laundry Now
                </button>

                {/* How It Works Inline */}
                <div className="relative mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 z-10">
                    {[
                        { icon: <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />, title: "Book Pickup" },
                        { icon: <Shirt className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />, title: "We Wash & Care" },
                        { icon: <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />, title: "We Deliver" },
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            {step.icon}
                            <p className="mt-1 sm:mt-2 text-gray-700 text-sm sm:text-base font-medium">{step.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About, Services, Blog, Testimonials, Footer sections remain as in previous version, with responsive grids */}
            {/* For example: team grid uses grid-cols-1 sm:grid-cols-2 md:grid-cols-4 */}
            {/* Services grid uses grid-cols-1 sm:grid-cols-2 md:grid-cols-3 */}
            {/* Blog grid: grid-cols-1 sm:grid-cols-2 md:grid-cols-3 */}
            {/* Testimonials grid: grid-cols-1 sm:grid-cols-2 md:grid-cols-3 */}
            {/* Footer: stack vertically on mobile (flex-col) */}

            {/* About Us Section */}
            <section id="about" className="relative px-6 py-16 bg-white text-center">
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>

                <h2 className="text-4xl font-bold text-blue-800 mb-6">About Us</h2>
                <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-12">
                    The Laundry Shop is committed to making laundry hassle-free. Our mission is to save you time by providing easy online booking, professional cleaning, and reliable delivery — all while keeping your clothes fresh and cared for.
                </p>

                {/* Expanded Team Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {[
                        "Alice Johnson", "Mark Smith", "Sara Lee", "James Kim",
                        "Nina Patel", "Tom Rivera", "Olivia Brown", "Ethan Miller"
                    ].map((name, i) => (
                        <div key={i} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <User className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-md font-semibold text-gray-800 mt-3">{name}</h3>
                            <p className="text-sm text-gray-500">Team Member</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Expanded Services */}
            <section id="services" className="relative px-6 py-16 bg-white text-center border-y border-blue-200">
                <div className="absolute -top-10 left-1/3 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-40"></div>

                <h2 className="text-4xl font-extrabold text-blue-800 mb-10 relative z-10">Our Services</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto relative z-10">
                    {[
                        "Wash & Fold", "Dry Cleaning", "Express Service",
                        "Ironing & Press", "Shoe Cleaning", "Bedding & Curtains"
                    ].map((service, i) => (
                        <div key={i} className="border border-blue-200 rounded-xl shadow-sm bg-blue-50 overflow-hidden hover:shadow-md transition">
                            {/* <img src={serviceImgs[i % serviceImgs.length]} alt={service} className="w-full h-40 object-cover" /> */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-blue-800">{service}</h3>
                                <p className="text-gray-700">Professional and reliable service for your laundry needs.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Blog */}
            <section id="blog" className="relative px-6 py-16 bg-blue-50 text-center border-b border-blue-200">
                <div className="absolute top-0 right-0 w-52 h-52 bg-blue-200 rounded-full mix-blend-multiply blur-3xl opacity-40"></div>
                <h2 className="text-4xl font-extrabold text-blue-800 mb-10 relative z-10">From Our Blog</h2>
                <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto relative z-10">
                    {[
                        { title: "5 Tips for Keeping Your Whites Bright", desc: "Learn the secrets to keeping your white clothes looking new." },
                        { title: "The Benefits of Professional Laundry Services", desc: "Why outsourcing your laundry can save you time and stress." },
                        { title: "Eco-Friendly Laundry: How We Care for the Planet", desc: "Our sustainable practices for a cleaner future." },
                    ].map((post, i) => (
                        <div key={i} className="border border-blue-200 rounded-xl bg-white shadow-sm p-6">
                            <Star className="w-8 h-8 mx-auto text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-blue-800">{post.title}</h3>
                            <p className="text-gray-700">{post.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="relative px-6 py-16 bg-blue-50 text-center">
                <div className="absolute -bottom-10 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-40"></div>
                <h2 className="text-4xl font-extrabold text-blue-800 mb-10 relative z-10">What Our Customers Say</h2>
                <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto relative z-10">
                    {[
                        "“Super easy to book and my clothes came back spotless!”",
                        "“Best laundry service in town – fast and affordable!”",
                        "“Love the delivery tracking feature. So convenient!”",
                    ].map((quote, i) => (
                        <div key={i} className="p-6 bg-white border border-blue-200 rounded-xl shadow-sm">
                            <Star className="w-8 h-8 mx-auto text-blue-600 mb-4" />
                            <p className="text-gray-700 mt-2">{quote}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Us Section */}
            <section id="contact-us" className="relative px-6 py-16 bg-blue-50 text-center">
                {/* Decorative Blob */}
                <div className="absolute -top-10 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-40"></div>

                <h2 className="text-4xl font-extrabold text-blue-800 mb-6 relative z-10">Get in Touch</h2>
                <p className="max-w-2xl mx-auto text-gray-700 mb-10 relative z-10">
                    Have questions or special requests? Fill out the form below and our team will get back to you shortly.
                </p>

                <form className="max-w-3xl mx-auto grid gap-6 relative z-10 text-left">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring focus:ring-blue-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring focus:ring-blue-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Write your message..."
                            className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring focus:ring-blue-100"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow transition"
                    >
                        Send Message
                    </button>
                </form>
            </section>


            {/* Footer */}
            <footer id="contact" className="bg-white border-t border-blue-200 px-6 py-12">
                <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">
                    <div>
                        <h3 className="text-xl font-bold text-blue-800">The Laundry Shop</h3>
                        <p className="mt-3 text-gray-700">
                            Making laundry stress-free with easy booking, fast cleaning, and quick delivery.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-3 text-blue-800">Quick Links</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
                            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
                            <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
                            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-3 text-blue-800">Contact</h4>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 123 Clean St, Fresh City</li>
                            <li className="flex items-center gap-2"><Phone className="w-5 h-5" /> (123) 456-7890</li>
                            <li className="flex items-center gap-2"><Mail className="w-5 h-5" /> support@laundryshop.com</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-3 text-blue-800">Stay Connected</h4>
                        <form className="flex flex-col gap-3">
                            <input type="email" placeholder="Your email" className="px-3 py-2 border rounded-lg border-blue-200 focus:ring focus:ring-blue-100" />
                            <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                Subscribe
                            </button>
                        </form>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="p-2 border rounded-full border-blue-300 hover:bg-blue-50"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="p-2 border rounded-full border-blue-300 hover:bg-blue-50"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="p-2 border rounded-full border-blue-300 hover:bg-blue-50"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-10 text-gray-500">© {new Date().getFullYear()} The Laundry Shop. All rights reserved.</p>
            </footer>

        </div>
    );
}
