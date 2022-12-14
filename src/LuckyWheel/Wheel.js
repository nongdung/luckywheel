import React from 'react';

import WheelComponent from './WheelComponent';
// import 'react-wheel-of-prizes/dist/index.css';

const Wheel = ({ width, onFinished }) => {
  const segments = [
    'better luck next time',
    'won 70',
    'won 10',
    'better luck next time',
    'won 2',
    'won uber pass',
    'better luck next time',
    'won a voucher'
  ];
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000'
  ];
  // const onFinished = (winner) => {
  //   console.log(winner);
  // };
  return (
    <WheelComponent
      segments={segments}
      segColors={segColors}
      winningSegment='won 10'
      onFinished={(winner) => onFinished(winner)}
      primaryColor='black'
      contrastColor='white'
      buttonText='Quay'
      isOnlyOnce={true}
      size={width < 500 ? width/2 - 40 : 260}
      upDuration={300}
      downDuration={1000}
      fontFamily='Arial'
      width={width}
    />
  );
}

export default Wheel;
