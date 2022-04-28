import { ReactNode } from 'react'

type align = 'center' | 'inherit' | 'justify' | 'left' | 'right'

export type variant =
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'

type component = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span'

type TypographyProps = {
  /**
   * Set the text-align on the component.
   * @default inherit
   */
  align?: align
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: component
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom?: boolean
  /**
   *
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis. Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap?: boolean
  /**
   *
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph?: boolean
  /**
   *
   * Applies the theme typography styles.
   * @default body1
   */
  variant?: variant
  /**
   *
   * child.
   */
  children: ReactNode
}

export type { TypographyProps }
