import PocketBase from "pocketbase";

export default async function handler(req, res) {
  try {
    const pb = new PocketBase(process.env.DB_HOST);
    await pb.admins.authWithPassword(process.env.DB_USER, process.env.DB_PASS);
    res.status(200).json({ message: "Успешный вход" });
  } catch (error) {
    console.error("Ошибка аутентификации:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
}
