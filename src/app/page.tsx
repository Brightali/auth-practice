import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen grid place-items-center bg-background">
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Master Authentication{" "}
            <span className="text-muted-foreground">Through Practice</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Building a secure authentication systems from scratch using nextjs
            and betterauth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/log-in">
              <Button size="lg" className="w-full sm:w-auto">
                Login to continue
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t text-center border-border mt-16 container flex items-center justify-center mx-auto px-4 py-8">
        <p>
          This was a practice project by{" "}
          <strong>
            <em>Brightali</em>
          </strong>
          .
        </p>
      </footer>
    </div>
  );
}
