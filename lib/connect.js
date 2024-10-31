import PocketBase from "pocketbase";

const pb = new PocketBase("https://platformatest.ru");

export async function getProjects() {
  const authData = await pb
    .collection("users")
    .authWithPassword("invest", "jjKzQa7D6d");
  return await pb.collection("projects").getFullList({
    sort: "-created",
  });
}
