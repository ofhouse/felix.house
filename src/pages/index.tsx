import { getGithubPreviewProps, parseJson } from 'next-tinacms-github';
import { GetStaticProps } from 'next';
import matter from 'gray-matter';

import { Layout } from '../design/layout';
import { MetaTags } from '../components/meta-tags';
import { Header } from '../components/header';
import { BlogMatterFile } from '../types';

function importAll(r) {
  return r.keys().map(r);
}

const blogItems = importAll(
  // @ts-ignore
  require.context('../../content/blog', true, /.*/)
);

const IndexPage = ({ file }) => {
  return (
    <Layout header={<Header title="Latest Articles" />}>
      <MetaTags description="Felix Haus is a digital product designer from Kassel, Germany." />
      <ol>
        <li></li>
      </ol>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  // Get a list of all blog posts
  const _blogItems = blogItems.map(({ default: content }) => {
    return matter(content as string);
  }) as BlogMatterFile[];

  console.log('_blogItems', _blogItems);

  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/home.json',
      parse: parseJson,
    });
  }
  return {
    props: {
      // articles:
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/home.json',
        data: (await import('../../content/home.json')).default,
      },
    },
  };
};

export default IndexPage;
