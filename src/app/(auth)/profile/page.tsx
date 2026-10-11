"use client";

import { useSession } from "@/lib/auth-client";

export default function ProfilePage() {
  const session = useSession() ?? null;

  return (
    <div>
      <h1>Profile</h1>
      <pre>
        {JSON.stringify(
          {
            session,
          },
          null,
          Infinity,
        )}
      </pre>
    </div>
  );
}
