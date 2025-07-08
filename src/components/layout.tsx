import type { JSX } from 'react';

export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      {children}
      <style jsx global>
        {`
          html,
          body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  );
};
