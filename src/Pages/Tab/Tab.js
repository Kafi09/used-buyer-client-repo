import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import TabCard from '../TabCard/TabCard';

const Tab = () => {
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
                categories.slice(3, 6).map(tabcard => <TabCard
                    key={tabcard._id}
                    tabcard={tabcard}
                    setPhone={setPhone}
                ></TabCard>)
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

export default Tab;