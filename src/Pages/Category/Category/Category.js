import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import CategoryCard from '../CategoryCard/CategoryCard';

const Category = () => {
    // const [categories, setCategories] = useState([])
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
                categories.slice(0, 3).map(category => <CategoryCard
                    key={category._id}
                    category={category}
                    setPhone={setPhone}
                ></CategoryCard>)
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

export default Category;