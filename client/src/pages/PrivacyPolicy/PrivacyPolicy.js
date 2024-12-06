import React from "react";
import "./PrivacyPolicy.css";

const PrivacyContent = () => {
    const privacySections = [
        {
            title: "1. Information We Collect",
            content: (
                <>
                    <p>
                        We collect two types of information from our users: personal
                        information and non-personal information.
                    </p>
                    <h3>Personal Information</h3>
                    <p>
                        Personal information is any data that can be used to identify you.
                        We may collect the following types of personal information:
                    </p>
                    <ul>
                        <li>User Account Information: Name, email, phone number, etc.</li>
                        <li>Job Details: Task descriptions, location, photos, etc.</li>
                        <li>Payment Information: Credit card or other payment details.</li>
                        <li>Communications: Messages, feedback, or inquiries.</li>
                    </ul>
                    <h3>Non-Personal Information</h3>
                    <p>
                        Non-personal information is data that does not directly identify
                        you, such as:
                    </p>
                    <ul>
                        <li>Device Information: IP address, browser type, etc.</li>
                        <li>
                            Usage Data: Pages visited, time spent on pages, interaction data.
                        </li>
                        <li>
                            Cookies and Tracking Technologies: Usage patterns, user
                            preferences, etc.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: "2. How We Use Your Information",
            content: (
                <ul>
                    <li>To provide and improve services.</li>
                    <li>To process payments securely.</li>
                    <li>To communicate updates or notifications.</li>
                    <li>To ensure security and legal compliance.</li>
                </ul>
            ),
        },
        {
            title: "3. Sharing Your Information",
            content: (
                <>
                    <p>
                        We may share your information with service providers, third-party
                        vendors, or for legal compliance. For example:
                    </p>
                    <ul>
                        <li>With handymen to complete tasks.</li>
                        <li>With payment processors or other partners.</li>
                        <li>During business transactions like mergers.</li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <div className="privacy-policy">
            <div className="content-wrapper gap-48">
                <div className="flex flex-col gap-8">
                    <h1 className="text-green-900 font-bold text-3xl">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-black">
                        At QuickFix, we value the privacy of our users and are committed to
                        protecting your personal information. This Privacy Policy outlines
                        how we collect, use, disclose, and safeguard your information when
                        you use our services. By using our Site or services, you agree to
                        these practices.
                    </p>
                    {privacySections.map((section, index) => (
                        <div key={index} className="privacy-section">
                            <h2 className="text-green-700 font-semibold text-2xl mb-4">
                                {section.title}
                            </h2>
                            <div className="text-black text-base">{section.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrivacyContent;
