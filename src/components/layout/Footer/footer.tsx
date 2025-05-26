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
        <div className="mt-4 flex items-center space-x-4">
          {/* 깃허브 */}
          <a
            href="https://github.com/HongMinJung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span className="sr-only">GitHub</span>
          </a>

          {/* 링크드인 */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>

          {/* 티스토리 */}
          <a
            href="https://tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="4"
                y="2"
                width="16"
                height="20"
                rx="2"
                strokeWidth="2"
              ></rect>
              <line x1="8" y1="7" x2="16" y2="7" strokeWidth="2"></line>
              <line x1="12" y1="7" x2="12" y2="17" strokeWidth="2"></line>
            </svg>
            <span className="sr-only">Tistory</span>
          </a>

          {/* 노션 */}
          <a
            href="https://notion.so"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="4"
                y="2"
                width="16"
                height="20"
                rx="2"
                strokeWidth="2"
              ></rect>
              <path d="M8 7L16 7"></path>
              <path d="M8 12L16 12"></path>
              <path d="M8 17L12 17"></path>
            </svg>
            <span className="sr-only">Notion</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
