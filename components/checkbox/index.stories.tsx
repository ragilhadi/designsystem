import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Checkbox from "./component/Checkbox";

export default {
  title: "Component|Checkbox",
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SystemBlock title="BCC Design System - Checkbox">
      <Stack spacing="xl">
        <Checkbox 
          value="BCC" 
          checked={isChecked} 
          handleChange={() => {
            setIsChecked(!isChecked)
            }}
            />
      </Stack>
    </SystemBlock>
  );
};


export const Selected = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <SystemBlock title="BCC Design System - Checkbox (Selected)">
      <Stack spacing="xl">
        <Checkbox 
          value={isChecked.toString()} 
          checked={isChecked}
          handleChange={() => {
            setIsChecked(!isChecked)
          }}
        />  
      </Stack>
    </SystemBlock>
  );
};


export const Indetermined = () => {
  return (
    <SystemBlock title="BCC Design System - Checkbox (Indetermined)">
      <Stack spacing="xl">
        <Checkbox value="Checkbox Interminated" indeterminated />  
      </Stack>
    </SystemBlock>
  );
};

export const Disabled = () => {
  return (
    <SystemBlock title="BCC Design System - Checkbox (Disabled)">
      <Stack spacing="xl">
        <Checkbox value="Option 1" disabled/>  
        <Checkbox value="Option 2" disabled checked/>  
        <Checkbox value="Option 3" disabled indeterminated/>  
      </Stack>
    </SystemBlock>
  );
};

export const Skeleton = () => {
  return (
    <SystemBlock title="BCC Design System - Checkbox (Disabled)">
      <Stack spacing="xl">
        <Checkbox value="Option 1" skeleton={true}/>  
      </Stack>
    </SystemBlock>
  );
};