import React from 'react';
import './AdPostingRequest.css'; // Custom CSS for additional styling

const AdPostingRequest = () => {
    return (
        <section className="ad-posting-request d-flex align-items-center justify-content-center text-white" >
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="ad-content bg-dark bg-opacity-75 p-4 rounded">
                            <h2 className="mb-4 text-white text-center">Ad Posting Request</h2>
                            <p className="text-center text-white">
                                Interested in advertising with us? Contact us at <a href="mailto:contact@aamawaz.com" className="text-warning">contact@aamawaz.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdPostingRequest;
