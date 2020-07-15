import { hot } from 'react-hot-loader'

import React, { ReactElement, useState } from 'react'

function _App(): ReactElement {
  const [state, setState] = useState(0)
  const project = { name: 'my app' }

  return (
    <div>
      {project.name}
      <div>{state}</div>
      <button style={{ marginRight: 12 }} onClick={() => setState(state + 1)}>
        +
      </button>
      <button onClick={() => setState(state - 1)}>-</button>
    </div>
  )
}
export const App =
  process.env.NODE_ENV === 'production' ? _App : hot(module)(_App)
