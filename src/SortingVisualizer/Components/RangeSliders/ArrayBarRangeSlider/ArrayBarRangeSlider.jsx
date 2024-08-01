import React, { Component } from 'react';
import styled from '@emotion/styled'; // Correct import for styled
import Slider from '@mui/material/Slider';

// Define styled Slider using Emotion
const CustomSlider = styled(Slider)`
  color: rgba(100, 180, 255, 1);
  padding: 10px;
  .MuiSlider-thumb {
    height: 12px;
    width: 12px;
    background-color: #fff;
    border: 2px solid cyan;
    margin-top: -4px;
  }
  .MuiSlider-track {
    height: 4px;
    border-radius: 4px;
  }
  .MuiSlider-rail {
    height: 4px;
    border-radius: 4px;
  }
`;

export default class ArrayBarRangeSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfArrayBars: this.props.numberOfArrayBars,
    };
  }

  render() {
    return (
      <div className="range-slider-container">
        <p id="text-array-size">Array Size</p>
        <CustomSlider
          min={2}
          max={14}
          step={1}
          defaultValue={this.state.numberOfArrayBars}
          valueLabelDisplay="auto"
          marks
          onChangeCommitted={this.props.onChangeArrayBarRangeSlider}
        />
      </div>
    );
  }
}
