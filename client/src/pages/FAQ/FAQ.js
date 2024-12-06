import React, { useState } from "react";
import "./FAQ.css";

const FaqPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "1. How much will the service cost?",
            answer: `The cost depends on the type of task, the estimated time to complete it, and the professional’s hourly rate. We provide transparent pricing upfront before you confirm your booking.`,
        },
        {
            question: "2. Are your handymen licensed and insured?",
            answer: `Yes! All of our handymen are vetted, experienced professionals. Depending on the task, they may be licensed and insured. We prioritize your safety and satisfaction, ensuring that each handyman meets our high standards.`,
        },
        {
            question: "3. Can I cancel or reschedule my booking?",
            answer: `Yes, you can cancel or reschedule your booking. Please refer to our cancellation policy, which allows changes up to 3 hours before the appointment without a fee. After that, a small cancellation/rescheduling fee may apply.`,
        },
        {
            question: "4. What if I’m not satisfied with the work?",
            answer: `We want you to be completely satisfied with the service. If you're not happy with the job, please let us know right away. We offer a satisfaction guarantee and will work with you to resolve any issues. Depending on the situation, we may send someone back to fix the issue at no additional charge.`,
        },
        {
            question: "5. Do I need to provide the tools and materials?",
            answer: `For most tasks, our handymen bring their own tools and equipment. However, for specific jobs that require specialty items (such as specific paint colors or custom parts), you may be asked to provide those. You'll be notified in advance if this is the case.`,
        },
        {
            question: "6. How do I pay for the service?",
            answer: `Payment is securely processed through our platform. You can pay using a variety of methods, including credit/debit cards. Payment is due once the service is completed.`,
        },
        {
            question: "7. Can I request the same handyman for future bookings?",
            answer: `Yes, after your first booking, you can request to work with the same handyman again, provided they are available. Our platform allows you to see the profiles and reviews of each handyman, helping you choose the best professional for your needs.`,
        },
        {
            question: "8. Are your handymen available on weekends or holidays?",
            answer: `Yes! We offer flexible scheduling, and many of our handymen are available on weekends, evenings, and even holidays. Simply select your preferred time during the booking process.`,
        },
    ];

    const toggleFaq = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-container mb-5">
            <h1 className="faq-question mb-3">Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""
                            }`}
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="faq-question">{faq.question}</div>
                        {activeIndex === index && (
                            <div className="faq-answer">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqPage;
