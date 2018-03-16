import React from 'react';
import PropTypes from 'prop-types';
import ScheduleForm from './schedule_form';

export default class ScheduleFormList extends React.Component {
  render() {
    const { menteeInfoList } = this.props;
    return menteeInfoList.map(menteeInfo => (
      <ScheduleForm
        menteeInfo={menteeInfo}
        changeMenteeName={this.props.changeMenteeName}
        changeHeldDate={this.props.changeHeldDate}
        changeStartTime={this.props.changeStartTime}
        changeUseOfMeetingRoom={this.props.changeUseOfMeetingRoom}
        key={menteeInfo.menteeNum}
      />
    ));
  }
}

ScheduleFormList.propTypes = {
  menteeInfoList: PropTypes.arrayOf(PropTypes.shape({
    menteeName: PropTypes.string,
    menteeNum: PropTypes.number,
    heldDateTime: PropTypes.string,
    useOfMeetingRoom: PropTypes.bool,
  })).isRequired,
  changeMenteeName: PropTypes.func.isRequired,
  changeHeldDate: PropTypes.func.isRequired,
  changeStartTime: PropTypes.func.isRequired,
  changeUseOfMeetingRoom: PropTypes.func.isRequired,
};

