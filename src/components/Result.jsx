import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Result = ({career}) => {
    return (

      <h2> Congratulations; you made it to the end! </h2>

      <h3> Your STEM career match is {career} ! </h3> 


        

   
    }




export default () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
