"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function logout() {
      await authClient.signOut();
      router.replace("/");
      router.refresh();
    }

    logout();
  }, [router]);

  return (
    <div>
      <h1>Saindo...</h1>
    </div>
  );
}
