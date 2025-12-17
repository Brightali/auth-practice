import UserProfileCard from "@/components/UserProfileCard";
import { getSessionData } from "@/lib/get-session";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getSessionData();
  const user = session?.user;

  if (!user) {
    return redirect("/log-in");
  }

  return (
    <div className="min-h-screen grid place-items-center bg-background">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-md mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {`Welcome back ${user.name.split(" ")[0]}`}
            </h2>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>

          <UserProfileCard user={user} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
