import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='bg-orange-500 text-white'>
        <div className="container mx-auto px-6 py-6">
            <div className="footerRows flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:flex-wrap mb-10">
                <ul className="footeritem">
                    <li> Countries</li>
                    <li>Regions</li>
                    <li>Cities</li>
                    <li>Districts</li>
                    <li>Airports</li>
                    <li>Hotels</li>
                </ul>
                <ul className="footeritem">
                    <li> Countries</li>
                    <li>Regions</li>
                    <li>Cities</li>
                    <li>Districts</li>
                    <li>Airports</li>
                    <li>Hotels</li>
                </ul>
                <ul className="footeritem">
                    <li> Countries</li>
                    <li>Regions</li>
                    <li>Cities</li>
                    <li>Districts</li>
                    <li>Airports</li>
                    <li>Hotels</li>
                </ul>
                <ul className="footeritem">
                    <li> Countries</li>
                    <li>Regions</li>
                    <li>Cities</li>
                    <li>Districts</li>
                    <li>Airports</li>
                    <li>Hotels</li>
                </ul>
            </div>
            <p className=' text-gray-200'> Copyright © 2023–2023 Mahidun Nobi™. All rights reserved. </p>
        </div>
    </div>
  )
}

export default Footer