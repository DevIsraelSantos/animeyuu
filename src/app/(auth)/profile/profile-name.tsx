import { auth } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { headers } from "next/headers";

export async function ProfileName() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const name = session!.user.name;
  const image = session!.user.image;

  return (
    <div>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={image ?? undefined} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .slice(0, 2)
              .map((part) => part[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <h1>Bem-vindo, {name}</h1>
      </div>
      <pre>{JSON.stringify(session, null, Infinity)}</pre>
    </div>
  );
}
