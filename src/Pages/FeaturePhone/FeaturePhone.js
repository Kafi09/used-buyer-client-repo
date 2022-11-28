import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import FeaturePhoneCard from '../FeaturePhoneCard/FeaturePhoneCard';
import Modal from '../Modal/Modal';

const FeaturePhone = () => {
    const [phone, setPhone] = useState(null);

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://final-project-server-three.vercel.app/categoriesCollection');
            const data = await res.json();
            return data
        }
    });
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-3 ' >
            {
                categories.slice(6, 9).map(featurephonecard => <FeaturePhoneCard
                    key={featurephonecard._id}
                    featurephonecard={featurephonecard}
                    setPhone={setPhone}
                ></FeaturePhoneCard>)
            }
            {
                phone &&
                <Modal
                    phone={phone}
                    setPhone={setPhone}
                ></Modal>
            }
        </div>
    );
};

export default FeaturePhone;