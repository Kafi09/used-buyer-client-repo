import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Buyer = () => {

    const { user } = useContext(AuthContext);
    const url = `https://final-project-server-three.vercel.app/buyerInfos?email=${user?.email}`;

    const { data: buyerInfos = [] } = useQuery({
        queryKey: ['buyerInfos', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-2xl mb-5">Buyer Order List</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Order Id</th>
                            <th>Date</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyerInfos.map((buyerInfo, i) => <tr key={buyerInfo._id}>
                                <th>{i + 1}</th>
                                <td>{buyerInfo.name}</td>
                                <td>{buyerInfo._id}</td>
                                <td>{buyerInfo.date}</td>
                                <td>{buyerInfo.phone}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Buyer;