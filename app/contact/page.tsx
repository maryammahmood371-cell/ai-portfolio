import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-24">

        <div className="max-w-6xl mx-auto px-8">

          <div className="text-center mb-16">

            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Contact Me
            </h1>

            <p className="mt-5 text-xl text-gray-400">
              Let's connect and build something amazing together.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Information */}

            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10">

              <h2 className="text-3xl font-bold text-cyan-400 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">

                <div>
                  <h3 className="text-cyan-400 font-semibold text-lg">
                    📧 Email
                  </h3>

                  <a
                    href="mailto:YOUR_EMAIL@gmail.com"
                    className="text-gray-300 hover:text-cyan-400 transition"
                  >
                    maryammahmood371@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-cyan-400 font-semibold text-lg">
                    💼 LinkedIn
                  </h3>

                  <a
                    href="https://www.linkedin.com/in/maryam-mahmood-06471a400/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition break-all"
                  >
                    https://www.linkedin.com/in/maryam-mahmood-06471a400/
                  </a>
                </div>

                <div>
                  <h3 className="text-cyan-400 font-semibold text-lg">
                    💻 GitHub
                  </h3>

                  <a
                    href="https://github.com/maryammahmood371-cell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition break-all"
                  >
                    https://github.com/maryammahmood371-cell
                  </a>
                </div>

                <div>
                  <h3 className="text-cyan-400 font-semibold text-lg">
                    📱 Phone
                  </h3>

                  <p className="text-gray-300">
                    +92 XXX XXXXXXX
                  </p>
                </div>

                <div>
                  <h3 className="text-cyan-400 font-semibold text-lg">
                    📍 Location
                  </h3>

                  <p className="text-gray-300">
                    Punjab, Pakistan
                  </p>
                </div>

              </div>

            </div>

            {/* Contact Form */}

            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10">

              <h2 className="text-3xl font-bold text-cyan-400 mb-8">
                Send Me a Message
              </h2>

              <form
  action="https://formspree.io/f/myegozvo"
  method="POST"
  className="space-y-6"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full p-4 rounded-xl bg-slate-800 border border-slate-600 focus:border-cyan-400 outline-none"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full p-4 rounded-xl bg-slate-800 border border-slate-600 focus:border-cyan-400 outline-none"
  />

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
    className="w-full p-4 rounded-xl bg-slate-800 border border-slate-600 focus:border-cyan-400 outline-none"
  />

  <textarea
    name="message"
    rows={6}
    placeholder="Write your message..."
    required
    className="w-full p-4 rounded-xl bg-slate-800 border border-slate-600 focus:border-cyan-400 outline-none"
  />

  <button
    type="submit"
    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-bold hover:scale-105 transition"
  >
    Send Message
  </button>
</form>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}