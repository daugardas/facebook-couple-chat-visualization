import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  children: any;
};

class Visualization extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }

}

export default styled(Visualization)`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex: 1 1 auto;
  margin: 35px 0;
`;