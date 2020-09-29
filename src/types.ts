export interface BlogMeta {
  title: string;
  date: string;
  description: string;
  keywords: string[];
}

export interface BlogMatterFile {
  content: string;
  data: BlogMeta;
  isEmpty: boolean;
  excerpt: string;
}

export interface IndexPageArticles {
  title: string;

}
