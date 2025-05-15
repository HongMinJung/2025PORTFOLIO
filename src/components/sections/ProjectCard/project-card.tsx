import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/card";
import { Button } from "@/components/ui/Button/button";
import { Badge } from "@/components/ui/Badge/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  slug,
  tags,
  imageUrl,
  demoUrl,
  repoUrl,
  className,
}: ProjectCardProps) {
  return (
    <Card className={cn("overflow-hidden flex flex-col h-full", className)}>
      {imageUrl ? (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="h-48 bg-muted flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground/50"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <circle cx="9" cy="9" r="2"></circle>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
          </svg>
        </div>
      )}

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2">
        <Button asChild variant="default" size="sm">
          <Link href={`/projects/${slug}`}>자세히 보기</Link>
        </Button>
        {demoUrl && (
          <Button asChild variant="outline" size="sm">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              데모 보기
            </a>
          </Button>
        )}
        {repoUrl && (
          <Button asChild variant="outline" size="sm">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              소스 코드
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
