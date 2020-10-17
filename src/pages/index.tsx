import { getGithubPreviewProps, parseJson } from 'next-tinacms-github';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import matter from 'gray-matter';
import { css } from 'linaria';

import { Layout } from '../design/layout';
import { MetaTags } from '../components/meta-tags';
import { Header } from '../components/header';
import { BlogMatterFile } from '../types';
import { FormattedDate } from '../components/date';

function importAll(r) {
  return r.keys().map(r);
}

const blogItems = importAll(
  // @ts-ignore
  require.context('../../content/blog', true, /.*/)
);

const linkStyle = css`
  text-decoration: none;
`;

const listStyle = css`
  list-style: none;
`;

const dateStyle = css`
  display: block;
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    height: 1px;
    background-color: rgba(228, 231, 255, 0.2);
    left: 0;
    right: 0;
    top: 9px;
    z-index: -1;
  }
`;

const dateStyleContainer = css`
  color: #e4e7ff;
  display: inline-block;
  padding-right: 18px;
  background-color: #0d0d0e;
  font-size: 18px;
  font-family: var(--font-base);
  letter-spacing: 0.085em;
  line-height: 22px;
`;

const titleStyle = css`
  font-family: var(--font-base);
  font-weight: 600;
  font-size: 48px;
  line-height: 135%;

  background: -webkit-linear-gradient(0deg, #4355e7, #d22ca4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

interface IndexPageProps {
  articles: { title: string; date: string }[];
}

const IndexPage: NextPage<IndexPageProps> = ({ articles }) => {
  return (
    <Layout header={<Header title="Latest Articles" />}>
      <MetaTags description="Felix Haus is a digital product designer from Kassel, Germany." />
      <ol>
        {articles.map(({ title, date }) => (
          <li key={title}>
            <Link href="/">
              <a className={linkStyle} title={title}>
                <span className={dateStyle}>
                  <span className={dateStyleContainer}>
                    <FormattedDate date={date} />
                  </span>
                </span>
                <span className={titleStyle}>{title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  // Get a list of all blog posts
  const _blogItems = blogItems
    .map(({ default: content }) => {
      const _matter = matter(content as string) as BlogMatterFile;

      return {
        title: _matter.data.title,
        date: _matter.data.date,
      };
    })
    .sort((item1, item2) => {
      // Sort desc for date
      // new -> old
      return Number(new Date(item2.date)) - Number(new Date(item1.date));
    });

  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/home.json',
      parse: parseJson,
    });
  }
  return {
    props: {
      articles: _blogItems,
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
