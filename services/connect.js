import { getPb } from "@/lib/pb";

export async function ProjectRender() {
  const pb = await getPb();
  const data = await pb.collection("catalogue").getList(0, 100, {
    expand: "project",
  });
  if (!data) throw new Error("Данные не загрузились");
  return {
    pb,
    data,
  };
}
/*
export async function SendForm(formData) {
  const pb = await getPb();
  try {
    const data = await pb.collection("orders").create(formData);
    alert("Форма отправлена");
  } catch (error) {
    console.error(error.message);
    alert("Ошибка при отправки формы");
  }
}
*/
