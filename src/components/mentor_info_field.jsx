import React from 'react';
import PropTypes from 'prop-types';
import { TextField, SelectField, MenuItem } from 'material-ui';

const months = [];
for (let i = 1; i <= 12; i += 1) {
  months.push(<MenuItem value={i} key={i} primaryText={`${i}月`} />);
}

const years = [];
for (let i = 2018; i <= 2020; i += 1) {
  years.push(<MenuItem value={i} key={i} primaryText={`${i}年`} />);
}

export default class MonthSelectField extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
  }

  handleChangeName(_event, value) {
    this.props.changeMentorName(value);
  }

  handleChangeYear(_event, _index, value) {
    this.props.changeYear(value);
  }

  handleChangeMonth(_event, _index, value) {
    this.props.changeMonth(value);
  }

  render() {
    return (
      <div>
        <TextField
          floatingLabelText="あなたの名前"
          defaultValue={this.props.mentorName}
          onChange={this.handleChangeName}
        />
        <div>
          <SelectField
            value={this.props.heldYear}
            floatingLabelText="実施年"
            maxHeight={200}
            onChange={this.handleChangeYear}
          >
            {years}
          </SelectField>
          <SelectField
            value={this.props.heldMonth}
            floatingLabelText="実施月"
            maxHeight={200}
            onChange={this.handleChangeMonth}
          >
            {months}
          </SelectField>
        </div>
      </div>
    );
  }
}

MonthSelectField.propTypes = {
  mentorName: PropTypes.string.isRequired,
  heldYear: PropTypes.number.isRequired,
  heldMonth: PropTypes.number.isRequired,
  changeMentorName: PropTypes.func.isRequired,
  changeYear: PropTypes.func.isRequired,
  changeMonth: PropTypes.func.isRequired,
};

