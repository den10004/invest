import { getPb } from "@/lib/pb";

export async function ProjectRender() {
  const records = null;
  try {
    const pb = await getPb();
    const api = await fetch("/api/records");
    const data = await api.json();
    const records = await data.records;

    return {
      pb,
      records,
    };
  } catch (error) {
    return { error: "Ошибка загрузки карточек" };
  }
}
