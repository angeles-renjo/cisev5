// authProtected.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FunctionComponent } from "react";

export default function AuthProtected(Page: FunctionComponent) {
  return function ProtectedRoute() {
    const { data: session, status } = useSession();
    const isUser = !!session?.user;
    const router = useRouter();

    useEffect(() => {
      if (status === "loading") return; // Do nothing while loading
      if (!isUser) router.push("/login"); // If not authenticated, force login
    }, [isUser, status, router]);

    // If the user is authenticated, render the page
    return <Page />;
  };
}
