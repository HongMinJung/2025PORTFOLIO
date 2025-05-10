import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './atoms/Button';
import { Input } from './atoms/Input';
import { Select } from './atoms/Select';
import { Textarea } from './atoms/Textarea';
import { Typography } from './atoms/Typography';
import { Avatar } from './atoms/Avatar';
import { Badge } from './atoms/Badge';
import { Card } from './molecules/Card';
import { InputGroup } from './molecules/InputGroup';
import { Modal } from './molecules/Modal';
import { Toast } from './molecules/Toast';

const meta: Meta = {
  title: 'Components',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

// Atoms
export const ButtonStory: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
    </div>
  ),
};

export const InputStory: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input placeholder="Default input" />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="Error input" variant="error" />
    </div>
  ),
};

export const SelectStory: Story = {
  render: () => (
    <div style={{ width: '200px' }}>
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        placeholder="Select an option"
      />
    </div>
  ),
};

export const TextareaStory: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Textarea placeholder="Enter your message" rows={4} />
    </div>
  ),
};

export const TypographyStory: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="body1">Body Text 1</Typography>
      <Typography variant="body2">Body Text 2</Typography>
    </div>
  ),
};

export const AvatarStory: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar src="https://via.placeholder.com/150" alt="User" />
      <Avatar size="lg" src="https://via.placeholder.com/150" alt="User" />
      <Avatar size="sm" src="https://via.placeholder.com/150" alt="User" />
    </div>
  ),
};

export const BadgeStory: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
  ),
};

// Molecules
export const CardStory: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Card
        title="Card Title"
        content="This is a sample card content with some text to demonstrate the layout."
      />
    </div>
  ),
};

export const InputGroupStory: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <InputGroup
        id="username"
        label="Username"
        placeholder="Enter username"
        helperText="This is a helper text"
      />
    </div>
  ),
};

export const ModalStory: Story = {
  render: () => (
    <div>
      <Modal
        isOpen={true}
        title="Sample Modal"
        onClose={() => {}}
      >
        <p>This is a sample modal content.</p>
      </Modal>
    </div>
  ),
};

export const ToastStory: Story = {
  render: () => (
    <div>
      <Toast
        message="This is a success message"
        variant="success"
        autoCloseTime={3000}
      />
    </div>
  ),
};
