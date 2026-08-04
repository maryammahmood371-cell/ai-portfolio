import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center justify-center shadow-lg">
            <span className="font-bold text-slate-950 text-lg">MM</span>
          </div>
                                       
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
          <Link href="/" className="hover:text-cyan-400 transition duration-300">
            Home
          </Link>

          <Link href="/about" className="hover:text-cyan-400 transition duration-300">
            About
          </Link>

          <Link href="/projects" className="hover:text-cyan-400 transition duration-300">
            Projects
          </Link>

          <Link href="/skills" className="hover:text-cyan-400 transition duration-300">
            Skills
          </Link>

          <Link href="/contact" className="hover:text-cyan-400 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Resume Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex rounded-lg bg-cyan-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Hire Me
        </Link>

      </div>
    </nav>
  );
}