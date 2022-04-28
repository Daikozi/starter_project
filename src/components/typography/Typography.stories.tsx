import { Meta, Story } from '@storybook/react'

import { Typography } from './Typography'
import { TypographyProps } from './Typography.propTypes'

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta

const Template: Story<TypographyProps> = (args) => <Typography {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'This is default Typography',
}

export const components = () => (
  <>
    <Typography variant="h1">h1.Header</Typography>
    <Typography variant="h2">h2.Header</Typography>
    <Typography variant="h3">h3.Header</Typography>
    <Typography variant="h4">h4.Header</Typography>
    <Typography variant="h5">h5.Header</Typography>
    <Typography variant="h6">h6.Header</Typography>
    <Typography variant="subtitle1">
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="subtitle2">
      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="body1">
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </Typography>
    <Typography variant="body2">
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </Typography>
    <Typography variant="button">button text</Typography>
    <Typography variant="caption">caption text</Typography>
    <Typography variant="overline">overline text</Typography>
  </>
)
