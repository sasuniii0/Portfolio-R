import { FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiJavascript, SiMongodb } from "react-icons/si";
import { MdSchool } from "react-icons/md";

const SkillsEducation = () => {
  return (
    <section id="skills-education" className="py-20 px-6 md:px-10 bg-[#0D0D0D] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Skills Section */}
        <article className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-6">
            Professional Skills
          </h2>
          <p className="text-gray-300 mb-8">
            I am a Software Engineer with expertise in backend, frontend, AI & Machine Learning, and modern development tools.
          </p>

          {/* Skills as badges with icons */}
          <div className="flex flex-wrap justify-center gap-4">
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              <FaJava /> Java
            </span>
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              <SiSpringboot /> Spring Boot
            </span>
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              <FaPython /> Python
            </span>
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              <SiJavascript /> JavaScript
            </span>
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              <FaReact /> React
            </span>
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              <FaNodeJs /> Node.js
            </span>
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              <FaHtml5 /> HTML
            </span>
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              <FaCss3Alt /> CSS
            </span>
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              <SiTailwindcss /> Tailwind
            </span>
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              <FaDatabase /> SQL
            </span>
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              <SiMongodb /> MongoDB
            </span>
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              <FaGitAlt /> Git
            </span>
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              <FaDocker /> Docker
            </span>
            <span className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
              AI & ML
            </span>
          </div>
        </article>

        {/* Education Section */}
        <article className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-6">
            Education & Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-8">

            <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg border-l-4 border-green-500 flex flex-col items-start gap-3 w-[320px] h-[180px] hover:translate-y-2 hover:shadow-2xl transition-transform duration-300">
              <MdSchool className="text-green-500 text-3xl" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Gothami Girls School, Colombo 10</h3>
              <p className="text-gray-300">Ordinary Level (O/L)</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg border-l-4 border-green-500 flex flex-col items-start gap-3 w-[320px] h-[180px] hover:translate-y-2 hover:shadow-2xl transition-transform duration-300">
              <MdSchool className="text-green-500 text-3xl" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">St. Paul’s Girls School, Colombo 3</h3>
                <p className="text-gray-300">Advanced Level (A/L)</p>
              </div>
              
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg border-l-4 border-green-500 flex flex-col items-start gap-2 w-[320px] h-[180px] hover:translate-y-2 hover:shadow-2xl transition-transform duration-300">
              <MdSchool className="text-green-500 text-3xl" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">IJSE Campus, Panadura</h3>
              <p className="text-gray-300">Undergraduate in Software Engineering</p>
              <p className="text-gray-400 text-sm">Currently exploring AI & Machine Learning</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg border-l-4 border-green-500 flex flex-col items-start gap-3 w-[320px] h-[180px] hover:translate-y-2 hover:shadow-2xl transition-transform duration-300">
              <MdSchool className="text-green-500 text-3xl" />
                <div>
                    <h3 className="text-xl md:text-2xl font-bold">IMBS Green Campus</h3>
                    <p className="text-gray-300">Information Technology Certification</p>
                </div>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg border-l-4 border-green-500 flex flex-col items-start gap-3 w-[320px] h-[180px] hover:translate-y-2 hover:shadow-2xl transition-transform duration-300">
              <MdSchool className="text-green-500 text-3xl" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">British Council</h3>
              <p className="text-gray-300">Professional Development Courses</p>
              </div>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
};

export default SkillsEducation;
