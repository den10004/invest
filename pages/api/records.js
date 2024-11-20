import PocketBase from "pocketbase";

//  getPath(pb, item.id, image);

export default async function handler(req, res) {
  try {
    const pb = new PocketBase(process.env.DB_HOST);
    await pb.admins.authWithPassword(process.env.DB_USER, process.env.DB_PASS);

    const data = await pb.collection("catalogue").getList(0, 100, {
      expand: "project",
    });

    let records = [];

    for (const item of data.items) {
      let images = [];
      for (const imageName of item.expand.project.images) {
        const url = `https://invest.platformatest.ru/api/files/gx1v9pcarmp1d48/${item.expand.project.id}/${imageName}`;
        images.push(url);
      }
      records.push({
        id: item.expand.project.id,
        title: item.expand.project.title,
        images: images,
      });
    }

    res.status(200).json({ message: "Ok", records: records });
    console.log(records);
  } catch (error) {
    console.error("Ошибка аутентификации:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
}
