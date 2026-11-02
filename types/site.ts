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
  slug?: string;
  title: string;
  location: string;
  capacity: string;
  category: string;
  systemType?: string;
  panelBrand?: string;
  inverterBrand?: string;
  mountingStructure?: string;
  image: string;
  gallery?: string[];
  generation?: string;
  savings?: string;
  monthlyBillBefore?: string;
  monthlyBillAfter?: string;
  installationDate?: string;
  warrantyTerms?: string;
  projectDetails?: string;
  result: string;
  isPlaceholder?: boolean;
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
