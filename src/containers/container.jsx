import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AppBar } from 'material-ui';
import MentorInfoField from '../components/mentor_info_field';
import ScheduleFormList from '../components/schedule_form_list';
import AddMenteeBtn from '../components/add_mentee_btn';
import MailFormat from '../components/mail_format';
import {
  changeMentorName,
  changeYear,
  changeMonth,
  addMentee,
  changeMenteeName,
  changeHeldDate,
  changeStartTime,
  changeUseOfMeetingRoom,
} from '../actions/actions';

const OneOnOneGenerator = props => (
  <div>
    <AppBar
      title="1 on 1 Generator"
      showMenuIconButton={false}
    />
    <MentorInfoField
      mentorName={props.mentorName}
      heldYear={props.heldYear}
      heldMonth={props.heldMonth}
      changeMentorName={props.changeMentorName}
      changeYear={props.changeYear}
      changeMonth={props.changeMonth}
    />
    <ScheduleFormList
      menteeInfoList={props.menteeInfoList}
      changeMenteeName={props.changeMenteeName}
      changeHeldDate={props.changeHeldDate}
      changeStartTime={props.changeStartTime}
      changeUseOfMeetingRoom={props.changeUseOfMeetingRoom}
    />
    <AddMenteeBtn
      addMentee={props.addMentee}
    />
    <MailFormat
      mentorName={props.mentorName}
      heldYear={props.heldYear}
      heldMonth={props.heldMonth}
      menteeInfoList={props.menteeInfoList}
    />
  </div>
);

const mapStateToProps = state => ({
  mentorName: state.mentorName,
  heldYear: state.heldYear,
  heldMonth: state.heldMonth,
  menteeInfoList: state.menteeInfoList,
});

const mapDispatchToProps = dispatch => ({
  changeMentorName(value) {
    dispatch(changeMentorName(value));
  },
  changeYear(value) {
    dispatch(changeYear(value));
  },
  changeMonth(value) {
    dispatch(changeMonth(value));
  },
  addMentee(value) {
    dispatch(addMentee(value));
  },
  changeMenteeName(index, value) {
    dispatch(changeMenteeName(index, value));
  },
  changeHeldDate(index, value) {
    dispatch(changeHeldDate(index, value));
  },
  changeStartTime(index, value) {
    dispatch(changeStartTime(index, value));
  },
  changeUseOfMeetingRoom(index) {
    dispatch(changeUseOfMeetingRoom(index));
  },
});

OneOnOneGenerator.propTypes = {
  mentorName: PropTypes.string.isRequired,
  heldYear: PropTypes.number.isRequired,
  heldMonth: PropTypes.number.isRequired,
  menteeInfoList: PropTypes.arrayOf(PropTypes.shape({
    menteeName: PropTypes.string,
    menteeNum: PropTypes.number,
    heldDateTime: PropTypes.string,
    useOfMeetingRoom: PropTypes.bool,
  })).isRequired,
  changeMentorName: PropTypes.func.isRequired,
  changeYear: PropTypes.func.isRequired,
  changeMonth: PropTypes.func.isRequired,
  addMentee: PropTypes.func.isRequired,
  changeMenteeName: PropTypes.func.isRequired,
  changeHeldDate: PropTypes.func.isRequired,
  changeStartTime: PropTypes.func.isRequired,
  changeUseOfMeetingRoom: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OneOnOneGenerator);

