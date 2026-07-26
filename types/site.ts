import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type Service = {
  title: string;
  slug: string;
  description: string;
  features: string[];
  benefits?: string[];
  process?: string[];
  related?: string[];
  icon: LucideIcon;
};

export type Project = {
  title: string;
  location: string;
  capacity: string;
  category: string;
  image: string;
  result: string;
};

export type Product = {
  title: string;
  category: string;
  description: string;
  image: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};
