import React from 'react';
import './NumberCurveDemo.scss';
import { Curve, EndBehavior, NumberKeyframe } from 'curves';
import CurveDemo from '../CurveDemo/CurveDemo';
import NumberKeyframeValueInput from './NumberKeyframeValueInput/NumberKeyframeValueInput';

function NumberCurveDemo(): React.ReactElement {
  return (
    <CurveDemo<number>
      title="Number Curve Demo"
      description="A curve constructed using NumberKeyframes that can be used to animate numeric values."
      curve={Curve.floatBuilder(0, 1, 10)}
      valueInput={NumberKeyframeValueInput}
      displayGenerator={
          (curve: Curve<number>, keys: { x: number, y: number }[]) => ({
            animationEnabled: true,
            theme: 'light2',
            title: {
              text: 'Curve Test',
            },
            axisY: {
              title: 'Value',
              includeZero: false,
            },
            axisX: {
              title: 'Time',
              interval: 1,
            },
            data: [
              {
                type: 'spline',
                toolTipContent: 'Time {x}: {y}',
                dataPoints: keys.map((key) => ({
                  x: key.x,
                  y: key.y,
                  markerType: 'none',
                })),
              },
              {
                type: 'scatter',
                toolTipContent: 'Time {x}: {y}',
                dataPoints: curve.keys.map((key) => ({
                  x: key.time,
                  y: key.value,
                  color: 'lightblue',
                  markerType: 'circle',
                })),
              },
            ],
          })
      }
    />
  );
}

export default NumberCurveDemo;
