import * as React from 'react';
import { AppProps } from 'next/app';
import { TinaCMS, TinaProvider } from 'tinacms';
import { GithubClient, TinacmsGithubProvider } from 'react-tinacms-github';

async function importTinaPlugins(cms: TinaCMS) {
  const { MarkdownFieldPlugin } = await import('react-tinacms-editor');
  cms.plugins.add(MarkdownFieldPlugin);
}

const Site: React.FC<AppProps> = ({ Component, pageProps }) => {
  const cms = React.useMemo(
    () =>
      new TinaCMS({
        enabled: !!pageProps.preview,
        apis: {
          /**
           * 2. Register the GithubClient
           */
          github: new GithubClient({
            proxy: '/api/proxy-github',
            authCallbackRoute: '/api/create-github-access-token',
            clientId: process.env.GITHUB_CLIENT_ID,
            baseRepoFullName: process.env.REPO_FULL_NAME,
            baseBranch: process.env.BASE_BRANCH,
          }),
        },
        /**
         * 3. Use the Sidebar and Toolbar
         */
        sidebar: pageProps.preview,
        toolbar: pageProps.preview,
      }),
    [pageProps.preview]
  );

  React.useEffect(() => {
    if (pageProps.preview) {
      importTinaPlugins(cms);
    }
  }, [pageProps.preview, cms]);

  // Don't show edit options when in production mode
  if (process.env.STAGE === 'production') {
    return (
      <TinaProvider cms={cms}>
        <Component {...pageProps} />
      </TinaProvider>
    );
  } else {
    return (
      <TinaProvider cms={cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          error={pageProps.error}
        >
          <EditLink cms={cms} />
          <Component {...pageProps} />
        </TinacmsGithubProvider>
      </TinaProvider>
    );
  }
};

const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null;
  const headers = new Headers();

  if (token) {
    headers.append('Authorization', 'Bearer ' + token);
  }

  const resp = await fetch(`/api/preview`, { headers: headers });
  const data = await resp.json();

  if (resp.status == 200) window.location.href = window.location.pathname;
  else throw new Error(data.message);
};

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload();
  });
};

export interface EditLinkProps {
  cms: TinaCMS;
}

export const EditLink = ({ cms }: EditLinkProps) => {
  return (
    <div className="toolbar">
      <button onClick={() => cms.toggle()}>
        {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
      </button>

      <style jsx>
        {`
          .toolbar {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Site;
