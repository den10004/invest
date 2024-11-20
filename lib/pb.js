import PocketBase from "pocketbase";

export async function getPb() {
  const pb = new PocketBase(process.env.DB_HOST);

  return pb;
}
