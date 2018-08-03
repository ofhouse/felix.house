import React from 'react';

import Layout from '../components/Layout';
import List from '../components/List';

const IndexPage = () => (
  <Layout>
    <List>
      <List.Item>
        <a href="https://twitter.com/ofhouse" rel="noopener" target="__blank">
          Twitter
        </a>
      </List.Item>
      <List.Item>
        <a
          href="https://www.xing.com/profile/Felix_Haus2"
          rel="noopener"
          target="__blank"
        >
          Xing
        </a>
      </List.Item>
      <List.Item>
        <a
          href="https://www.linkedin.com/in/felixhaus"
          rel="noopener"
          target="__blank"
        >
          LinkedIn
        </a>
      </List.Item>
    </List>
  </Layout>
);

export default IndexPage;
