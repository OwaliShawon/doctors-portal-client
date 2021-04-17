import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ key, booking, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-md-4">
            <div className="card p-5 m-3 text-center">
                <h2>{booking.subject}</h2>
                <h6>{booking.visitingHour}</h6>
                <p>{booking.totalSpace} sapaces available</p>
                <button onClick={openModal} className="btn  btn-primary">BOOK APPOINTMENT</button>
                <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date} ></AppointmentForm>
            </div>
        </div>
    );
};

export default BookingCard;