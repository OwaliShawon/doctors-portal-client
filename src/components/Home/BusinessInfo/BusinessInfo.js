import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMarker, faPhone } from '@fortawesome/free-solid-svg-icons'


const infosData = [
    {
        title: 'Openings Hours',
        description: 'We are open 24/7',
        icon: faClock,
        background: 'primary'

    },
    {
        title: 'Visit Our Location',
        description: '89, Dhanmondi 1200 BD',
        icon: faMarker,
        background: 'dark'

    },
    {
        title: 'Call US Now',
        description: '01696969696969',
        icon: faPhone,
        background: 'primary'

    }
]

const BusinessInfo = () => {
    return (
        <section className='row d-flex justify-content-center'>
            <div className='w-75 row'>
                {
                    infosData.map((info) => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;