import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import NotFoundPage from "@/components/404/not-found-page";

export const instant = false;

export default async function NotFound() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  return <NotFoundPage />;
}
