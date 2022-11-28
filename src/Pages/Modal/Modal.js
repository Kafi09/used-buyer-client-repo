import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Modal = ({ phone, setPhone }) => {
    const { name } = phone;
    const { user } = useContext(AuthContext);

    const handleBuy = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(date, name, email, phone);

        const buyerInfo = {
            date,
            name,
            email,
            phone,
        }
        console.log(buyerInfo);

        fetch('https://final-project-server-three.vercel.app/buyerInfos', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buyerInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setPhone(null);
                    toast.success('Add Cart confirmed');

                }
            })


    }

    return (
        <>
            <input type="checkbox" id="modal-buy" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="modal-buy" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBuy} className='grid grid-cols-1 gap-4'>
                        <input name='date' type="date" placeholder="Date" className="input w-full" />
                        <input name='name' required type="text" defaultValue={user?.displayName} placeholder="Name" className="input w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled required placeholder="Email" className="input w-full" />
                        <input name='phone' type="text" placeholder="Phone" className="input w-full" />
                        <br />
                        <input className=' btn btn-accent w-full max-w-xs' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;