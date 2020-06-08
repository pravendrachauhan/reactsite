import React from 'react';

const PaymentPage = () => (
        <>
                <h2 style={{ color: "darkblue", textAlign: "center", paddingBottom: "5px", fontSize: "30px" }}>
                        Payment page
                </h2>
                <h3 style={{ color: "green", textAlign: "left", paddingBottom: "15px", fontSize: "20px" }}>
                        We are accepting payments from multiple vendors.
                </h3>
                <h4 style={{ color: "green", textAlign: "left", paddingBottom: "15px", fontSize: "20px" }}>
                        Please find the list below:
                </h4>
                <div style={{ color: "darkblue", textAlign: "left", paddingBottom: "5px", fontSize: "20px" }}>
                        <h5 style={{ paddingBottom: "15px" }}>
                                1. <a href="https://www.xoom.com/money-transfer/">Xoom</a>
                        </h5>
                        <h5 style={{ paddingBottom: "15px" }}>
                                2. <a href="https://transferwise.com/">Transferwise</a>
                        </h5>
                        <h5 style={{ paddingBottom: "15px" }}>
                                3. <a href="https://www.westernunion.com/in/en/web/send-money/start/">Westorn Union</a>
                        </h5>
                        <h5 style={{ paddingBottom: "15px" }}>
                                4. <a href="https://www.worldremit.com/">World Remit</a>
                        </h5>
                        <h5 style={{ paddingBottom: "15px" }}>
                                5. <a href="http://www.click2remit.com/">Click2Remit</a>
                        </h5>
                        <h5 style={{ paddingBottom: "15px" }}>
                                6.  Bank account transfer
                </h5>
                <h4 style={{ color: "green", textAlign: "left", paddingBottom: "15px", fontSize: "15px" }}>
                        Once you done with transfer please Whatsapp your receipt for tracking purpose!
                </h4>
                
                </div>
        </>
)


export default PaymentPage;
