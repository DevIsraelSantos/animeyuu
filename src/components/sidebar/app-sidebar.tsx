"use client";

import {
  CompassIcon,
  ListVideoIcon,
  LogOutIcon,
  SparklesIcon,
  UserRoundIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import { authClient } from "@/lib/auth-client";

const navigation = [
  {
    title: "Listas",
    url: "/listas",
    icon: ListVideoIcon,
  },
  {
    title: "Turbo Blitz",
    url: "/blitz",
    icon: SparklesIcon,
  },
  {
    title: "Explorar animes",
    url: "/animes",
    icon: CompassIcon,
  },
];

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  user: {
    name: string;
    image?: string | null;
  };
};

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (url: string) =>
    pathname === url || pathname.startsWith(`${url}/`);

  async function handleSignOut() {
    await authClient.signOut();
    router.replace("/");
    router.refresh();
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="p-3">
        <div className="flex h-12 select-none items-center gap-3 px-2">
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
      </SidebarHeader>
      <SidebarContent className="gap-0 px-2">
        <SidebarGroup className="py-2">
          <SidebarGroupLabel className="px-3 text-xs font-medium text-muted-foreground">
            Biblioteca
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {navigation.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    render={<Link href={item.url} />}
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                    className="h-10 gap-3 rounded-lg px-3"
                  >
                    <item.icon className="size-4.5 shrink-0" />
                    <span className="truncate">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-3 border-t border-sidebar-border/70 py-3">
          <SidebarGroupLabel className="px-3 text-xs font-medium text-muted-foreground">
            Minha conta
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link href="/profile" />}
                  isActive={isActive("/profile")}
                  tooltip="Minha conta"
                  className="h-12 gap-3 rounded-lg px-3"
                >
                  <Avatar className="size-8 shrink-0 rounded-lg">
                    <AvatarImage
                      src={user.image ?? undefined}
                      alt={user.name}
                    />
                    <AvatarFallback className="rounded-lg bg-primary text-primary-foreground">
                      <UserRoundIcon className="size-4" />
                    </AvatarFallback>
                  </Avatar>

                  <div className="grid min-w-0 flex-1 text-left leading-tight">
                    <span className="truncate text-sm font-semibold">
                      {user.name}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      Minha conta
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border/70 p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Sair da conta"
              onClick={handleSignOut}
              className="h-10 gap-3 rounded-lg px-3 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
            >
              <LogOutIcon className="size-4.5 shrink-0" />
              <span>Sair da conta</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
