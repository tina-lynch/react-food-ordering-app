import { useRef, useState } from 'react';

import classes from './Checkout.module.css';


const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        address: true,
        city: true,
        postCode: true
    });

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const postcodeRef = useRef();
  
    
    const confirmHandler = (e) =>{
        e.preventDefault();
    
        const nameInput = nameRef.current.value;
        const addressInput = addressRef.current.value;
        const cityInput = cityRef.current.value;
        const postcodeInput = postcodeRef.current.value;


        const nameIsValid = !isEmpty(nameInput);
        const addressIsValid = !isEmpty(addressInput);
        const cityIsValid = !isEmpty(cityInput);
        const postcodeIsValid = isFiveChars(postcodeInput);


        setFormInputValidity({
            name: nameIsValid,
            address: addressIsValid,
            city: cityIsValid,
            postCode: postcodeIsValid
        });

   
        const formValid = cityIsValid && nameIsValid && addressIsValid && postcodeIsValid;
       
        if (!formValid) {
            return;
        }

        //submit cart data to Cart.js
        props.onConfirm({
            name: nameInput, 
            address: addressInput, 
            city: cityInput, 
            postCode: postcodeInput
        })
    };
  
    const combinedClass = `${classes.control} + ${classes.invalid }`;
    
    return (
        <form className={classes.form} onSubmit={confirmHandler} > 
            <div className={formInputValidity.name ?  classes.control : combinedClass}>
                <label>Name</label>
                <input type="text" id="name" ref={nameRef} />
                {!formInputValidity.name && <p>Please enter name</p>}
            </div>
            <div className={formInputValidity.address ? classes.control : combinedClass}>
                <label>Address</label>
                <input type="text" id="address" ref={addressRef} />
                {!formInputValidity.address && <p>Please enter a valid  Address</p>}
            </div>
            <div className={formInputValidity.postCode ? classes.control : combinedClass}>
                <label>Postcode</label>
                <input type="text" id="postcode" ref={postcodeRef} />
                {!formInputValidity.postCode && <p>Please enter a valid Postcode (5 digits)</p>}
            </div>
            <div className={formInputValidity.city ? classes.control : combinedClass}>
                <label>City</label>
                <input type="text" id="city" ref={cityRef} />
                {!formInputValidity.city && <p>Please enter a valid City</p>}
            </div>
            <div className={classes.actions}>
                <button type="button"  onClick={props.onCancel}>Cancel </button>
                <button className={classes.submit} disabled={false } >Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
