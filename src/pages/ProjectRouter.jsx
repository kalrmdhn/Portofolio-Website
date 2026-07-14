import { useParams } from "react-router-dom";

import { projects } from "../data/projects";

import ProjectDetailData from "./ProjectDetailData";
import ProjectDetailWeb from "./ProjectDetailWeb";
import ProjectDetailTA from "./ProjectDetailTA";

function ProjectRouter() {
  const { id } = useParams();

//   console.log("URL:", id);

//   console.log("PROJECTS:", projects);

  const project = projects.find((item) => item.id === id);

  if (!project) return <h1>Project Not Found</h1>;

  switch (project.category) {
    case "data":
      return <ProjectDetailData project={project} />;

    case "web":
      return <ProjectDetailWeb project={project} />;

    case "thesis":
      return <ProjectDetailTA project={project} />;

    default:
      return <h1>Not Found</h1>;
  }
}

export default ProjectRouter;
