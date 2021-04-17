import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import doctor from '../../../images/doctor.png'

const Doctor = () => {
    return (
        <div className="col-md-4 text-center ">
            <img className="img-fluid" style={{ height: "400px" }} src={doctor} alt="" />
            <h2>Dr Owali</h2>
            <h5> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> +88015222211111</h5>
        </div>
    );
};

export default Doctor;