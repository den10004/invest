import PocketBase from "pocketbase";

const pb = new PocketBase("https://platformatest.ru");

export async function getProjects() {
  return await pb.collection("projects").getFullList({
    sort: "-created",
  });
}
