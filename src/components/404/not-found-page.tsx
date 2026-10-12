"use client";

import { ArrowLeft, Home, SearchX } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-12 text-foreground">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 size-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <section className="relative flex w-full max-w-lg flex-col items-center text-center">
        <div className="mb-6 flex size-20 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 text-primary">
          <SearchX className="size-10" strokeWidth={1.5} />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Erro 404
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Ops! Página não encontrada
        </h1>

        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.back()}
            className="gap-2"
          >
            <ArrowLeft className="size-4" />
            Voltar
          </Button>

          <Button
            size="lg"
            onClick={() => router.push("/profile")}
            className="gap-2"
          >
            <Home className="size-4" />
            Meu perfil
          </Button>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          AnimeYuu · Sua jornada pelos animes continua.
        </p>
      </section>
    </main>
  );
}
