import React from 'react'
import { storiesOf } from '@storybook/react'

import { Image } from '../Image'
import { markdown } from '../utils/stories/markdown'

import { Flex } from '.'

const eyesUrl = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Basic%2C_wide_anime_eyes.svg'

const Ear = () => <Flex.Item width={50} height={100} bg='blue' />
const Head = () => (
  <Flex.Item
    as={Image}
    src={eyesUrl}
    background='contain'
    margin={1}
    size={200}
    bg='red' />
)

storiesOf('atoms|Flex', module)
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  .add('overview', markdown(require('./README.md')))
  .add('default', () => (
    <Flex alignItems='center'>
      <Ear />
      <Head />
      <Ear />
    </Flex>
  ))
