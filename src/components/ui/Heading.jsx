import React from 'react'

const Heading = ({heading, textColor}) => {
    let text_color;
    if(textColor){
        text_color = `text-${textColor}`
    }else{
        text_color= ""
    }
  return (
    <h1 className={`max-w-5xl text-5xl ${text_color} font-bold text-center leading-none tracking-tighter sm:text-2xl lg:text-6xl lg:max-w-7xl mb-4 md:mb-6`}>
        {heading}
    </h1>
  )
}

export default Heading