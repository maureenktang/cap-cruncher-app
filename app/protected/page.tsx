import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const ProtectedPage = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-muted-foreground">Welcome, {data.claims.email}</p>
    </div>
  );
}

export default ProtectedPage;
