import React from "react";
import PropTypes from "prop-types";
// styles
import { Wrapper } from "./Button.styles";

export default function Button({ text, callback }) {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};
