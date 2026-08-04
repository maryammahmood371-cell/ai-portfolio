import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-24">
      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Maryam Mahmood
            </h2>

            <p className="text-gray-400 mt-2">
              AI & Machine Learning Student
            </p>
          </div>

          <div className="flex gap-6 text-2xl">

            <Link href="https://github.com/">
              <FaGithub className="hover:text-cyan-400 transition" />
            </Link>

            <Link href="https://linkedin.com/">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </Link>

            <Link href="mailto:your@email.com">
              <FaEnvelope className="hover:text-cyan-400 transition" />
            </Link>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Maryam Mahmood. Built with Next.js & Tailwind CSS.
        </div>

      </div>
    </footer>
  );
}