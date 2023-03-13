import React from 'react';

import { Dna } from 'react-loader-spinner';
import { LoadingWrap } from './Loader.styled';

const Loader = () => {
  return (
    <LoadingWrap>
      <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
    </LoadingWrap>
  );
};
export default Loader;
