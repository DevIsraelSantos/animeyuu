"use server";
import { DiscordLoginButton } from "@/components/auth/discord-login-button";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="" width={36} height={36} priority />
            <span className="text-xl font-bold tracking-tight">
              Anime<span className="text-violet-400">Yuu.</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#explorar" className="transition hover:text-white">
              Explorar
            </a>
            <a href="#como-funciona" className="transition hover:text-white">
              Como funciona
            </a>
            <a href="#sobre" className="transition hover:text-white">
              Sobre o projeto
            </a>
          </div>

          <DiscordLoginButton />
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-700/20 blur-[120px]" />
          <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-fuchsia-700/15 blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:py-32 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                Seu gosto. Suas escolhas. Sua curadoria.
              </span>

              <h1 className="mt-8 max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Não apenas assista.
                <span className="mt-2 block text-violet-400">Recomende.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                Organize os animes que você assistiu, monte sua tier list e
                transforme suas opiniões em recomendações que valem a pena
                compartilhar.
              </p>

              <div
                id="comecar"
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#explorar"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-7 py-4 font-semibold transition hover:bg-violet-500"
                >
                  Montar minha curadoria
                  <span aria-hidden="true">→</span>
                </a>

                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:border-white/30 hover:bg-white/5"
                >
                  Descobrir como funciona
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-zinc-500">
                <span className="flex items-center gap-2">
                  <span className="text-violet-400">✓</span>
                  Sua lista, suas regras
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-violet-400">✓</span>
                  Rankings personalizados
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-violet-400">✓</span>
                  Compartilhe suas escolhas
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-4 rounded-3xl bg-violet-600/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/90 p-5 shadow-2xl sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
                      Minha curadoria
                    </p>
                    <h2 className="mt-2 text-xl font-bold">
                      Meus animes favoritos
                    </h2>
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">
                    Tier list
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex gap-4 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4">
                    <div className="flex h-14 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-xl font-black text-amber-400">
                      S
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                        Imperdíveis
                      </p>
                      <p className="mt-1 font-semibold">Frieren · Re:Zero</p>
                      <p className="mt-1 text-sm text-zinc-500">
                        Os que eu sempre recomendo.
                      </p>
                    </div>
                    <span className="self-center text-zinc-600">↗</span>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-violet-400/20 bg-violet-400/5 p-4">
                    <div className="flex h-14 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-400/15 text-xl font-black text-violet-400">
                      A
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                        Excelentes
                      </p>
                      <p className="mt-1 font-semibold">Overlord · Konosuba</p>
                      <p className="mt-1 text-sm text-zinc-500">
                        Ótimos para indicar.
                      </p>
                    </div>
                    <span className="self-center text-zinc-600">↗</span>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-sky-400/20 bg-sky-400/5 p-4">
                    <div className="flex h-14 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-400/15 text-xl font-black text-sky-400">
                      B
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                        Muito bons
                      </p>
                      <p className="mt-1 font-semibold">DanMachi · Dr. Stone</p>
                      <p className="mt-1 text-sm text-zinc-500">
                        Vale a pena conhecer.
                      </p>
                    </div>
                    <span className="self-center text-zinc-600">↗</span>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">
                        Encontrar uma recomendação
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        Filtre pelo seu gosto.
                      </p>
                    </div>
                    <span className="rounded-xl bg-violet-600/20 px-3 py-2 text-sm text-violet-300">
                      Isekai
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">
                      Comédia
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">
                      Ação
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">
                      Romance
                    </span>
                    <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1.5 text-xs text-violet-300">
                      Tier S e A
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-white/10 bg-zinc-800 px-5 py-4 shadow-xl sm:block">
                <p className="text-xs text-zinc-400">Sua opinião importa</p>
                <p className="mt-1 font-semibold">Sua curadoria, seu estilo.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="explorar"
          className="border-y border-white/10 bg-zinc-900/50"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                Muito além de uma lista
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Seu gosto merece ser organizado.
              </h2>
              <p className="mt-5 leading-7 text-zinc-400">
                Cada anime tem seu lugar. Organize suas experiências e encontre
                a recomendação certa para cada ocasião.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <article className="rounded-2xl border border-white/10 bg-zinc-950 p-7 transition hover:border-violet-400/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-xl text-violet-400">
                  ◈
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  Organize sua jornada
                </h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  Registre o que já assistiu, o que está acompanhando, o que
                  pretende ver e até os animes que decidiu abandonar.
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-zinc-950 p-7 transition hover:border-violet-400/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-xl text-violet-400">
                  ≋
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  Crie seu próprio ranking
                </h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  Monte sua tier list, avalie suas experiências e escreva
                  reviews que expliquem por que cada anime merece sua posição.
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-zinc-950 p-7 transition hover:border-violet-400/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-xl text-violet-400">
                  ↗
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  Compartilhe suas descobertas
                </h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  Compartilhe sua curadoria e ajude outras pessoas a encontrar
                  animes que realmente combinam com seus interesses.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="como-funciona"
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
        >
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                Simples assim
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                A próxima indicação começa com você.
              </h2>
              <p className="mt-5 leading-7 text-zinc-400">
                Esqueça procurar entre centenas de títulos toda vez que alguém
                pedir uma recomendação. Sua lista já estará organizada para
                encontrar a escolha certa.
              </p>
            </div>

            <div className="space-y-7">
              <div className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 font-bold">
                  01
                </span>
                <div>
                  <h3 className="font-semibold">Cadastre seus animes</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Monte sua biblioteca com status, gêneros, tags e avaliações
                    pessoais.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 font-bold">
                  02
                </span>
                <div>
                  <h3 className="font-semibold">Defina suas preferências</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Organize os títulos por tier e deixe claro quais são seus
                    favoritos.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 font-bold">
                  03
                </span>
                <div>
                  <h3 className="font-semibold">Encontre e compartilhe</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Filtre por gênero ou características e compartilhe suas
                    recomendações com quem quiser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="px-6 pb-24 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-violet-400/20 bg-linear-to-br from-violet-950 via-zinc-900 to-zinc-950 px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
                Todo mundo tem um anime para recomendar.
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
                Chegou a hora de organizar os seus favoritos e transformar seu
                gosto em uma curadoria só sua.
              </p>
              <a
                href="#comecar"
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-zinc-950 transition hover:bg-violet-200"
              >
                Criar minha curadoria
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="" width={36} height={36} priority />
            <span className="text-xl font-bold tracking-tight">
              Anime<span className="text-violet-400">Yuu.</span>
            </span>
          </Link>

          <p className="text-center text-sm text-zinc-500">
            Sua coleção. Suas opiniões. Suas recomendações.
          </p>

          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={80}
            height={20}
            className="opacity-50 invert"
          />
        </div>
      </footer>
    </div>
  );
}
