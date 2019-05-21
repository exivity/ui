import React from 'react'
import styled, { css } from 'styled-components'
import { Widget } from '../Widget'
import { Flex } from '../Flex'

interface ColumnProps {
  newRow?: boolean
  sticky?: boolean
  stickyOffset?: number
}

export const Column = styled(Flex.Item)<ColumnProps>`
${({ sticky, stickyOffset = 0 }) => sticky && css`
    position: sticky;
    top: ${stickyOffset}px;
  `}
`

export const getWidget = (props: any) => <Column as={Widget} {...props}/>