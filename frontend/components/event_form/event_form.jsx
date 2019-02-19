import React from 'react';
import { withRouter } from 'react-router';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    const { location } = this.props;
    const name = new URLSearchParams(location.search).get('name') || '';
    const date = new URLSearchParams(location.search).get('date') || '';
    const address = new URLSearchParams(location.search).get('address') || '';
    const description = new URLSearchParams(location.search).get('description') || '';
    const start_time = new URLSearchParams(location.search).get('start_time') || '';
    const event_repeat = new URLSearchParams(location.search).get('event_repeat') || '';
    const weekly_interval = new URLSearchParams(location.search).get('weekly_interval') || '';
    const weekly_day_of_week = new URLSearchParams(location.search).get('weekly_day_of_week') || '';
    const monthly_day_of_week = new URLSearchParams(location.search).get('monthly_day_of_week') || '';
    const week_of_month = new URLSearchParams(location.search).get('week_of_month') || '';

    
    this.state = {
      name,
      date,
      address,
      description,
      start_time,
      event_repeat,
      weekly_interval,
      weekly_day_of_week,
      monthly_day_of_week,
      week_of_month,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('event[name]', this.state.name);
    formData.append('schedule[date]', this.state.name);
    formData.append('event[address]', this.state.address);
    formData.append('event[description]', this.state.description);
    formData.append('schedule[start_time]', this.state.start_time);
    formData.append('schedule[event_repeat]', this.state.event_repeat);
    formData.append('schedule[weekly_interval]', this.state.weekly_interval);
    formData.append('schedule[weekly_day_of_week]', this.state.weekly_day_of_week);
    formData.append('schedule[monthly_day_of_week]', this.state.monthly_day_of_week);
    formData.append('schedule[week_of_month]', this.state.week_of_month);

    this.props.submit(formData).then((resp) => {
      const eventId = resp.event.id
      this.props.history.push(`/clubs/${this.props.clubId}/events/${eventId}`);
    });
  }

  render() {
    const { 
      name,
      date,
      address,
      description,
      start_time,
      event_repeat,
      weekly_interval,
      weekly_day_of_week,
      monthly_day_of_week,
      week_of_month,
    } = this.state;

    return (
      <div className="new-event-container">
        <div className="new-event-form">
          <h3 className="new-event-title">Event</h3>

          <form onSubmit={this.handleSubmit}>
            <label className="event-field">Name</label>
            <input
              type="text"
              value={name}
              onChange={this.update('name')}
              className="event-field"
            />
            <br/>

            <label className="event-field">Date</label>
            <input
              type="date"
              value={date}
              onChange={this.update('date')}
              className="event-field"
            />
            <br />

            <label className="address-field">Address</label>
            <input
              type="text"
              value={address}
              onChange={this.update('address')}
              className="event-field"
              required
            />
            <br />

            <label className="event-field">Description</label>
            <br/>
            <textarea
              value={description}
              onChange={this.update('description')}
              className="event-field"
            />
            <br />

            <hr />

            <label className="event-field">Start Time</label>
            <input
              type="time"
              value={start_time}
              onChange={this.update('start_time')}
              className="event-field"
            />
            <br />

            <label className="event-field">How often does this event repeat?</label>
            <select 
              onChange={this.update('event_repeat')}
              defaultValue={event_repeat}
            >
              <option value="">Only Once</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <br />

            {this.state.event_repeat === "weekly" && 
              <div>
                <label className="event-field">Repeat Every</label>
                <input
                  type="text"
                  value={weekly_interval}
                  onChange={this.update('weekly_interval')}
                  className="event-field"
                />
                week(s)
                <br />

                <label className="event-field">Day of Week</label>
                <select 
                  onChange={this.update('weekly_day_of_week')}
                  defaultValue={weekly_day_of_week}
                >
                  <option value=""></option>
                  <option value="1">Monday</option>
                  <option value="2">Tuesday</option>
                  <option value="3">Wednesday</option>
                  <option value="4">Thursday</option>
                  <option value="5">Friday</option>
                  <option value="6">Saturday</option>
                  <option value="7">Sunday</option>
                </select>
                <br />
              </div>
            }

            {this.state.event_repeat === "monthly" && 
              <div>
                <label className="event-field">Repeat Every</label>
                <select 
                  onChange={this.update('week_of_month')}
                  defaultValue={week_of_month}
                >
                  <option value=""></option>
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                  <option value="4">4th</option>
                  <option value="-1">Last</option>
                </select>
                Week
                <br/>

                <label className="event-field">Day of Week</label>
                <select 
                  onChange={this.update('monthly_day_of_week')}
                  defaultValue={monthly_day_of_week}
                >
                  <option value=""></option>
                  <option value="1">Monday</option>
                  <option value="2">Tuesday</option>
                  <option value="3">Wednesday</option>
                  <option value="4">Thursday</option>
                  <option value="5">Friday</option>
                  <option value="6">Saturday</option>
                  <option value="0">Sunday</option>
                </select>
                <br />
              </div>
            }

            <hr />

            <div className="button-holder">
              <input
                type="submit"
                value="Submit"
                className="new-event-button"
              />
            </div>
          </form>

          <div className="button-holder">
            <button
              className="new-event-button"
              onClick={this.props.history.goBack}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EventForm);
