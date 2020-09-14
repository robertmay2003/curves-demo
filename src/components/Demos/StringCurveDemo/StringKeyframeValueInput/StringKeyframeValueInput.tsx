import React from 'react';
import { Form } from 'react-bootstrap';
import { KeyframeValueInputProps } from '../../CurveDemo/CurveEditor/KeyframeEditor/KeyframeValueInput/KeyframeValueInput';

function StringKeyframeValueInput(props: KeyframeValueInputProps<string>) {
  return (
    <Form.Control
      type="string"
      defaultValue={props.defaultValue}
      onChange={(e) => {
        props.onChange(e.target.value.toString());
      }}
    />
  );
}

export default StringKeyframeValueInput;
