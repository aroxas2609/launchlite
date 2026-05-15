import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { slugifyHeading } from "@/lib/blog/slug";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  tags?: string[];
  faq?: BlogFaqItem[];
};

export type BlogHeading = {
  level: number;
  text: string;
  id: string;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  body: string;
  readingTimeMinutes: number;
  headings: BlogHeading[];
};

function extractHeadings(markdown: string): BlogHeading[] {
  const headings: BlogHeading[] = [];

  for (const line of markdown.split("\n")) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line);
    if (!match) continue;
    const level = match[1].length;
    const text = match[2].replace(/\s+#+\s*$/, "").trim();
    const id = slugifyHeading(text) || "section";
    headings.push({ level, text, id });
  }

  return headings;
}

function readingMinutes(markdown: string) {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function listBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as BlogFrontmatter;

  const body = content.trim();

  return {
    ...fm,
    tags: fm.tags ?? [],
    slug,
    body,
    readingTimeMinutes: readingMinutes(body),
    headings: extractHeadings(body),
  };
}

export function getAllPostsSorted(): BlogPost[] {
  const posts = listBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .filter((post): post is BlogPost => Boolean(post));

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(slug);
  if (!current) return [];

  const tags = new Set(current.tags ?? []);

  return getAllPostsSorted()
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      score: (post.tags ?? []).reduce(
        (acc, tag) => acc + (tags.has(tag) ? 1 : 0),
        0,
      ),
    }))
    .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date))
    .slice(0, limit)
    .map(({ post }) => post);
}
