"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const skillCategories = [
  {
    title: "💻 Programming Languages",
    color: "from-cyan-500 to-blue-500",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "C++",
      "Object-Oriented Programming",
    ],
  },
  {
    title: "🤖 AI & Machine Learning",
    color: "from-violet-500 to-fuchsia-500",
    skills: [
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Random Forest",
      "Feature Engineering",
      "Data Analysis",
      "Model Evaluation",
    ],
  },
  {
    title: "🌐 Web Development",
    color: "from-emerald-500 to-teal-500",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "REST APIs",
    ],
  },
  {
    title: "🛠 Tools & Platforms",
    color: "from-orange-500 to-red-500",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Google Colab",
      "Jupyter Notebook",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-24">

        <div className="max-w-7xl mx-auto px-8">

          {/* Heading */}

          <div className="text-center mb-16">

            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              My Skills
            </h1>

            <p className="text-gray-400 mt-5 text-xl max-w-3xl mx-auto">
              I enjoy building intelligent applications using Artificial Intelligence,
              Machine Learning, modern web technologies, and data analysis tools.
            </p>

          </div>

          {/* Skill Cards */}

          <div className="grid md:grid-cols-2 gap-8">

            {skillCategories.map((category, index) => (
              <FadeIn
    key={index}
    delay={index * 0.15}
  >

              <div
                key={index}
                className="rounded-3xl bg-slate-900 border border-slate-700 overflow-hidden shadow-xl hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
              >

                <div className={`bg-gradient-to-r ${category.color} p-6`}>

                  <h2 className="text-2xl font-bold">
                    {category.title}
                  </h2>

                </div>

                <div className="p-6">

                  <div className="flex flex-wrap gap-3">

                    {category.skills.map((skill, i) => (

                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-slate-800 border border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition duration-300"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </div>
              </FadeIn>

            ))}

          </div>

          {/* Currently Learning */}
          <FadeIn delay={0.7}>

          <div className="mt-20 bg-slate-900 border border-slate-700 rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              🚀 Currently Learning
            </h2>

            <p className="text-gray-400 mb-8">
              I'm continuously improving my skills by learning modern AI
              technologies and advanced development frameworks.
            </p>

            <div className="flex flex-wrap gap-4">

              <span className="px-5 py-3 rounded-full bg-violet-500/20 border border-violet-400">
                🤖 Deep Learning
              </span>

              <span className="px-5 py-3 rounded-full bg-cyan-500/20 border border-cyan-400">
                🧠 AI Agents
              </span>

              <span className="px-5 py-3 rounded-full bg-emerald-500/20 border border-emerald-400">
                🔗 LangChain
              </span>


              <span className="px-5 py-3 rounded-full bg-pink-500/20 border border-pink-400">
                ☁ Google Cloud
              </span>

            </div>
          

          </div>
          </FadeIn>

        </div>

      </main>

      <Footer />

    </>
  );
}