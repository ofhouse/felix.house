import Link from 'next/link';

import { Layout } from '../components/layout';
import { MetaTags } from '../components/meta-tags';

const socialLinks = [
  {
    label: 'GitHub',
    link: 'https://github.com/ofhouse',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ofhouse',
  },

  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/felixhaus',
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <MetaTags description='Felix Haus is a digital product designer from Kassel, Germany.' />
      <div className='outer-flex'>
        <div className='vcenter'>
          <div className='content-root'>
            <h1>
              <Link href='/'>Felix Haus</Link>
            </h1>

            <div className='home__content'>
              <p>
                Digital product designer. I work at 
                <a href='https://vercel.com/' target='_blank' rel='noopener'>
                  Vercel
                </a>
                .<br />
              </p>
            </div>
            <ul className='home__social-links'>
              {socialLinks.map(({ label, link }) => (
                <li className='home__social-link' key={label}>
                  <a href={link} target='_blank' rel='noopener'>
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

        h1 > :global(a) {
          color: #000;
          text-decoration: none;
          font-weight: normal;
        }

        h1 > :global(a:hover) {
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

export default IndexPage;
