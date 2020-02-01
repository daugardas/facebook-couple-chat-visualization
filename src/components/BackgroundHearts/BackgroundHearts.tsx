import * as React from 'react';
import { StyledHeart as Heart } from './Heart';
import styled, { keyframes } from 'styled-components';
import { Random } from 'random-js';

const random = new Random();

interface BackgrounHeatrsProps {
  className?: string;
};

class BackgroundHearts extends React.Component<BackgrounHeatrsProps> {

  render() {
    const hearts = [];
    for (let i = 0; i < 100; i++) {
      hearts.push(<Heart key={i} delay={`${random.integer(0, 30)}s`} speed={`${random.integer(15, 40)}s`} size={`${random.integer(20, 70)}px`} left={`${random.integer(0, 100)}%`} />);
    }
    return (
      <div className={this.props.className}>
        {hearts}
      </div>
    );
  }
}

const backgroundChange = keyframes`
  0% {background: white;}
  10% {background: space;}
  20% {background: snow;}
  30% {background: lavender;}
  40% {background: aliceblue;}
  50% {background: powderblue;}
  60% {background: antiquewhite;}
  70% {background: peachpuff;}
  80% {background: papayawhip;}
  90% {background: moccasin;}
  100% {background: white;}
`;

export default styled(BackgroundHearts)`
  display: block;
  width: 100%;
  height: 100%;
  z-index: -999;
  overflow: hidden;
  position: fixed;
  background: white;
  animation: ${backgroundChange} 30s infinite;
`;