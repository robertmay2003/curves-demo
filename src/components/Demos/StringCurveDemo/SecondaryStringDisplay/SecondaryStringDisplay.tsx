import React, { useEffect, useState } from 'react';
import './SecondaryStringDisplay.scss';
import Slider from '@material-ui/core/Slider';
import { Curve, Modifiers } from 'curves';

interface SecondaryStringDisplay {
    curve: Curve<string>;
    steps?: number;
}

function SecondaryStringDisplay(props: SecondaryStringDisplay): React.ReactElement {
  const [time, setTime] = useState(0);
  const duration = (props.curve.duration + props.curve.startTime);
  const stepTime = duration / (props.steps ?? 50);

  const handleChange = (event: any, newValue: number | number[]) => {
    setTime(newValue as number);
  };

  return (
    <div className="string-container">
      <div className="curve-string">
        {props.curve.evaluate(time)}
      </div>
      <div className="time-slider-container">
        <h5>Adjust Time</h5>
        <br />
        <Slider
          defaultValue={0}
          onChange={handleChange}
          step={stepTime}
          min={props.curve.startTime}
          max={props.curve.endTime}
          marks={props.curve.keys.map((key) => ({
            value: key.time,
            label: key.value,
          }))}
        />
      </div>
    </div>
  );
}

export default SecondaryStringDisplay;
