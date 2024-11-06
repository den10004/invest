import PocketBase from "pocketbase";

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);

export async function getPb() {
  const pb = new PocketBase(process.env.DB_HOST);
  await pb.admins.authWithPassword(process.env.DB_USER, process.env.DB_PASS);

  return pb;
}
