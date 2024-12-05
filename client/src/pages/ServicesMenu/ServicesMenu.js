import React, { useEffect, useState } from "react";
import "./ServicesMenu.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";



const ServicesMenu = () => {

    const getImageUrl = (imagePath) => {
        return `/assets/service_card/${imagePath}`;
    };

    const [services, setServices] = useState([]);
    const [subservices, setSubservices] = useState([]);
    const [serviceCard, setServiceCard] = useState([]);
    const [filteredSubservices, setFilteredSubservices] = useState([]);
    const [filteredServiceCard, setFilteredServiceCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeService, setActiveService] = useState(null);

    useEffect(() => {
        const fetchServicesAndSubservices = async () => {
            try {
                const servicesResponse = await fetch("api/services");
                if (!servicesResponse.ok) {
                    throw new Error("Failed to fetch services");
                }
                const servicesData = await servicesResponse.json();
                setServices(servicesData);

                const subservicesResponse = await fetch("api/subservices");
                if (!subservicesResponse.ok) {
                    throw new Error("Failed to fetch subservices");
                }
                const subservicesData = await subservicesResponse.json();
                setSubservices(subservicesData);

                const servicecardsResponse = await fetch("api/servicecard");
                if (!servicecardsResponse.ok) {
                    throw new Error("Failed to fetch subservices");
                }
                const serviceCardData = await servicecardsResponse.json();
                setServiceCard(serviceCardData);

                if (servicesData.length > 0) {
                    setActiveService(servicesData[0]._id);
                }
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchServicesAndSubservices();
    }, []);

    useEffect(() => {
        if (!activeService) return;
        const filtered = subservices.filter(subservice => subservice.service === activeService);
        setFilteredSubservices(filtered);
        const filtered_cards = serviceCard.filter(card => card.service_card_id?._id === activeService);
        setFilteredServiceCard(filtered_cards);
    }, [activeService, subservices, serviceCard]);

    if (loading) return <Loader type="spin" color="var(--green)" width={50} height={50} />;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
            <div className="services-menu">
                <ul className="services-list">
                    {services.map((service) => (
                        <li
                            className={`services-item ${activeService === service._id ? "active" : ""}`}
                            key={service._id}
                            onClick={() => setActiveService(service._id)}
                        >
                            <i className={`${service.service_icon}`}></i>
                            <span>{service.service_name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="subservices-container">
                {filteredSubservices.length > 0 ? (
                    filteredSubservices.map((subservice) => (
                        <div key={subservice._id} className="subservice-item">
                            <Link to={`/booking/${subservice._id}`}>
                                <h3>{subservice.subservice_name}</h3>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No subservices available for this service.</p>
                )}
            </div>
                {filteredServiceCard.length > 0 ? (
                    filteredServiceCard.map((card_service) => (
                        <div className="service-card" style={{ backgroundColor: card_service.service_card_color }}>                            <div className="image-container">
                                <img
                                    src={getImageUrl(card_service.service_card_image)}
                                    alt="Service"
                                />
                            </div>
                            <div className="service-card-content">
                                <h3 className="service-card-title">
                                    {card_service.service_card_id?.service_name ?? "Error"}
                                </h3>
                                <div className="service-card-description">
                                    <i className="bi bi-check"></i>
                                    <p>{card_service.service_card_desc1}</p>
                                </div>
                                <div className="service-card-description">
                                    <i className="bi bi-check"></i>
                                    <p>{card_service.service_card_desc2}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No service card available for this service.</p>
                )}

        </>
    );
};

export default ServicesMenu;
