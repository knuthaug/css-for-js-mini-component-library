import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Selector = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding: 12px 48px 12px 12px;
  border: 1px solid transparent;

  &:hover {
    color: black;
  }
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Selector value={value} onChange={onChange}>
        {displayedValue}
        <IconWrapper style={{ "--size": `24px` }}>
          <Icon id="chevron-down" size="24" strokeWidth="1"></Icon>
        </IconWrapper>
      </Selector>
    </Wrapper>
  );
};

export default Select;
