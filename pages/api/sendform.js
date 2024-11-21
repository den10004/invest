import PocketBase from "pocketbase";

export default async function handle(req, res) {
  try {
    const pb = new PocketBase(process.env.DB_HOST);
    await pb.admins.authWithPassword(process.env.DB_USER, process.env.DB_PASS);
    const formData = req.body;
    const data = await pb.collection("orders").create(formData);
    res.status(200).json({ result: 1 });
  } catch (error) {
    res.status(500).json({ result: 0 });
  }
}
