import React from 'react'
import Layout from './layout/layout'
function Application({counter}) {
  return (
    <div>
       <Layout counter={counter} />
    </div>
  )
}

export default Application