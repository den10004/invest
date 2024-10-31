import PocketBase from "pocketbase";

export async function getPb() {
  const pb = new PocketBase("https://platformatest.ru");
  await pb.collection("users").authWithPassword("invest", "jjKzQa7D6d");
  return pb;
}
