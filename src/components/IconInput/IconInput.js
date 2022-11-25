import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    "--borderwidth": "1px",
    "--lineheight": "16px",
    "--fontsize": "14px",
    "--iconsize": "16px",
    "--height": "24px",
  },
  large: {
    "--borderwidth": "2px",
    "--lineheight": "21px",
    "--fontsize": "18px",
    "--iconsize": "24px",
    "--height": "36px",
  },
};

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--borderwidth) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  font-size: var(--fontsize);
  line-height: var(--lineheight);
  padding-left: var(--height);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
    font-size: var(--fontsize);
    line-height: var(--lineheight);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const Wrapper = styled.label`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = sizes[size];
  const iconSizes = {
    small: "16",
    large: "24",
  };

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": `${iconSizes[size]}px` }}>
        <Icon id={icon} size={iconSizes[size]} strokeWidth="1"></Icon>
      </IconWrapper>
      <Input
        id="input"
        style={{
          ...styles,
          "--width": `${width}px`,
          "--iconsize": `${iconSizes[size]}px`,
        }}
        placeholder={placeholder}
      ></Input>
    </Wrapper>
  );
};

export default IconInput;
