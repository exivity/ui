import faker from 'faker'
import React from 'react'
import { storiesOf } from '@storybook/react'

import { Paragraph } from '../Paragraph'
import { withState } from '../utils/tests/decorators/StateDecorator'
import { storeAndAction } from '../utils/tests/storeAndAction'
import { Row } from '../utils/stories/components'

import { TextArea } from '.'

storiesOf('interact|TextArea', module)
  .addDecorator(withState(''))
  .add('default', ({ state, storeState }: any) => (
    <TextArea
      rows={5}
      value={state}
      onChange={storeAndAction(storeState, 'onChange')} />
  ))
  .add('outlined', ({ state, storeState }: any) => (
    <TextArea
      rows={5}
      value={state}
      outlined
      onChange={storeAndAction(storeState, 'onChange')} />
  ))
  .add('flat', () => (
    <div>
      <Paragraph>{faker.lorem.sentences(3)}</Paragraph>
      <TextArea flat rows={3} value={faker.lorem.sentences(5)} style={{ marginBottom: '1em' }} />
      <Paragraph>{faker.lorem.sentences(2)}</Paragraph>
    </div>
  ))
  .add('purposes', () => (
    <Row columns={4} columnWidth={350}>
      <TextArea primary value='Primary' />
      <TextArea secondary value='Secondary' />
      <TextArea success value='Success' />
      <TextArea danger value='Danger' />
      <TextArea outlined primary value='Primary' />
      <TextArea outlined secondary value='Secondary' />
      <TextArea outlined success value='Success' />
      <TextArea outlined danger value='Danger' />
    </Row>
  ))
  .add('disabled', ({ state, storeState }: any) => (
    <Row columns={2} columnWidth={350}>
      <TextArea
        rows={5}
        value={state}
        disabled
        onChange={storeAndAction(storeState, 'onChange')} />
      <TextArea
        rows={5}
        value={state}
        disabled
        outlined
        onChange={storeAndAction(storeState, 'onChange')} />
    </Row>
  ))
