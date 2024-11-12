import { getPb } from "@/lib/pb";

export async function ProjectRender() {
  const pb = await getPb();

  try {
    const data = await pb.collection("catalogue").getList(0, 100, {
      expand: "project",
    });
    return {
      pb,
      data,
    };
  } catch (error) {
    return { error: "Ошибка загрузки карточек" };
  }
}
