import { getPb } from "@/lib/pb";
import { getProjects } from "@/lib/connect";

export default async function ProjectRender() {
  const pb = await getPb();
  const data = await getProjects();
  return {
    pb,
    data,
  };
}
