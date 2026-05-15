"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Children, isValidElement, type ReactNode } from "react";
import { slugifyHeading } from "@/lib/blog/slug";

function extractText(children: ReactNode): string {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }
      if (isValidElement<{ children?: ReactNode }>(child)) {
        return extractText(child.props.children);
      }
      return "";
    })
    .join("")
    .trim();
}

type Props = {
  content: string;
};

export function BlogMarkdown({ content }: Props) {
  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children, ...props }) => {
            const id = slugifyHeading(extractText(children)) || "section";
            return (
              <h2
                id={id}
                className="scroll-mt-28 font-heading text-2xl font-semibold tracking-tight text-midnight sm:text-3xl"
                {...props}
              >
                {children}
              </h2>
            );
          },
          h3: ({ children, ...props }) => {
            const id = slugifyHeading(extractText(children)) || "section";
            return (
              <h3
                id={id}
                className="scroll-mt-28 mt-10 font-heading text-xl font-semibold text-midnight"
                {...props}
              >
                {children}
              </h3>
            );
          },
          p: ({ ...props }) => (
            <p className="mt-4 text-base leading-relaxed text-slate" {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate" {...props} />
          ),
          li: ({ ...props }) => <li className="leading-relaxed" {...props} />,
          a: ({ ...props }) => (
            <a
              className="font-semibold text-accent-strong underline-offset-4 hover:underline"
              {...props}
            />
          ),
          blockquote: ({ ...props }) => (
            <blockquote
              className="mt-6 border-l-4 border-accent/35 bg-soft-blue/40 px-5 py-4 text-sm text-midnight"
              {...props}
            />
          ),
          code: ({ className, children, ...props }) => {
            const isBlock = Boolean(className?.includes("language-"));
            if (isBlock) {
              return (
                <code
                  className={`block overflow-x-auto rounded-xl border border-line bg-midnight/[0.03] p-4 text-sm ${className ?? ""}`}
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code
                className="rounded bg-soft-blue px-1 py-0.5 text-[0.9em] text-midnight"
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
