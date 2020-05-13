import React, { Component } from 'react';
import './App.css';
import Exercise from './Components/Exercise/Exercise';

class App extends Component {
  state = {
    exercises: [
      {key: 1, mon: 'Rest or 4M easy', tue: '4M steady with a few strides', wed: '4M easy', thu: '5M - run to a hill, then 8 x 30 secs uphill, jog down', fri: 'Rest', sat: '5M steady, cross-country or parkrun', sun: '9M slow'},
      {key: 2, mon: 'Rest or 4M easy', tue: '5M - warm up, then 3M at a brisk pace, timed. Warm down.', wed: '5M steady', thu: '5M - warm up, then 8 x 90 secs fast, 90 secs slow', fri: 'Rest', sat: '5M steady, cross-country or parkrun' , sun: '11M slow'},
      {key: 3, mon: 'Rest or 4M easy', tue: '5M - run to a hill, then 8 x 30 secs uphill, jogging back down', wed: '6M easy', thu: '5M - warm up, then 5 x 3 mins fast, 2 mins slow (or 5 x 800m on track, with 400m jog recoveries)', fri: 'Rest', sat: '5M steady, cross-country or parkrun', sun: '13M slow'},
      {key: 4, mon: 'Rest or 4M easy', tue: '6M - warm up, then 3M at a brisk pace, timed. Warm down.', wed: '7M easy', thu: '6M - warm up, then 3 x 6 mins (or mile on track) with 2 min recoveries.', fri: 'Rest', sat: '5M easy', sun: '15M slow with 5M in middle at marathon pace'},
      {key: 5, mon: 'Rest or 4M easy', tue: '6M - run to a hill, then 10 x 30 secs uphill, jogging back down', wed: '8M easy', thu: '	6M - warm up, then 9 x 90 secs fast (or 400m) with 90 secs (or 200m) slow', fri: 'Rest', sat: '4M jog with strides', sun: 'Half-marathon or 10k race or timetrial'},
      {key: 6, mon: 'Rest or 4M easy', tue: '6M easy', wed: '9M steady', thu: '6M - warm up, then 6 x 3 mins fast, 2 mins slow (or 6 x 800m on track, with 400m jog recoveries)', fri: 'Rest', sat: '5M easy', sun: '17M slow with 5M in middle at marathon pace'},
      {key: 7, mon: 'Rest or 4M easy', tue: '6M - hill running: 11 x 30 secs, or fartlek with 12-15 30-sec bursts', wed: '6M easy', thu: '7M - warm up, then 4 x 6 mins (or mile) with 2 mins rest between each. Time them.', fri: 'Rest', sat: '4M slow', sun: '	20M slow'},
      {key: 8, mon: 'Rest or 4M easy', tue: '6M easy', wed: '7M steady', thu: '6M fartlek, inc bursts of 200-400m', fri: 'Rest', sat: '4M jog with strides', sun: 'Half-marathon race or timetrial'},
      {key: 9, mon: 'Rest or 4M easy', tue: '6M fartlek, inc sustained bursts of up to 400m', wed: '8M steady - start slowly, finish fast', thu: '6M - warm up, then 10 x 90 secs fast (or 400m) with 90 secs (or 200m) slow', fri: 'Rest', sat: '4M easy with strides or parkrun', sun: '20M slow'},
      {key: 10, mon: 'Rest or 4M easy', tue: '7M steady, starting slowly', wed: '9M steady', thu: '7M - warm up, then 7 x 3 mins fast, 2 mins slow (or 7 x 800m on track, with 400m jog recoveries)', fri: 'Rest', sat: '4M easy', sun: '15M steady, including 5M at marathon pace'},
      {key: 11, mon: 'Rest or 4M easy', tue: '6M - hill running, 12 x 30 secs', wed: '10M steady - start slowly, finish fast', thu: '7M - warm up, then 5 x 6 mins (or mile) with 2 mins rest between each.', fri: 'Rest', sat: '4M easy, with a few strides or parkrun', sun: '20M slow'},
      {key: 12, mon: 'Rest or 4M easy', tue: '6M fartlek, inc sustained bursts of up to 400m', wed: '9M steady', thu: '7M - warm up, then 18 x 45 secs fast (or 200m), with 60 secs (or 200m) slow', fri: 'Rest', sat: '4M easy, with a few strides or parkrun', sun: '17M easy with 5M at marathon pace'},
      {key: 13, mon: 'Rest or 4M easy', tue: '6M - hill running, 12 x 30 secs', wed: '8M steady', thu: '6M - warm up, then 12 x 90 secs fast (or 400m), with 90 secs (or 200m) slow)', fri: 'Rest', sat: '4M easy', sun: '21M slow'},
      {key: 14, mon: 'Rest or 4M easy', tue: '6M fartlek, inc sustained bursts of up to 400m', wed: '7M easy', thu: '6M - warm up, then 5 x 3 mins fast, 2 mins slow (or 5 x 800m on track, with 400m jog recoveries)', fri: 'Rest', sat: '4M easy, with a few strides or parkrun', sun: '15M steady, or half-marathon race'},
      {key: 15, mon: 'Rest or 4M easy', tue: '5M - hill running, 10 x 30 secs', wed: '6M steady', thu: '5M with middle 3M at marathon pace', fri: 'Rest', sat: '4M easy, with a few strides or parkrun', sun: '10M steady'},
      {key: 16, mon: 'Rest', tue: '4M - warm up, then 1M at race pace plus 5 x 200m. Warm down', wed: '4M easy, with a few strides', thu: '3M easy', fri: 'Rest', sat: '2M easy, with easy strides', sun: 'Race Day!'}
    ],
    week: 0
  }

  updateWeekHandler = () => {
    let newWeek = this.state.week + 1;
    this.setState({week: newWeek})
  }

  render() {

    return (
      <div className="App">
        <h1>Let's run a marathon.</h1>
        <button onClick={this.updateWeekHandler}>Click</button>
        <Exercise
          week={this.state.exercises[this.state.week].key}
          mon={this.state.exercises[this.state.week].mon}
          tue={this.state.exercises[this.state.week].tue}
          wed={this.state.exercises[this.state.week].wed}
          thu={this.state.exercises[this.state.week].thu}
          fri={this.state.exercises[this.state.week].fri}
          sat={this.state.exercises[this.state.week].sat}
          sun={this.state.exercises[this.state.week].sun}/>
      </div>
    );
  }
}

export default App;
