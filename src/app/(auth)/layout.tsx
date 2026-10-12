import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { AppSidebar } from "@/components/sidebar/app-sidebar";

import { ResponsiveContent } from "@/components/sidebar/responsive-content";
import { SidebarProvider } from "@/components/ui/sidebar";

export const instant = false;

export default async function LayoutAuth({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  return (
    <SidebarProvider>
      <AppSidebar
        user={{
          name: session.user.name,
          image: session.user.image,
        }}
      />
      <ResponsiveContent>{children}</ResponsiveContent>
    </SidebarProvider>
  );
}
