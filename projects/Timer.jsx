import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
moment.local = 'ko';
//moment.relativeTimeThreshold('m', 1440); // 24시간 이내는 분으로 나타내도록

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
        <div>{moment(this.props.expireDate).fromNow()} 에 종료 합니다. </div>
      </div>
    );
  }
}

export default Timer;
