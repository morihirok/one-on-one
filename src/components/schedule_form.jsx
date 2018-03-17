import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { TextField, DatePicker, TimePicker, Checkbox } from 'material-ui';

export default class ScheduleForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeUse = this.handleChangeUse.bind(this);
  }

  handleChangeName(_event, value) {
    this.props.changeMenteeName(this.props.menteeInfo.menteeNum, value);
  }

  handleChangeDate(_, value) {
    this.props.changeHeldDate(this.props.menteeInfo.menteeNum, value);
  }

  handleChangeTime(_, value) {
    this.props.changeStartTime(this.props.menteeInfo.menteeNum, value);
  }

  handleChangeUse() {
    this.props.changeUseOfMeetingRoom(this.props.menteeInfo.menteeNum);
  }

  render() {
    let title = 'メンティーの情報を入力してください';

    let heldDateTime = {};
    if (this.props.menteeInfo.heldDateTime) {
      heldDateTime = new Date(this.props.menteeInfo.heldDateTime);
    }

    if (this.props.menteeInfo.menteeName) {
      if (heldDateTime instanceof Date) {
        const displayDateTime = heldDateTime.toLocaleString();
        title = `${this.props.menteeInfo.menteeName} ${displayDateTime}`;
      } else {
        title = `${this.props.menteeInfo.menteeName}`;
      }
    }

    return (
      <Card>
        <CardHeader
          title={title}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable >
          <TextField
            floatingLabelText="メンティー名"
            defaultValue={this.props.menteeInfo.menteeName}
            onChange={this.handleChangeName}
          />
          <DatePicker
            floatingLabelText="実施日"
            onChange={this.handleChangeDate}
            value={heldDateTime}
            disableYearSelection
          />
          <TimePicker
            floatingLabelText="開始時間"
            minutesStep={30}
            onChange={this.handleChangeTime}
            value={heldDateTime}
          />
          <Checkbox
            label="会議室を使用"
            checked={this.props.menteeInfo.useOfMeetingRoom}
            onCheck={this.handleChangeUse}
          />
        </CardText>
      </Card>
    );
  }
}

ScheduleForm.propTypes = {
  changeMenteeName: PropTypes.func.isRequired,
  changeHeldDate: PropTypes.func.isRequired,
  changeStartTime: PropTypes.func.isRequired,
  changeUseOfMeetingRoom: PropTypes.func.isRequired,
  menteeInfo: PropTypes.shape({
    menteeName: PropTypes.string,
    menteeNum: PropTypes.number,
    heldDateTime: PropTypes.string,
    useOfMeetingRoom: PropTypes.bool,
  }).isRequired,
};

