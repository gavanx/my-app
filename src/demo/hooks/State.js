/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React, { useState } from 'react'
import { Button } from 'antd'

const title = 'State Demo'

export default props => {
  const [count, setCount] = useState(100)
  return (
    <div>
      <p><b>{title}</b>: You clicked {count} times
        <Button onClick={() => setCount(count + 1)}>
          Click me
        </Button>
      </p>
    </div>
  )
}
