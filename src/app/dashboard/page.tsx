"use client";

import UserProfileCard from "@/components/UserProfileCard";
import { toast } from "sonner";

const Index = () => {
  // Mock user data - replace with real auth data when connected to backend
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "Administrator",
    photoUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  };

  const handleSignOut = () => {
    toast("Signed out", {
      description: "You have been successfully signed out.",
    });
  };

  const handleViewUsers = () => {
    toast("View Users", {
      description: "Navigating to users list...",
    });
  };

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

          <UserProfileCard
            name={user.name}
            email={user.email}
            role={user.role}
            photoUrl={user.photoUrl}
            onSignOut={handleSignOut}
            onViewUsers={handleViewUsers}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
