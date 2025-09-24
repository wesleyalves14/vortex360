"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Avatar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative inline-flex size-10 shrink-0 overflow-hidden rounded-full align-middle",
        className
      )}
      {...props}
    />
  );
}

export function AvatarImage(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  return <img {...props} className={cn("h-full w-full object-cover", props.className)} />;
}

export function AvatarFallback({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "flex h-full w-full items-center justify-center bg-white/10 text-white/70",
        className
      )}
      {...props}
    />
  );
}

