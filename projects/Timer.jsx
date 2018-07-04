import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
moment.local = 'ko';

class Timer extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   date: moment(),
    // };

    this.nTimer = setInterval(this.handleTick, 1000);
  }

  handleTick = () => {
    console.log(1);

    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <div>현재시간은 :{moment().format('YYYY-MM-DD A hh:mm:ss')} </div>
        <div>{moment('2018-07-04T17:00:00+0900').fromNow()} 에 종료 합니다. </div>
      </div>
    );
  }
}

export default Timer;
