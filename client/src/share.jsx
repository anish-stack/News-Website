import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    WhatsappShareButton,
    RedditShareButton,
} from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    WhatsappIcon,
    RedditIcon,
} from 'react-share';

const ShareImage = ({ imageUrl, title }) => {
    const shareUrl = window.location.href; // The URL you want to share

    return (
        <div>
            <img src={imageUrl} alt="Shareable" style={{ width: '300px', height: 'auto' }} />
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <FacebookShareButton url={shareUrl} quote={title}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={title}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl} title={title}>
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <PinterestShareButton url={shareUrl} media={imageUrl} description={title}>
                    <PinterestIcon size={32} round />
                </PinterestShareButton>
                <WhatsappShareButton url={shareUrl} title={title}>
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <RedditShareButton url={shareUrl} title={title}>
                    <RedditIcon size={32} round />
                </RedditShareButton>
            </div>
        </div>
    );
};

export default ShareImage;
