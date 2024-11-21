import PocketBase from "pocketbase";

export default async function handle(req, res) {
  try {
    const pb = new PocketBase(process.env.DB_HOST);
    await pb.admins.authWithPassword(process.env.DB_USER, process.env.DB_PASS);
    const formData = req.body;
    const data = await pb.collection("orders").create(formData);
    console.log("Форма отправлена");
  } catch (error) {
    console.error(error.message);
    console.log("Ошибка при отправке формы");
  }
}
