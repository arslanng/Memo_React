import React from 'react'

function Header({number, increment}) {
    console.log("Header Component Re-Rendered!");
  return (
    <div>
        Header - {number}
        <br />
        <br />
        <button onClick={increment}>Click</button>
    </div>
  )
}

export default React.memo(Header)