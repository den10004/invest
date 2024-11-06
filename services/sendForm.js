import { getPb } from "@/lib/pb";

export default async function Record(data) {
  const pb = await getPb();
  const data = await pb.collection("orders").create(data);
}
