import React from 'react'

const Collections = (props) => {
    const{title, image1,image2,image3,image4,image5} = props.Gentsfashion
  return (
    <div>
        <h3>{title}</h3>
        <div>
            <image src={image1} alt={`all is ${title}`}/>
                        <image src={image2} alt={`all is ${title}`}/>
                                    <image src={image3} alt={`all is ${title}`}/>
                                                <image src={image4} alt={`all is ${title}`}/>


        </div>

    </div>
  )
}

export default Collections