import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [emailid, setEmailid] = useState('');
    const [experienceon, setExperienceon] = useState('');
    const [location, setLocation] = useState('');

    //form validation hooks
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        registerUser();
    }

    const registerUser = async () => {
        const result = await fetch(`/api/workwithus/register`, {
            method: 'post',
            body: JSON.stringify({
                name,
                mobilenumber,
                emailid,
                experienceon,
                location
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const body = await result.json()
        window.alert(`Thanks, ${body}`)
        setName('')
        setMobilenumber('')
        setEmailid('')
        setExperienceon('')
        setLocation('')
    }
    return (
        <>
            <div id="add-comment-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Name:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} ref={register({ required: true,maxLength:30,minLength:3 })}/>
                </label>
                {errors.name && <span>Name is required</span>}
                
                {errors.name  && <div><span>Please provide minimum 3 letters</span></div>}
                <br />
                <label> Mobile/Whatsapp Number:
        <input type="number" name="mobilenumber" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} ref={register({ required: true, maxLength:12,minLength:10  })}/>
                </label>
                {errors.mobilenumber && <span>Mobile Number is required</span>}
                {errors.mobilenumber && <div><span>Please provide correct mobile number</span></div>}
                <br />
                <label> Email Id:
        <input type="text" name="emailid" value={emailid} onChange={(e) => setEmailid(e.target.value)}  ref={register({ required: true,pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  })}/>
                </label>
                {errors.emailid && <span>Email Id is required as</span>}
                {errors.emailid && <span>Please provide correct mobile number</span>}

                <br />
                <label> Experience On:
        <input type="text" name="experienceon" value={experienceon} onChange={(e) => setExperienceon(e.target.value)} ref={register({ required: true,maxLength:25  })}/>
                </label>
                {errors.experienceon && <span>Please provide area of expertise</span>}
                <br />
                <label> Location:
        <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} ref={register({ required: true, maxLength:15  })}/>
                </label>
                {errors.location && <span>Location is required</span>}
               {/* button onClick={registerUser}>Register</button> */}
                <input type="submit"/>
                </form>
            </div>
        </>
    )
}


export default RegisterForm;
