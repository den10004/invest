import { getPb } from "@/lib/pb";

export default async function ProjectRender() {
  const pb = await getPb();
  const data = await getProjects();
}
