import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../Header';

import 'normalize.css';
import './global.css';

const VCenter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0 32px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const TemplateWrapper = ({ children }) => (
  <VCenter>
    <Helmet
      title="Felix Haus"
      meta={[
        {
          name: 'description',
          content: 'Digital product designer living in Kassel, Germany.',
        },
        {
          name: 'keywords',
          content: 'Felix Haus, frontend developer, designer',
        },
      ]}
    />
    <Flex>
      <Header />
      <div>{children}</div>
    </Flex>
  </VCenter>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node,
};

export default TemplateWrapper;
