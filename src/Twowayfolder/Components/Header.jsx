import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className='Left'>
            <div className="title">
                <h2>Twowayproject</h2>
            </div>
        </div>
        <div className="Center">
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Children</li>
                <li>fashion</li>
                <li>electronics</li>
            </ul>
        </div>
         <div className="search">
           <input type = "text"  placeholder='search.... .' />

        </div>
        <div className="right">
            <div className="Signin">
                Sign/Signup
            </div>
            <div className="cart">
                Cart Box
            </div>
        </div>
    </div>
  )
}

export default Header