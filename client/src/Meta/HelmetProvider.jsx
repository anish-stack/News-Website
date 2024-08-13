import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

const HelmetProvider = ({ NewsHeading, Description, imageUrl, NewsLink }) => {
    const [blobUrl, setBlobUrl] = useState('');

    useEffect(() => {
        const fetchImageAsBlob = async () => {
            try {
                if (imageUrl) {
                    // Fetch the image from the URL
                    const response = await fetch(imageUrl);
                    
                    // Check if the response is successful
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    
                    // Convert the response to a Blob
                    const blob = await response.blob();
                    
                    // Create a URL for the Blob
                    const url = URL.createObjectURL(blob);
                    
                    // Set the Blob URL to the state
                    setBlobUrl(url);
                    
                    // Clean up the Blob URL when the component unmounts
                    return () => URL.revokeObjectURL(url);
                }
            } catch (error) {
                console.error('Error fetching the image:', error);
            }
        };

        fetchImageAsBlob();
    }, [imageUrl]);
    // blob:http://localhost:5173/9ed6c0ec-34f2-4860-afc9-8d3a64f9a68a

    console.log(blobUrl)
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{NewsHeading || "Aam Awaz | Latest Daily Hindi News"}</title>
            <meta property="og:title" content={NewsHeading} />
            <meta property="og:description" content={Description} />
            <meta property="og:image" content={blobUrl } />
            <meta property="og:url" content={NewsLink} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Aam Awaz" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={NewsHeading} />
            <meta name="twitter:description" content={Description} />
            <meta name="twitter:image" content={blobUrl} />
            <meta name="twitter:site" content="@aamawaz" />
        </Helmet>
    );
};

export default HelmetProvider;
