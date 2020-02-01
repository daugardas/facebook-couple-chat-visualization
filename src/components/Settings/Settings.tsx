import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  children?: React.ReactNode;
};

const Settings = (props: Props) => (
  <div className={props.className}>{props.children}</div>
);

export default styled(Settings)`
  display: flex;
  margin: 10px;
`;