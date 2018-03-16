export const changeMentorName = value => ({
  type: 'CHANGE_MENTOR_NAME',
  value,
});

export const changeYear = value => ({
  type: 'CHANGE_YEAR',
  value,
});

export const changeMonth = value => ({
  type: 'CHANGE_MONTH',
  value,
});

export const addMentee = value => ({
  type: 'ADD_MENTEE',
  value,
});

export const changeMenteeName = (index, value) => ({
  type: 'CHANGE_MENTEE_NAME',
  index,
  value,
});

export const changeHeldDate = (index, value) => ({
  type: 'CHANGE_HELD_DATE',
  index,
  value,
});

export const changeStartTime = (index, value) => ({
  type: 'CHANGE_START_TIME',
  index,
  value,
});

export const changeUseOfMeetingRoom = index => ({
  type: 'CHANGE_USE_OF_MEETING_ROOM',
  index,
});
