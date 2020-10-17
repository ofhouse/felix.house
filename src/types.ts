import { GrayMatterFile } from 'gray-matter';

export interface BlogMeta {
  title: string;
  date: string;
  description: string;
  keywords: string[];
}

export interface BlogMatterFile extends GrayMatterFile<string> {
  content: string;
  data: BlogMeta;
  isEmpty: boolean;
  excerpt: string;
}

export interface IndexPageArticles {
  title: string;
  date: string;
}
