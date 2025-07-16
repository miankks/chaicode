import React from 'react'


const reactElement = React.createElement(
  'a',
  {href: 'https//google.com', target: '_blank'},
  'click me to visit google'
)
const ReactElement = () => {
  return (
    reactElement
  )
}

export default ReactElement 