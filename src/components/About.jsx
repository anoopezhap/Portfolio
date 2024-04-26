function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Anoop Joseph, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              As an aspiring full-stack MERN developer, I thrive on turning
              ideas into reality. My portfolio showcases my passion for
              development and my unwavering commitment to continuous learning. I
              approach challenges with enthusiasm, always seeking innovative
              solutions. Let’s connect and explore how my skills can contribute
              to your next project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
