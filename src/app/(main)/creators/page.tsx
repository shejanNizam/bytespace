import { creators } from "@/data/creators";
import { redirect } from "next/navigation";

// The design has no creators index yet; with a single creator, the nav's
// "Creators" link goes straight to their profile.
export default function CreatorsPage() {
  redirect(`/creators/${creators[0].id}`);
}
