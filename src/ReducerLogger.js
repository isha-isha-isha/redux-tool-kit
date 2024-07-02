import React from 'react'
import productReducer from './Stores/Slices/produceSlice'
import index from './Stores/index'
import logger from './Stores/middleware/logger'
function ReducerLogger() {
  return (
    <div>ReducerLogger</div>
  )
}

export default ReducerLogger