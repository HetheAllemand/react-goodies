import './adminCouponCode.css';
import { useState } from 'react';

function AdminCouponCode() {
    const [couponCode, setCouponCode] = useState({});

    function textChanged(e) {
        let text = e.target.value;
        let attr = e.target.name;

        let copy = {...couponCode};
        copy[attr] = text;
        setCouponCode(copy);
    }

    function save() {
        console.log(couponCode);
    }

    return (
        <div className="ad-cc">
            <h3>Manage Coupon Codes</h3>

            <div className="my-control">
            <label className='form-label'>Code</label>
            <input name="code" onChange={textChanged} className='form-control' type="text"></input>
        </div>

        <div className="my-control">
            <label className='form-label'>Discount</label>
            <input name="discount" onChange={textChanged} className='form-control' type="number"></input>
        </div>

        <div className="my-control">
            <button onClick={save} className='btn btn-sm btn-dark'>Save Coupon Code</button>
        </div>

        </div>

            
    );
}

export default AdminCouponCode;