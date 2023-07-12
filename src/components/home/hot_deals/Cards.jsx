import React from 'react'

import './Cards.css'





function Cards({image,content}) {




  return (

        <div className='cards'>

            <div className='cards_content'>

                <p>{`${content} Collections`}</p>

                <a href='#'>SHOP NOW</a>

             </div>

            <img src={image}></img>

        </div>

  )

}




export default Cards