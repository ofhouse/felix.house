import { getGithubPreviewProps, parseJson } from 'next-tinacms-github';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { usePlugin } from 'tinacms';
import { useGithubJsonForm, GithubFormOptions } from 'react-tinacms-github';
import ReactMarkdown from 'react-markdown';

import { Layout } from '../components/layout';
import { MetaTags } from '../components/meta-tags';

const IndexPage = ({ file }) => {
  const formOptions: GithubFormOptions = {
    label: 'Home Page',
    fields: [
      { name: 'title', label: 'Title', component: 'text' },
      {
        name: 'description',
        label: 'Description',
        component: 'markdown',
      },
      {
        name: 'links',
        Label: 'Links',
        component: 'group-list',
        fields: [
          { name: 'label', label: 'Label', component: 'text' },
          { name: 'link', label: 'Link', component: 'text' },
        ],
        defaultItem: () => ({
          label: '',
          id: Math.random().toString(36).substr(2, 9),
        }),
        itemProps(item) {
          return {
            key: item.id,
            label: item.label,
          };
        },
      },
    ],
    serialize(input) {
      return input;
    },
  };

  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);

  return (
    <Layout>
      <MetaTags description="Felix Haus is a digital product designer from Kassel, Germany." />
      <div className="outer-flex">
        <div className="vcenter">
          <div className="content-root">
            <h1>
              <Link href="/">
                <a>{data.title}</a>
              </Link>
            </h1>

            <div className="home__content">
              <ReactMarkdown
                source={data.description}
                renderers={{
                  link: (props) => (
                    <a href={props.href} target="_blank" rel="noopener">
                      {props.children}
                    </a>
                  ),
                }}
              />
            </div>
            <ul className="home__social-links">
              {data.links.map(({ label, link }) => (
                <li className="home__social-link" key={label}>
                  <a href={link} target="_blank" rel="noopener">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .outer-flex {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .vcenter {
          display: flex;
          flex: 1;
          align-items: center;
          padding: 0 32px;
        }

        .content-root {
          padding: 32px 0;
        }

        h1 > a {
          color: #000;
          text-decoration: none;
          font-weight: normal;
        }

        h1 > a:hover {
          text-decoration: underline;
        }

        .home__content :global(p) {
          font-size: 1.25rem;
          line-height: 155%;
          color: #919191;
        }

        .home__content :global(a) {
          font-family: monospace;
          background-color: #1f1f1f;
          border-radius: 6px;
          font-size: 1.125rem;
          text-decoration: none;
          color: #fff;
          padding: 0.4rem;
          letter-spacing: 1px;
        }

        .home__content :global(a:hover),
        .home__content :global(a:hover) {
          background-color: #999;
          color: black;
        }

        .home__social-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex: 1;
        }

        .home__social-link {
          padding: 0.25rem 4px;
        }

        .home__social-link:first-child {
          padding-left: 0;
        }

        .home__social-link > a {
          font-size: 1.125rem;
          text-decoration: underline;
          color: #919191;
        }

        .home__social-link > a:hover {
          text-decoration: none;
        }
      `}</style>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/home.json',
      parse: parseJson,
    });
  }
  return {
    props: {
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
