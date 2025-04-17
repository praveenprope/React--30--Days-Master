import React from 'react'
import Student from './Student'

const App = () => {
  return (
    <>
       <Student name="Jhon Cena"  age={20}  isStudent={true} />
        <Student name="Brock Lesnar"  age={40}  isStudent={false} />
        <Student name="Dean Amebrose"  age={34}  isStudent={true} />
        <Student name="Roman Reinnngs"  age={76}  isStudent={false} />
        <Student />
    </>   
  )
  
}


export default App