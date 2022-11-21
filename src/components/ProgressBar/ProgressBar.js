/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    "--progressbarHeight": "8px",
    "--contentHeight": "8px",
    "--borderRadius": "4px",
  },
  medium: {
    "--progressbarHeight": "12px",
    "--contentHeight": "12px",
    "--borderRadius": "4px",
  },
  large: {
    "--borderRadius": "8px",
    "--progressbarHeight": "24px",
    "--contentHeight": "16px",
    padding: "4px",
  },
};

const ProgressBarElement = styled.div`
  height: var(--progressbarHeight);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  overflow: hidden;
`;

const ProgressContent = styled.div`
  background-color: ${COLORS.primary};
  height: var(--contentHeight);
`;

const ProgressBar = ({ value, size }) => {
  const styles = sizes[size];

  const contentStyles = {
    width: `${value}%`,
    "border-radius": "4px 0px 0px 4px",
  };

  return (
    <ProgressBarElement
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <ProgressContent style={contentStyles}></ProgressContent>
    </ProgressBarElement>
  );
};

export default ProgressBar;
