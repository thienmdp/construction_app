declare module 'react-scroll' {
  import * as React from 'react'

  interface Props {
    to: string
    spy?: boolean
    smooth?: boolean
    offset?: number
    duration?: number
    activeClass?: string
    className?: string
    onSetActive?(): void
    onClick?(): void
    [key: string]: any
  }

  export class Link extends React.Component<Props> {}

  export const animateScroll: {
    scrollToTop(options?: { duration?: number; smooth?: boolean }): void
  }
}
