import React from 'react';

const FeaturePhoneCard = ({ featurephonecard, setPhone }) => {

    const { name, img, new_price, resale_price, condition, used_year, location } = featurephonecard;

    return (
        <div className="card w-72 bg-stone-500 shadow-xl ">
            <figure><img className=' h-72' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Market Price: {new_price}</p>
                <p>Resale Price: {resale_price}</p>
                <p>Used Year: {used_year}</p>
                <p>Condition: {condition}</p>
                <p>Location: {location}</p>
                <div className="card-actions justify-end">
                    <label htmlFor="modal-buy"
                        className="btn"
                        onClick={() => setPhone(featurephonecard)}
                    >Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default FeaturePhoneCard;