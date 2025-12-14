"use client";

import { LogOut, Mail, Shield, User, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface UserProfileCardProps {
  name: string;
  email: string;
  role: string;
  photoUrl?: string;
  onSignOut: () => void;
  onViewUsers: () => void;
}

const UserProfileCard = ({
  name,
  email,
  role,
  photoUrl,
  onSignOut,
  onViewUsers,
}: UserProfileCardProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="transition-all duration-300 hover:shadow-lg animate-fade-in">
      <CardHeader className="flex flex-col items-center pb-2">
        <Avatar className="h-24 w-24 mb-4 ring-4 ring-accent">
          <AvatarImage src={photoUrl} alt={name} />
          <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-semibold text-card-foreground">{name}</h2>
        <Badge variant="secondary" className="mt-2 px-3 py-1">
          <Shield className="h-3 w-3 mr-1.5" />
          {role}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent">
            <User className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
              Full Name
            </p>
            <p className="text-sm font-medium text-card-foreground">{name}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent">
            <Mail className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
              Email Address
            </p>
            <p className="text-sm font-medium text-card-foreground">{email}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-3">
        <Button
          onClick={onViewUsers}
          className="flex-1 transition-all duration-200"
        >
          <Users className="h-4 w-4 mr-2" />
          View Users
        </Button>
        <Button
          //   onClick={onSignOut}
          variant="outline"
          className="flex-1 group transition-all duration-200 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive"
        >
          <LogOut className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-0.5" />
          Sign Out
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserProfileCard;
