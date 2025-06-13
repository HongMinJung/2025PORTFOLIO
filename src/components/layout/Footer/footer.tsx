import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t border-gray-200 dark:border-gray-800 bg-card", className)}>
      <div className="py-8 md:py-12 flex flex-col justify-center items-center">
        <div className="text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()}PORTFOLIO. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
