const menteeInfo = {
  menteeNum: 0,
  menteeName: '',
  heldDateTime: '',
  useOfMeetingRoom: true,
};

const initialState = {
  mentorName: '',
  heldYear: new Date().getFullYear(),
  heldMonth: new Date().getMonth() + 1,
  menteeInfoList: [
    menteeInfo,
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_MENTOR_NAME': {
      return Object.assign({}, state, {
        mentorName: action.value,
      });
    }
    case 'CHANGE_YEAR': {
      return Object.assign({}, state, {
        heldYear: action.value,
      });
    }
    case 'CHANGE_MONTH': {
      return Object.assign({}, state, {
        heldMonth: action.value,
      });
    }
    case 'ADD_MENTEE': {
      const newMenteeList = state.menteeInfoList.concat();
      const newMentee = Object.assign({}, {
        menteeNum: 0,
        menteeName: '',
        heldDateTime: '',
        useOfMeetingRoom: true,
      });
      newMentee.menteeNum = state.menteeInfoList[state.menteeInfoList.length - 1].menteeNum + 1;
      newMenteeList.push(newMentee);
      return Object.assign({}, state, {
        menteeInfoList: newMenteeList,
      });
    }
    case 'CHANGE_MENTEE_NAME': {
      const newMenteeList = state.menteeInfoList.concat();
      const changeMentee = newMenteeList[action.index];
      changeMentee.menteeName = action.value;
      return Object.assign({}, state, {
        menteeInfoList: newMenteeList,
      });
    }
    case 'CHANGE_HELD_DATE': {
      const newMenteeList = state.menteeInfoList.concat();
      const changeMentee = newMenteeList[action.index];
      if (changeMentee.heldDateTime === '') {
        changeMentee.heldDateTime = action.value;
        changeMentee.heldDateTime.setHours(20, 0);
      } else {
        changeMentee.heldDateTime = new Date(changeMentee.heldDateTime);
        changeMentee.heldDateTime.setMonth(action.value.getMonth(), action.value.getDate());
      }
      changeMentee.heldDateTime = changeMentee.heldDateTime.toISOString();
      return Object.assign({}, state, {
        menteeInfoList: newMenteeList,
      });
    }
    case 'CHANGE_START_TIME': {
      const newMenteeList = state.menteeInfoList.concat();
      const changeMentee = newMenteeList[action.index];
      if (changeMentee.heldDateTime === '') {
        changeMentee.heldDateTime = action.value;
      } else {
        changeMentee.heldDateTime = new Date(changeMentee.heldDateTime);
        changeMentee.heldDateTime.setHours(action.value.getHours(), action.value.getMinutes());
      }
      changeMentee.heldDateTime = changeMentee.heldDateTime.toISOString();
      return Object.assign({}, state, {
        menteeInfoList: newMenteeList,
      });
    }
    case 'CHANGE_USE_OF_MEETING_ROOM': {
      const newMenteeList = state.menteeInfoList.concat();
      const changeMentee = newMenteeList[action.index];
      changeMentee.useOfMeetingRoom = !changeMentee.useOfMeetingRoom;
      return Object.assign({}, state, {
        menteeInfoList: newMenteeList,
      });
    }
    default: {
      return state;
    }
  }
};

