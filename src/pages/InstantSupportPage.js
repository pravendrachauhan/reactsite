import React from 'react';
import Container from '../Container'

const InstantSupportPage = () => {
        const triggerText = 'Book Now';
        const onSubmit = (event) => {
                event.preventDefault(event);
                console.log(event.target.name.value);
                console.log(event.target.email.value);
        };
        return (
                <>
                        <p>
                                If you are worrying about your project or assignment or you stuck in between some task
                                of your project, we are here to help you
                </p>
                        <p>
                                How can we help in a better way:
                </p>
                        <p>
                                You are on absolutely correct website for instant support
                </p>
                        <p>
                                You heard it right!
                        </p>
                        <p>
                                We are providing instant support by assigning right support person for you project
                </p>
                        <p>
                                You will get the support person information and contact number just after booking his slot for atleast an hour
                        </p>
                        <p>
                                What are you waiting for!
                                </p>
                        <Container triggerText={triggerText} onSubmit={onSubmit} />

                </>

        )
}


export default InstantSupportPage;
