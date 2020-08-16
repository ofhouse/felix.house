import * as React from 'react';
import Head from 'next/head';

const defaultTitle = 'Felix Haus – Designer and Developer from Kassel, Germany';

interface MetaTagsProps {
  title?: string;
  description?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Head>
      <title>{title ? `${title} – Felix Haus` : defaultTitle}</title>
      <meta property="og:title" content={title} />
      {description ? <meta name="description" content={description} /> : null}
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      {children}
    </Head>
  );
};
