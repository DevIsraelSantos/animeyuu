import { LogoutButton } from "@/components/auth/logout-button";
import { Suspense } from "react";
import { ProfileName } from "./profile-name";

export default function ProfilePage() {
  return (
    <div>
      <LogoutButton />
      <Suspense fallback={<h1>Carregando perfil...</h1>}>
        <ProfileName />
      </Suspense>
    </div>
  );
}
