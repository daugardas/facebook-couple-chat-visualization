import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { startUploadingFiles } from '../../store/actions/ChatData';
import { Chat, Chats } from '../../store/types/ChatData';
import { proccessData } from '../../services/Data';
import { resetData } from '../../services/Reset';

import Names from './Names';
import Button from './Button';

interface UploadProps {
  className?: string;
  startUploadingFiles?: any;
  chats: Chat[];
};

class Upload extends React.Component<UploadProps> {
  constructor(props: UploadProps) {
    super(props);
    this.inputElement = React.createRef();
  }

  inputElement: any;

  render() {
    const { className, chats } = this.props;

    if (chats[0].participants.length === 0) {
      return (
        <div className={className}>
          <input type="file" ref={this.inputElement} className="file-input" onChange={(e) => this.handleFiles(e)} />
          <Button onClick={this.handleSelectFile} />
          <Names text={{ warn: chats[0].title }} />
        </div>
      );
    } else {
      return (
        <div className={className}>
          <Names text={{ first: chats[0].participants[0].name, second: chats[0].participants[1].name }} />
        </div>
      );
    }
  }

  componentDidMount = () => {
    this.inputElement.current.directory = true;
    this.inputElement.current.webkitdirectory = true;
    if (this.props.chats[0].participants.length) {
      proccessData();
    }
  }

  componentDidUpdate = () => {
    if (this.props.chats[0].participants.length) {
      proccessData();
    }
  }

  handleSelectFile = () => {
    this.inputElement.current.click();
  }

  handleFiles = (e: any) => {
    resetData();
    this.props.startUploadingFiles(e.target.files);
  }
};

const mapStateToProps = (state: any): Chats => { return { chats: state.chatData.chats } };

export default connect(mapStateToProps, { startUploadingFiles })(styled(Upload)`
  display: flex;
  height: max-content;
  box-shadow: ${props => props.theme.mainBoxShadow};
  color: ${props => props.theme.mainColor};
  background-color: ${props => props.theme.mainBackgroundColor};
  align-items: center;
  padding: 20px;

  .file-input {
    display: none;
  }
`);