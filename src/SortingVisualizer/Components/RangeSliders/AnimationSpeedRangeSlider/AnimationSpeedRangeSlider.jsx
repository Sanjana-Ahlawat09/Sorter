import React, { Component } from 'react';
import  styled  from '@emotion/styled'; // Import styled from Emotion
import Slider from '@mui/material/Slider'; // Import Material-UI Slider

// Define styled Slider using Emotion
const CustomSlider = styled(Slider)`
  color: rgba(100, 180, 255, 1);
  padding: 10px;
  & .MuiSlider-thumb {
    height: 12px;
    width: 12px;
    background-color: #fff;
    border: 2px solid cyan;
    margin-top: -4px;
  }
  & .MuiSlider-track {
    height: 4px;
    border-radius: 4px;
  }
  & .MuiSlider-rail {
    height: 4px;
    border-radius: 4px;
  }
`;

export default class AnimationSpeedRangeSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationSpeed: this.props.animationSpeed,
    };
  }

  render() {
    return (
      <div className="range-slider-container">
        <p id="text-animation-speed">Animation Speed (ms)</p>
        <CustomSlider
          id="animationSpeedSlider"
          min={10}
          max={200}
          defaultValue={this.state.animationSpeed}
          valueLabelDisplay="auto"
          onChangeCommitted={this.props.onChangeAnimationSpeedRangeSlider}
        />
      </div>
    );
  }
}
