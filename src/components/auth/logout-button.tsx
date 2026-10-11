"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button } from "../ui/button";

export function LogoutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          startTransition(() => {
            router.replace("/");
            router.refresh();
          });
        },
      },
    });
  }

  return (
    <Button onClick={handleLogout} disabled={isPending}>
      {isPending ? "Saindo..." : "Sair"}
    </Button>
  );
}
