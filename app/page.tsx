"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">

        <section className="max-w-7xl mx-auto px-8 py-24">

          <div className="grid lg:grid-cols-2 items-center gap-16">

            {/* LEFT */}
<FadeIn>
            <div>

              <p className="text-cyan-400 font-semibold text-lg mb-4">
                👋 Hello, I'm
              </p>

              <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                Maryam Mahmood
              </h1>

              <h2 className="mt-6 text-3xl font-bold text-white">
                AI & Machine Learning Student
              </h2>

              <p className="mt-8 text-lg text-slate-300 leading-9">
                Passionate about Artificial Intelligence, Machine Learning,
                Data Science, and modern web development.
                I enjoy building intelligent applications,
                analyzing data, and creating solutions that solve
                real-world problems.
              </p>
              </div>
              </FadeIn>

              {/* Buttons */}

              <div className="flex gap-5 mt-10 flex-wrap">

                <Link
                  href="/projects"
                  className="px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition duration-300"
                >
                  🚀 View Projects
                </Link>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl border-2 border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-400 hover:text-slate-950 transition duration-300"
                >
                  📄 Download Resume
                </a>

              </div>

              {/* Tech Badges */}

              <div className="flex flex-wrap gap-4 mt-12">

                <span className="px-5 py-2 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300">
                  🤖 Artificial Intelligence
                </span>

                <span className="px-5 py-2 rounded-full bg-violet-500/20 border border-violet-400 text-violet-300">
                  🧠 Machine Learning
                </span>

                <span className="px-5 py-2 rounded-full bg-sky-500/20 border border-sky-400 text-sky-300">
                  💻 Next.js
                </span>

                <span className="px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300">
                  🐍 Python
                </span>

              </div>

              {/* Stats */}

                          <div className="grid grid-cols-2 gap-6 mt-16">

                                  <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

                         <h3 className="text-4xl font-bold text-cyan-400">
      5+
    </h3>

    <p className="text-slate-400 mt-2">
      AI Projects
    </p>

  </div>

  <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

    <h3 className="text-4xl font-bold text-violet-400">
      1
    </h3>

    <p className="text-slate-400 mt-2">
      AI Internship
    </p>

  </div>

</div>

{/* Call To Action */}

<section className="mt-24">

  <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10 text-center">

    <h2 className="text-4xl font-bold mb-6">
      Let's Build Something Amazing Together 🚀
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
      I'm passionate about Artificial Intelligence, Machine Learning,
      Python, and modern web development. I'm always learning new
      technologies and looking for opportunities to work on exciting
      AI projects.
    </p>

    <Link
      href="/contact"
      className="inline-block px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition"
    >
      Contact Me
    </Link>

  </div>

</section>

            {/* RIGHT */}
<FadeIn delay={0.3}>
            <div className="flex justify-center">

              <div className="relative">

                <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 blur-3xl opacity-30 animate-pulse"></div>

                <Image
                  src="/images/avatar.png"
                  alt="Maryam Mahmood"
                  width={500}
                  height={500}
                  priority
                  className="relative rounded-full drop-shadow-[0_0_60px_rgba(34,211,238,0.4)] hover:scale-105 transition duration-500"
                />

              </div>

            </div>
</FadeIn>
          </div>

        </section>

      </main>

      {/* Footer */}
      <Footer />

    </>
  );
}