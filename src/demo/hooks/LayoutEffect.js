/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React, { useLayoutEffect, useState } from 'react'
import { Button } from 'antd'

const title = 'Layout Effect Demo'

export default props => {
  const [count, setCount] = useState(100)
  useLayoutEffect(() => {
    document.title = `Clicked ${count} times`
    return () => {
      console.log('unmount hook')
    }
  })

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
