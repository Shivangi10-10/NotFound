import React, {useState} from 'react';
import './Vet.css';
const Vet = () => {
 return (
    <>
    <div className="vet">
            <div className="vet-visit-title">
                <h3>Emergency Contacts</h3>
            </div>

            <div className='vet-visit-body'>
                <div className="vet-box">
                <a href='http://sanjaygandhianimalcarecentre.org/contact-us.html'>
                <h3>Sanjay Gandhi Animal Care Centre (SGACC)</h3>
                <p>All-animal shelter and 24x7 ambulance service. </p>
                <p><b>Address:</b> Shivaji College Rd, Shivaji Enclave, Raja Garden, New Delhi, Delhi 110027</p>
                <p><b>Phone:</b> 011 2544 8062/25448062</p>
                <p><b>Email:</b> sgacc1980@gmail.com</p>
                </a>
                </div>
            

            <div className="vet-box">
                <a href='https://development.delhi.gov.in/development/24-x-7-emergency-services-veterinary-hospital-tis-hazari'>
                <h3>Veterinary Hospital Tis Hazari</h3>
                <p>24x7 Government emergency services in New Delhi</p>
                <p><b>Address:</b> 10243, Library Road, Railway Colony, Tis Hazari, Delhi-110006</p>
                <p><b>Government animal helpline number:</b> 011-23967555</p>
                </a>
            </div>

            <div className="vet-box">
                <a href='https://www.facebook.com/smartsanctuary/'>
                <h3>Sophie Memorial Animal Relief Trust (S. M. A. R. T.)</h3>
                <p>Home for old, disbaled, special needs dogs.</p>
                <p><b>Address:</b> 141, Block B, Omicron II, Greater Noida, Uttar Pradesh, -201310</p>
                <p><b>Phone:</b> 70427 23301</p>
                </a>
            </div>

            <div className="vet-box">
                <a href='https://allcreaturesgreatandsmall.in/contact-acgs/'>
                <h3>All Creatures Great and Small (ACGS)</h3>
                <p>Full-fledged shelter for all animals and have facility of birth control</p>
                <p><b>Address:</b> ACGS SANCTUARY, Silakhari Village, P.O. Dhouj – Tehsil & District Faridabad. Haryana 121004</p>
                <p><b>Phone:</b> +91 99103 08374</p>
                <p><b>Email Id:</b> gopalan.anjali@gmail.com</p>
                </a>
            </div>
            </div>
    </div>
    </>
 );
};

export default Vet;