import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
        <div className='footer-container'>
            <div className='footer-block'>
                <div className='footer-block-1'>
                    <h3>Constructor</h3>
                    <p>12 Water St. Vancouver, BC V6B<br/>132 United States</p>
                </div>
                
                <div className='footer-block-2'>
                    <ul>
                        <li>Corporate Sales</li>
                        <li>Feedback</li>
                        <li>Jobs</li>
                        <li>News</li>
                        <li>Sales Rules</li>
                        <li>For partners</li>
                    </ul>

                    <ul>
                        <li>Bonus program</li>
                        <li>Gift Cards</li>
                        <li>Bill Payment Verification</li>
                        <li>Loans</li>
                        <li>Delivery</li>
                        <li>Service centers</li>
                    </ul>
                </div>

                <div className='footer-block-3'>
                    <p>2030 Company. All Rights Reserved.</p>
                    <span>Terms & Conditions</span> 
                    <span>Privacy Policy</span>
                </div>
            </div>  
        </div>
    </>
  )
}

export default Footer