"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { ReactNode } from "react";

type DiscordLoginButtonProps = {
  callbackURL?: string;
  children?: ReactNode;
};

export function DiscordLoginButton({
  callbackURL = "/profile",
  children = "Login",
}: DiscordLoginButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin() {
    setIsLoading(true);

    try {
      await authClient.signIn.social({
        provider: "discord",
        callbackURL,
      });
    } catch (error) {
      console.error("Erro ao entrar com Discord:", error);
      setIsLoading(false);
    }
  }

  return (
    <Button
      type="button"
      onClick={handleLogin}
      disabled={isLoading}
      className="h-11 gap-2.5 rounded-lg border-0 bg-[#5865F2] px-6 text-sm font-semibold text-white shadow-[0_0_24px_rgba(88,101,242,0.35)] transition-all duration-200 hover:bg-[#4752C4] hover:shadow-[0_0_30px_rgba(88,101,242,0.5)] active:scale-[0.98] disabled:opacity-70"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5 shrink-0"
        aria-hidden="true"
      >
        <path d="M19.73 5.34A19.8 19.8 0 0 0 14.85 3.8a.07.07 0 0 0-.07.04c-.21.38-.45.87-.61 1.26a18.3 18.3 0 0 0-5.5 0c-.16-.4-.41-.88-.62-1.26a.07.07 0 0 0-.07-.04 19.7 19.7 0 0 0-4.88 1.54.06.06 0 0 0-.03.03C-.04 9.96-.89 14.44-.47 18.87a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 5.98 3.02.07.07 0 0 0 .08-.03c.46-.63.87-1.29 1.22-1.99a.07.07 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.89.07.07 0 0 1-.01-.12c.13-.09.26-.19.39-.29a.07.07 0 0 1 .07-.01c3.92 1.79 8.17 1.79 12.04 0a.07.07 0 0 1 .07.01c.13.1.26.2.39.29a.07.07 0 0 1-.01.12c-.6.35-1.22.65-1.87.89a.07.07 0 0 0-.04.1c.36.7.77 1.36 1.22 1.99a.07.07 0 0 0 .08.03 19.8 19.8 0 0 0 5.99-3.02.07.07 0 0 0 .03-.05c.5-5.12-.84-9.56-3.57-13.5a.06.06 0 0 0-.03-.03ZM8.02 15.4c-1.18 0-2.16-1.08-2.16-2.4s.96-2.4 2.16-2.4 2.18 1.09 2.16 2.4c0 1.32-.96 2.4-2.16 2.4Zm7.96 0c-1.18 0-2.16-1.08-2.16-2.4s.96-2.4 2.16-2.4 2.18 1.09 2.16 2.4c0 1.32-.96 2.4-2.16 2.4Z" />
      </svg>

      <span className="mt-1">{isLoading ? "Redirecionando..." : children}</span>
    </Button>
  );
}
