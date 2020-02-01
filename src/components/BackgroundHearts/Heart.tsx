import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';

interface HeartProps {
  className?: string;
  size: string;
  left: string;
  delay: string;
  speed: string;
}

class Heart extends React.Component<HeartProps> {
  render() {
    return (
      <FontAwesomeIcon icon={faHeart} className={this.props.className} size="3x" />
    );
  }
}

const moveY = keyframes`
  from {
    bottom: -10%;
  }
  to {
    bottom: 110%;
  }
`;

export const StyledHeart = styled(Heart)`
  display: block;
  position: absolute;
  left: ${props => props.left};
  bottom: -10%;
  translate: -50%;
  color: ${props => props.theme.mainColor};
  font-size: ${props => props.size};
  animation: ${moveY} ${props => props.speed} linear infinite;
  animation-delay: ${props => props.delay};
`;