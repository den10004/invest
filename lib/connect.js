import { getPb } from "@/lib/pb";

export default async function ProjectRender() {
  const pb = await getPb();
  const data = await pb.collection("catalogue").getList(0, 100, {
    expand: "project",
  });
  return {
    pb,
    data,
  };
}
