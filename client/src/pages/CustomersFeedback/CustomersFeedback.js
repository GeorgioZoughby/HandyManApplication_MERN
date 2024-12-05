import React, { useState, useEffect } from 'react';
import './CustomersFeedback.css';

const CustomersFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await fetch('api/feedbacks');
                const data = await response.json();
                setFeedbacks(data);
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            }
        };

        fetchFeedbacks();
    }, []);

    const chunkedFeedbacks = [];
    for (let i = 0; i < feedbacks.length; i += 3) {
        chunkedFeedbacks.push(feedbacks.slice(i, i + 3));
    }
    const renderStars = (count) => {
        return Array.from({ length: count }, (_, i) => (
            <span key={i} className="stars">★</span>
        ));
    };

    return (
        <>
            <div className="feedbacks-container">
                <div className="title">
                    See what happy customers are saying about QuickFix
                </div>
            </div>        
            {chunkedFeedbacks.map((group, index) => (
                <div className="feedbacks-container" key={index}>
                    {group.map((feedback, idx) => (
                        <div className="feedback-card" key={idx}>
                            <div className="feedback-card-info">
                                <h3>
                                    {feedback.feedback_customer?.name ?? "Anonymous"} {renderStars(feedback.feedback_stars)}
                                </h3>
                                <p>{feedback.feedback_comment}</p>
                                <div className="feedback-details">
                                    <span className="feedback-details-category">
                                        {feedback.feedback_product?.subservice_name ?? "No subservice"}
                                    </span>
                                    <span className="feedback-details-date">
                                        {new Date(feedback.feedback_date).toLocaleDateString('en-CA')} {/* 'en-CA' gives YYYY-mm-dd format */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};
export default CustomersFeedback;
