
import Add from './Calculation/Add'
import Divide from './Divide'
import Mult from './Mult'
import Sub from './Sub'
function Cal() {
  return (
    <>
    <h1>The addition of two No is. {Add(1,2)}</h1>
    <h1>The Subtraction of two No is.{Sub(20,10)}</h1>
    <h1>The Multiplication of two No is.{Mult(20,10)}</h1>
    <h1>The Division is {Divide(10,2)}</h1>
      
    </>
  )
}

export default Cal
