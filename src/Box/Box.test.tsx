import React from 'react'
import { mount } from 'enzyme'

import { Box } from './Box'
import { BoxContext } from './helpers'

test('box bar should throw an error when rendered outside a box component', () => {
  let message: string
  try {
    mount(<Box.Bar></Box.Bar>)
  } catch (error) {
    message = error.message
  }
  expect(message).toBe('useBoxContext should only be called within a child of a Box component')
})

test('box content should throw an error when rendered outside a box component', () => {
  let message: string
  try {
    mount(<Box.Content></Box.Content>)
  } catch (error) {
    message = error.message
  }
  expect(message).toBe('useBoxContext should only be called within a child of a Box component')
})

test('collapser shouldn\'t be visible when no props are given', () => {
  const box = mount(
    <Box><Box.Bar />
      <BoxContext.Consumer>
        {(context) => {
          expect(context.collapsed).toBe(false)
          return null
        }}
      </BoxContext.Consumer></Box>
  )

  const collapser = box.find({ 'data-test': 'box-collapser' }).get(0)
  expect(collapser).not.toBeDefined()
})

test('collapser should be visible when collapsed and onCollapsed are given', () => {
  const collapsed = true
  const box = mount(
    <Box collapsed={collapsed} onCollapse={jest.fn()}><Box.Bar />
      <BoxContext.Consumer>
        {(context) => {
          expect(context.collapsed).toBe(collapsed)
          return null
        }}
      </BoxContext.Consumer></Box>
  )

  const collapser = box.find({ 'data-test': 'box-collapser' }).get(0)
  expect(collapser).toBeDefined()
})

test('collapser should be visible when initialCollapsed is given', () => {
  const box = mount(
    <Box initialCollapsed={false}><Box.Bar />
      <BoxContext.Consumer>
        {(context) => {
          expect(context.collapsed).toBe(false)
          return null
        }}
      </BoxContext.Consumer></Box>
  )

  const collapser = box.find({ 'data-test': 'box-collapser' }).get(0)
  expect(collapser).toBeDefined()
})

test('When BoxCollapser gets clicked collapsed is toggled for uncontrolled component', () => {
  const initialCollapsed = false
  let clicked = false
  const box = mount(
    <Box initialCollapsed={initialCollapsed}>
      <Box.Bar />
      <BoxContext.Consumer>
        {(context) => {
          if (!clicked) {
            //  Runs after mount
            expect(context.collapsed).toBe(false)
          } else {
            // Runs after context value changed due to the onclick
            expect(context.collapsed).toBe(true)
          }
          return null
        }}
      </BoxContext.Consumer>
    </Box>
  )

  const collapser = box.find({ 'data-test': 'box-collapser' })
  clicked = true
  collapser.first().props().onClick()
})