import { dirname } from 'path';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';

interface BlogPageProps {
  markdownBody: string;
}

const BlogPage: NextPage<BlogPageProps> = ({ markdownBody }) => {
  return (
    <article>
      <h1>Blog title</h1>

      <main>
        <ReactMarkdown source={markdownBody}></ReactMarkdown>
      </main>
    </article>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { default: matter } = await import('gray-matter');

  const { slug } = ctx.params;
  const content = await import(`../../../content/blog/${slug}/index.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { sync } = await import('glob');

  //get all .md files in the posts dir
  const blogs = sync('content/blog/**/*.md');

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) => {
    const rawSlug = dirname(file).split('/');
    const slug = rawSlug[rawSlug.length - 1];
    return slug;
  });

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/blog/${slug}`);
  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;
