import { Button } from './Button';

export default {
  component: Button,
};

const Template = {}

export const Primary = {
  ...Template,
  args: {
    primary: true,
    label: 'Button',
  }
}

export const Secondary = {
  ...Template,
  args: {
    label: 'Button',
  }
}

export const Large = {
  ...Template,
  args: {
    size: 'large',
    label: 'Button',
  }
};

export const Small = {
  ...Template,
  args: {
    size: 'small',
    label: 'Button',
  }
};
