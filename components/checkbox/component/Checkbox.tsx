import * as React from "react";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import HypenIcon from "@material-ui/icons/Remove";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { colors } from "../../_utils";

export interface CheckboxProps {
  disabled?: boolean;
  indeterminated?: boolean;
  style?: React.CSSProperties;
  value?: string;
  id?: string;
  checked?: boolean;
  handleChange?: Function;
  skeleton?: boolean;
}

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const Label = styled("label")`
  position: relative;
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const MyCheckBox = styled("input")`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 0;
  left: 0;
  opacity: 0;
  cursor:  ${(props) => props.disabled ? "not-allowed" : "pointer"};
`;

const SpanCheckMark = styled("span")`
  height: 18px;
  width: 18px;
  border: 1.5px solid #888888;
  border-color: ${(props) =>
    (props.disabled && props.checked) ||
    (props.disabled && props.indeterminated)||
    (props.checked)||
    (props.indeterminated)
      ? "#fff"
      : props.disabled ? "#D8D8D8" :"#888888"};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.disabled
      ? props.checked || props.indeterminated ? "#D8D8D8" :"#FBFBFB"
      : props.checked || props.indeterminated
      ? colors.biru03
      : "#fff"};
`;

const BackgroundHover = styled("span")`
  position: relative;
  padding: 3px;
  border-radius: 3px;
  background-color: transparent;
  &:hover {
    background-color: ${(props) => props.checkded ? "red" : "#f1f1f1"}
    }
`

const CheckMarkFill = styled("p")`
  margin-left: 16px;
  min-width: 100px;
`;


const Checkbox: React.FC<CheckboxProps> = ({
  indeterminated,
  disabled,
  value,
  id,
  checked,
  handleChange,
  skeleton
}) => {
  const [isIndeterminated, setIsIndeterminated] = useState(indeterminated);
  const styledIcon = { width: "15px", height: "15px", color: "#fff" };


  return (
    <>
      <Label
        onClick={() => {
          if (disabled) {
            return;
          }
          setIsIndeterminated(false);
          handleChange();
          console.log(checked);
        }}
      > 
      <BackgroundHover>
        <SpanCheckMark
          checked={checked}
          disabled={disabled}
          indeterminated={isIndeterminated}
        >
          {checked ? (
            <CheckIcon style={styledIcon} />
          ) : (
            indeterminated && <HypenIcon style={styledIcon} />
          )}
        </SpanCheckMark>
        <MyCheckBox
          value={value}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          id={id}
          ref={(el) => el && (el.indeterminate = isIndeterminated)}
        />
      </BackgroundHover>
        <CheckMarkFill className={`${skeleton ? "skeleton" : ""}`}>{value}</CheckMarkFill>
      </Label>
    </>
  );
};

Checkbox.defaultProps = {
  indeterminated: false,
  disabled: false,
  checked: false,
  skeleton: false,
};

export default Checkbox;