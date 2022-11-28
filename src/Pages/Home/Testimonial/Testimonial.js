import React from 'react';
import img1 from '../../../assets/images/img6.jpg';
import img2 from '../../../assets/images/img7.jpg';
import img3 from '../../../assets/images/img8.jpg';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Rahim Ali',
            img: img1,
            review: 'The seller for a very long time Mured with the shipment of about 2 weeks! Then offered to pay extra for the 8/256 version (which I absolutely do not need) promising express! Fast Delivery + gifts.',
            location: 'Dhaka'
        },
        {
            _id: 2,
            name: 'Karim Ali',
            img: img2,
            review: 'We replace the 8/256 version with the consent of the buyer, and we have informed the buyer that a mobile phone protective film will be given away.',
            location: 'Noakhali'
        },
        {
            _id: 3,
            name: 'Sabina Yeasmin',
            img: img3,
            review: 'The order waited 2 months, due to the reason that it was not long in the store 12, 512.but the wait was worth it. successfully ordered for 190 when the course fell, thought will send 12,256 but no seller decent.',
            location: 'Barisal'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-2xl text-zinc-700 font-bold">User Experience</h4>
                </div>
            </div>
            <div><h2 className="text-4xl text-center pb-6">Our Users Review</h2></div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;