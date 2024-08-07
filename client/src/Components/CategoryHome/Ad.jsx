import React from 'react';
import './AdPostingRequest.css'; // Custom CSS for styling

const AdPostingRequest = () => {
    return (
        <section className="ad-posting-request" >
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="ad-content">
                            <h2 className="mb-4 text-center">Ad Posting Request</h2>
                            <p>
                                Interested in advertising with us? Contact us at <a href="mailto:info@aamawaz.com">info@aamawaz.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdPostingRequest;
