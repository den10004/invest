import { getPb } from "./pb";

export async function getProjects() {
  const pb = await getPb();
  const data = await pb.collection("projects").getFullList({
    sort: "-created",
  });
  // console.log(data);

  return data;
}
