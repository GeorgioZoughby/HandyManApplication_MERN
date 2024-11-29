import React, { useEffect, useState } from "react";
import "./ServicesMenu.css";

const ServicesMenu = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeService, setActiveService] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/services");
                if (!response.ok) {
                    throw new Error("Failed to fetch services");
                }
                const data = await response.json();
                setServices(data);
                setActiveService(data[0]?._id);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="services-menu">
            <ul className="services-list">
                {services.map((service) => (
                    <li
                        className={`services-item ${activeService === service._id ? "active" : ""
                            }`}
                        key={service._id}
                        onClick={() => setActiveService(service._id)}
                    >
                        <i className={`${service.service_icon}`}></i>
                        <span>{service.service_name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServicesMenu;
