import Head from 'next/head';
import type { JSX } from 'react';

const defaultTitle = 'Felix Haus – Designer and Developer from Germany';

interface MetaTagsProps {
  title?: string;
  description?: string;
  children?: JSX.Element;
}

export const MetaTags = ({ title, description, children }: MetaTagsProps) => {
  return (
    <Head>
      <title>{title ? `${title} – Felix Haus` : defaultTitle}</title>
      <meta property='og:title' content={title} />
      {description ? <meta name='description' content={description} /> : null}
      {description ? (
        <meta property='og:description' content={description} />
      ) : null}
      {children}
    </Head>
  );
};
