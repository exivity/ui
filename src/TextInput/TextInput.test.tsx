import * as React from 'react'
import { mount } from 'enzyme'

import { TextInput } from '.'

test('value gets changed after an on change event', () => {
  const initialValue = 'initialValue'
  const updatedValue = 'changed'

  const onChangeMock = jest.fn(x => x)

  const textInput = mount(<TextInput value={initialValue} onChange={onChangeMock} />)

  textInput
    .find('input')
    .simulate('change', { target: { value: updatedValue } })

  expect(onChangeMock.mock.results[0].value).toBe(updatedValue)
})
