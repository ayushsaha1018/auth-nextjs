"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { getSession, signOut } from "next-auth/react";
import { useEffect } from "react";

const SettingsPage = () => {
  const user = useCurrentUser();

  return (
    <div>
      <form>
        <button onClick={() => signOut()}>Sign Out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
