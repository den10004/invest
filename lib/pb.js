import PocketBase from "pocketbase";

export async function getPb() {
  const pb = new PocketBase("https://platformatest.ru");
  await pb.admins.authWithPassword(
    "info@platformatest.ru",
    "-P6MAiEbk5_9m2OquSyt3SFwq0K0gMPs"
  );
  return pb;
}
