import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton, FlatButton, Dialog } from 'material-ui';
import dateFormat from 'dateformat';

export default class MailFormat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    if (!this.props.menteeInfoList[0].heldDateTime) {
      return (
        <div>1 on 1情報を入力してください</div>
      );
    }

    const actions = [
      <FlatButton
        label="close"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Save"
        primary
        onClick={this.handleSave}
      />,
    ];

    const title = `【共有】1on1面談_${this.props.heldMonth}月(${this.props.mentorName})`;

    const calender = this.props.menteeInfoList.map((menteeInfo) => {
      return (
        <div key={menteeInfo.menteeNum}>
          <p>──────────────</p>
          <p>日時      :  {dateFormat(menteeInfo.heldDateTime, 'mm/dd HH:MM〜')}</p>
          <p>メンター  :  {this.props.mentorName}</p>
          <p>メンティー:  {menteeInfo.menteeName}</p>
          <p>会議室    :  {menteeInfo.useOfMeetingRoom ? '要' : '不要' } </p>
        </div>
      );
    });

    const format = (
      <div>
        <p>森さん</p>
        <br />
        <p>お疲れ様です。{this.props.mentorName}です。</p>
        <p>以下の日程で1 on 1を実施しますのでご確認ください。</p>
        <br />
        {calender}
        <p>──────────────</p>
        <p>以上です。よろしくお願いします。</p>
        <br />
        <p>{this.props.mentorName}</p>
      </div>
    );

    return (
      <div>
        <RaisedButton
          label="Generate Mail"
          onClick={this.handleOpen}
          primary
        />
        <Dialog
          title={title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          {format}
        </Dialog >
      </div >
    );
  }
}

