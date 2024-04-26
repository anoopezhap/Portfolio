import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Anoop Joseph
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm an aspiring Full Stack MERN Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m an aspiring full-stack MERN developer with a passion for turning
          ideas into reality. Explore my projects, discover my skills, and let’s
          connect to create something amazing together.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>{" "}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
