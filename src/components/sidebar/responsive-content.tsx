"use client";

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import type { ReactNode } from "react";

export function ResponsiveContent({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <div className="flex select-none items-center gap-3">
            <Image
              src="/logo.svg"
              alt=""
              width={36}
              height={36}
              priority
              className="shrink-0"
            />

            <span className="truncate text-xl font-bold tracking-tight">
              Anime<span className="text-yuu">Yuu.</span>
            </span>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">{children}</main>
      </SidebarInset>
    );
  }

  return <main className="flex-1 p-4 md:p-6">{children}</main>;
}
