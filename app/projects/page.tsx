"use client";

import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    icon: "🤖",
    title: "ResumePilot AI",
    description:
      "AI-powered resume analyzer built with Next.js. Users can upload resumes, compare them with job descriptions, and receive intelligent feedback.",
    tech: ["Next.js", "React", "Tailwind CSS", "AI"],
    color: "from-cyan-500 to-blue-600",
    github: "https://github.com/maryammahmood371-cell/ResumePilot-AI",
    live: "",
  },
  {
    icon: "📊",
    title: "FlyRank ML Internship",
    description:
      "Machine learning internship project involving feature engineering, predictive modeling, and data analysis.",
    tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    color: "from-violet-500 to-fuchsia-600",
    github: "https://github.com/maryammahmood371-cell/flyrank-ml-internship",
    live: "",
  },
  {
    icon: "💳",
    title: "Credit Card Fraud Detection",
    description:
      "Machine learning classification model for detecting fraudulent credit card transactions using real-world financial data.",
    tech: ["Python", "Machine Learning", "Classification"],
    color: "from-emerald-500 to-teal-600",
    github: "https://github.com/maryammahmood371-cell/Credit-Card-Fraud",
    live: "",
  },
  {
    icon: "🏥",
    title: "Medical Insurance Premium Prediction",
    description:
      "Regression model that predicts medical insurance premiums using customer demographic and health-related features.",
    tech: ["Python", "Regression", "Scikit-learn"],
    color: "from-orange-500 to-pink-500",
    github:
      "https://github.com/maryammahmood371-cell/Medical-Insurance-Premium-Prediction",
    live: "",
  },
  {
    icon: "🎗️",
    title: "Breast Cancer Diagnosis",
    description:
      "Machine learning model for breast cancer diagnosis using classification techniques and healthcare datasets.",
    tech: ["Python", "Healthcare AI", "Classification"],
    color: "from-indigo-500 to-purple-500",
    github:
      "https://github.com/maryammahmood371-cell/breast-cancer-diagnosis",
    live: "",
  },
  {
    icon: "🎵",
    title: "Spotify Data Analysis",
    description:
      "Exploratory data analysis and visualization project uncovering insights from Spotify music datasets.",
    tech: ["Python", "Pandas", "Data Analysis"],
    color: "from-pink-500 to-rose-500",
    github:
      "https://github.com/maryammahmood371-cell/spotify-data-analysis",
    live: "",
  },
];



    export default function Projects() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-24 px-8">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Featured Projects
            </h1>

            <p className="text-gray-400 text-xl mt-5">
              Artificial Intelligence • Machine Learning • Web Development
            </p>

          </div>

          {/* Project Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (
<FadeIn
    key={index}
    delay={index * 0.1}
  >
                <div
                  className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-xl"
                >

                <div
                  className={`h-44 bg-gradient-to-br ${project.color} flex flex-col items-center justify-center`}
                >

                  <div className="text-6xl mb-3">
                    {project.icon}
                  </div>

                  <h2 className="text-2xl font-bold text-center px-3">
                    {project.title}
                  </h2>

                </div>

                <div className="p-6">

                  <p className="text-gray-300 leading-7 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">

                    {project.tech.map((tech, i) => (

                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 border border-cyan-400 text-cyan-300"
                      >
                        {tech}
                      </span>
                      
                      
                    ))}

                  </div>

                  <div className="flex gap-3">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-lg hover:scale-105 hover:shadow-lg transition duration-300"
                    >
                       GitHub
                    </a>

                    
                  </div>

                </div>

              </div>
              </FadeIn>

            ))}
            

          </div>

          {/* Explore More on GitHub */}

          <div className="text-center mt-20">

            <h2 className="text-4xl font-bold mb-4">
              Explore More on GitHub
            </h2>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Explore my complete collection of Artificial Intelligence,
              Machine Learning, Data Science, and Web Development projects.
            </p>

            <a
              href="https://github.com/maryammahmood371-cell"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-slate-950 font-bold hover:scale-105 transition duration-300"
            >
              🚀 View My GitHub
            </a>

          </div>

        </div>

      </main>

      <Footer />

    </>
  );
}