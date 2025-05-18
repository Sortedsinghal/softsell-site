import { motion } from "framer-motion";
import ChatWidget from "./components/ChatWidget";

function App() {


  return (
    <>
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-sans">


      {/* Navigation Bar */}
      <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">SoftSell</h1>
          <div className="space-x-4 hidden md:block">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#how" className="text-gray-700 hover:text-blue-600">How It Works</a>
            <a href="#why" className="text-gray-700 hover:text-blue-600">Why Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>


        <button
          onClick={() => {
            document.documentElement.classList.toggle('dark');
          }}
          className="ml-4 px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200 transition"
        >
          🌙 Toggle Mode
        </button>


      </nav>
      {/* Hero Section */}
      <header id="home" className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-6 text-center dark:from-gray-800 dark:to-black">

        <h1 className="text-5xl font-extrabold mb-4">Welcome to SoftSell</h1>
        <p className="text-xl mb-6">
          Your trusted partner in reselling unused software licenses
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
          Get a Quote
        </button>
      </header>
      {/* How It Works Section */}
      <motion.section
        id="how"
        className="py-16 px-6 bg-gray-50 dark:bg-gray-800 text-center text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-72">

            <div className="text-blue-600 text-4xl mb-4">📤</div>
            <h3 className="text-xl font-semibold mb-2">Upload License</h3>
            <p className="text-gray-600">Submit details of the unused license you want to sell.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-72">

            <div className="text-blue-600 text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Get Valuation</h3>
            <p className="text-gray-600">We evaluate and provide a fair market price.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-72">

            <div className="text-blue-600 text-4xl mb-4">🤑</div>
            <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
            <p className="text-gray-600">Once approved, receive your payment instantly.</p>
          </div>
        </div>
      </motion.section>
      {/* Why Choose Us Section */}
      <motion.section
        id="why"
        className="py-16 px-6 bg-white dark:bg-gray-900 text-center text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl font-bold mb-10 text-gray-800">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tile 1 */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-semibold mb-2">Trusted Experts</h3>
            <p className="text-gray-600">SoftSell is backed by years of resale experience and deep market insight.</p>
          </div>

          {/* Tile 2 */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Fast Process</h3>
            <p className="text-gray-600">Get your valuation and money in just a few clicks — no delays.</p>
          </div>

          {/* Tile 3 */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600">We ensure your data and licenses are handled with full security and privacy.</p>
          </div>
        </div>
      </motion.section>
      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-16 px-6 bg-gray-50 dark:bg-gray-900 text-center text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl font-bold mb-10 text-gray-800">What Our Customers Say</h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/2">
            <p className="text-gray-700 italic mb-4">"SoftSell made it super easy to sell our old licenses. The process was fast and transparent!"</p>
            <div className="text-left">
              <p className="font-bold text-gray-900">Aman Verma</p>
              <p className="text-sm text-gray-500">IT Manager, Apex Solutions</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/2">
            <p className="text-gray-700 italic mb-4">"We recovered thousands in unused software thanks to SoftSell. Highly recommended!"</p>
            <div className="text-left">
              <p className="font-bold text-gray-900">Neha Sharma</p>
              <p className="text-sm text-gray-500">CEO, TechHive</p>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Contact / Lead Form Section */}
      <motion.section
        id="contact"
        className="py-16 px-6 bg-white dark:bg-gray-900 text-center text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl font-bold mb-10 text-gray-800">Contact Us</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted (no backend)");
          }}
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Name</label>
            <input
              type="text"
              required
              className="p-3 border rounded bg-white dark:bg-gray-800 dark:border-gray-700 text-black dark:text-white"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Email</label>
            <input
              type="email"
              required
              className="p-3 border rounded bg-white dark:bg-gray-800 dark:border-gray-700 text-black dark:text-white"

              placeholder="you@example.com"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Company</label>
            <input
              type="text"
              className="p-3 border rounded bg-white dark:bg-gray-800 dark:border-gray-700 text-black dark:text-white"

              placeholder="Your company"
            />
          </div>

          {/* License Type Dropdown */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">License Type</label>
            <select required className="p-3 border rounded bg-white dark:bg-gray-800 dark:border-gray-700 text-black dark:text-white">
              <option value="">Select type</option>
              <option value="Office">Microsoft Office</option>
              <option value="Adobe">Adobe Suite</option>
              <option value="Antivirus">Antivirus</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message (textarea) */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-semibold">Message</label>
            <textarea
              required
              rows="4"
              className="p-3 border rounded bg-white dark:bg-gray-800 dark:border-gray-700 text-black dark:text-white"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.section>


    </div>
     <ChatWidget />
    </>
  );
}

export default App;
