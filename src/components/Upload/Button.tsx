import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  onClick: any;
};

const Button = (props: Props) => (
  <button type="button" className={props.className} onClick={props.onClick}>Upload</button>
);

export default styled(Button)`
  display:flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.mainBackgroundColor};
  background-color: ${props => props.theme.mainColor };
  box-shadow: none;
  border: none;
  font-weight: ${props => props.theme.menuFontWeight};
  border-radius: 5%;
  font-size: 14px;
  width: 70px;
  height: 30px;
  
  &:hover {
    background-color: ${props => props.theme.hoverMainColor};
    cursor: pointer;
  }
`;