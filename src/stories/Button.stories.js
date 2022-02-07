import Button from '../components/Button'
import React from "react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {handleClick: {action : "handleClick"}}
}

const Template = args => <Button {...args}/>

export const Red = Template.bind({})
Red.args = {
  backgroundColor : "Red",
  label: "Press Me",
  size: "md"
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor : "Green",
  label: "Press Me",
  size: "md"
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor : "red",
  label: "Press Me",
  size: "sm"
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor : "red",
  label: "Press Me",
  size: "lg"
}


export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor : "red",
  label: "Press Me Once Twice Thrice Fource",
  size: "md"
}


