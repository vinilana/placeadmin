import React from 'react'
import { Popover, Whisper } from 'rsuite'

const Speaker = ({ content, ...props }) => (
  <Popover {...props}>
    {content}
  </Popover>
)

const PopoverInstance = ({ placement, children, content, ...props }) => (
  <Whisper
    trigger="click"
    placement={placement}
    speaker={<Speaker content={content} {...props} />}
  >
    {children}
  </Whisper>
)

export { PopoverInstance as Popover }
