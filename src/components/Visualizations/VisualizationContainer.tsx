import * as React from 'react';
import styled from 'styled-components';


interface Props {
  className?: string;
  children: any;
};

class VisualizationContainer extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }

}

export default styled(VisualizationContainer)`
  display: flex;
  width: 1240px;
  z-index: 0;
  background: white;
  padding: 20px;
  margin: 10px;
  border-radius: 1%;
  box-shadow: ${props => props.theme.mainBoxShadow};
  flex-direction: column;
  color: ${props => props.theme.mainColor};
`;