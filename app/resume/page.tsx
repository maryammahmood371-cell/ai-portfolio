import Navbar from "@/components/Navbar";

export default function Resume() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-8">

          {/* Heading */}

          <div className="text-center mb-16">
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Resume
            </h1>

            <p className="text-xl text-gray-400 mt-4">
              AI & Machine Learning Student | Web Developer | Future AI Engineer
            </p>
          </div>

          {/* Resume Card */}

          <div className="bg-slate-900 rounded-3xl border border-slate-700 shadow-xl p-10">

            {/* Profile */}

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Profile
              </h2>

              <p className="text-gray-300 leading-8">
                I'm Maryam Mahmood, a BS Information Technology student with a
                passion for Artificial Intelligence, Machine Learning, and Web
                Development. I enjoy building AI-powered applications and solving
                real-world problems using modern technologies.
              </p>
            </section>

            {/* Education */}

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Education
              </h2>

              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-2xl font-semibold">
                  BS Information Technology
                </h3>

                <p className="text-gray-400">
                  Concordia College (Affiliated with Education University Lahore)
                </p>

                <p className="text-cyan-300 mt-2">
                  Expected Graduation: 2026
                </p>
              </div>
            </section>

            {/* Technical Skills */}

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Technical Skills
              </h2>

              <div className="flex flex-wrap gap-3">

                {[
                  "Python",
                  "Machine Learning",
                  "Scikit-learn",
                  "Pandas",
                  "NumPy",
                  "Next.js",
                  "React",
                  "Tailwind CSS",
                  "Git",
                  "GitHub",
                  "Google Colab",
                  "VS Code",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </section>

            {/* Projects */}

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Featured Projects
              </h2>

              <ul className="space-y-4 text-gray-300 list-disc pl-6">
                <li>ResumePilot AI – AI-powered Resume Analyzer</li>
                <li>FlyRank ML Internship – Content Refresh Prediction</li>
                <li>Random Forest Classification Model</li>
                <li>Student Burnout Prediction</li>
                <li>AI Portfolio Website</li>
              </ul>
            </section>

            {/* Download Button */}

            <div className="text-center mt-12">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download
    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition duration-300"
  >
    📄 Download Resume
  </a>
</div>

          </div>

        </div>
      </main>
    </>
  );
}