import * as React from 'react';

export const Layout: React.FC = ({ children }) => {
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
