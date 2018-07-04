import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
moment.local = 'ko';
//moment.relativeTimeThreshold('m', 1440); // 24시간 이내는 분으로 나타내도록

const TIME_FORMAT = 'YYYYMMDD hh:mm'; //file scope 을 가질 수 있도록 wrapping 함

class Timer extends Component {
  constructor(props) {
    //console.log(this.props); // this 없음
    super(props);

    console.log(this.props); // this 생성됨
    this.state = {
      date: moment(),
    };

    this.nTimer = setInterval(() => {
      this.setState({
        date: moment(),
      }); // forceUpdate 하지 않더라도 무조건 다시 Rendering을 함
    }, 1000);
  }

  /*
  handleTick = () => {
    console.log(1);
    this.forceUpdate();
  };
  */

  shouldComponentUpdate(nextprops, nextState) {
    if (moment(this.props.expireDate) > this.state.date) {
      const prevDateStr = this.state.date.format(TIME_FORMAT);
      const nextDateStr = nextState.date.format(TIME_FORMAT);

      return prevDateStr < nextDateStr;
    } else return false;
  }

  render() {
    console.log('render!');
    const { expireDate } = this.props;
    const { date } = this.state;
    if (moment(expireDate) < date) {
      return <div>종료되었습니다.</div>;
    }

    return (
      <div>
        <div>현재시간은 :{moment().format(TIME_FORMAT)} </div>
        <div>{moment(expireDate).fromNow()} 에 종료 합니다. </div>
      </div>
    );
  }
}

export default Timer;
