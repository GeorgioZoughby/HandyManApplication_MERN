import React, { useEffect, useState } from "react";
import "./AllServices.css";
import Loader from "../Loader/Loader";

const AllServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchServices = async () => {
            try {
                const servicesResponse = await fetch('/api/services');
                const servicesData = await servicesResponse.json();

                const servicesWithSubservices = await Promise.all(
                    servicesData.map(async (service) => {
                        const subservicesResponse = await fetch(`/api/subservices/by-service/${service._id}`);
                        const subservicesData = await subservicesResponse.json();
                        return { ...service, subservices: subservicesData };
                    })
                );

                if (isMounted) {
                    setServices(servicesWithSubservices);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching services or subservices:", error);
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchServices();

        return () => {
            isMounted = false;
        };
    }, []);

    const getImageUrl = (imagePath) => {
        return `/assets/service_card/${imagePath}`;
    };

    if (loading) {
        return (
            <div className="loader-container">
                <Loader className="loader-container" style={{ marginTop: "2rem" }} type="spin" color="var(--green)" width={50} height={50} />
            </div>
        );
    }

    return (
        <>
            <div className="center-container">
                <h1 className="container-title">Hire a trusted tasker immediately</h1>
                <div className="services-container">
                    {services.map((service) => {
                        const serviceImageUrl = getImageUrl(service.imageURL);

                        return (
                            <div key={service._id} className="all-service-card">
                                <img src={serviceImageUrl} alt={service.service_name} />
                                <div className="service-title">{service.service_name}</div>
                                <div className="service-border"></div>
                                <ul className="subservices-listing">
                                    {Array.isArray(service.subservices) && service.subservices.map((subservice) => (
                                        <li key={subservice._id}>{subservice.subservice_name}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default AllServices;
