import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-24 px-8">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div className="flex justify-center">
            <Image
              src="/images/avatar.png"
              alt="Maryam Mahmood"
              width={420}
              height={420}
              className="rounded-full border-4 border-cyan-400 shadow-2xl"
            />
          </div>

          {/* Content */}

          <div>

            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              About Me
            </h1>

            <p className="text-gray-300 leading-8 text-lg mb-6">
              Hello! I'm <span className="text-cyan-400 font-bold">Maryam Mahmood</span>,
              a BS Information Technology student passionate about Artificial
              Intelligence, Machine Learning, Data Science, and modern Web
              Development.
            </p>

            <p className="text-gray-300 leading-8 text-lg mb-6">
              I enjoy solving real-world problems using AI and building
              practical applications with Python, Machine Learning,
              Next.js, and Tailwind CSS.
            </p>

            <p className="text-gray-300 leading-8 text-lg">
              Currently I'm working on AI portfolio projects, Kaggle datasets,
              machine learning research, and continuously improving my software
              development skills.
            </p>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}