import { getProjects } from "@/lib/connect";

export default async function Projects() {
  const data = await getProjects();

  return (
    <div className="" style={{ backgroundColor: "#f1f2f3" }}>
      {data.map((p) => (
        <div key={p.id}>
          <div>{p.title}</div>
        </div>
      ))}
    </div>
  );
}
