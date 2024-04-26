import { useParams } from "react-router-dom";
import { data } from "./../data/data";

function ProjectDetails() {
  const { projectName } = useParams();

  //console.log(projectName);

  const project = data;

  console.log("project", project);

  const details = project.filter((item) => item.name === projectName);

  console.log("details", details);

  return (
    <div className="bg-[#0a192f] h-screen font-sans">
      <div className="container mx-auto p-4 h-full flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-3/4 lg:w-1/2">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={details[0].image}
                alt="Project Image"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:ml-4 mt-4 md:mt-0">
              <h1 className="text-3xl font-semibold mb-2">{details[0].name}</h1>
              <p className="text-gray-600 mb-4">{details[0].details}</p>

              {/* <div className="mb-4">
                <a
                  href="https://github.com/yourusername/project-repo"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {details[0].github}
                </a>
              </div> */}
              <div>
                <a
                  href={details[0].live}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {details[0].live}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
