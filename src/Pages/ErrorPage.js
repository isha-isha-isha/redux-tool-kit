import React, { useState } from 'react'


function ErrorPage() {
  const product=useState((state)=>state.products)
  console.log(product)

  return (
    <div>ErrorPage page not found </div>
  )
}

export default ErrorPage