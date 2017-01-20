import React from 'react'
import Paper from 'material-ui/Paper'
import {List} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'

import './SuggestionBlock.css'

const renderChildren = children => children.map((child, index, children) => {
  const items = children.length
  return (
    <suggestion key={child.key || index}>
      {child}
      {index < items - 1 ? <Divider /> : null}
    </suggestion>
  )
})

const SuggestionBlock = ({children, subheader}) => {
  if (children) {
    return (
      <suggestion-block>
        <Paper>
          <List>
            { subheader ? <Subheader> {subheader} </Subheader> : null}
            { renderChildren(children) }
          </List>
        </Paper>
      </suggestion-block>
    )
  } else return null
}

export default SuggestionBlock
