import { ReactNode, FC, ReactElement } from 'react'

export function isElement (node: ReactNode): node is ReactElement<any, FC> {
  return !!node && typeof node !== 'string' && typeof node !== 'boolean' && typeof node !== 'number' && Array.isArray(node) === false
}
