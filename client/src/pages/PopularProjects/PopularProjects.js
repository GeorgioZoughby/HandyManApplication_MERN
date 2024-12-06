import React, { useEffect, useState } from "react";
import "./PopularProjects.css";
import  { Link } from "react-router-dom";


const PopularProjects = () => {

    const getImageUrl = (imagePath) => {
        return `/assets/popular_services/${imagePath}`;
    };

    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/popularservices');
                const data = await response.json();
                setServices(data);
            } catch (error) {
                console.error("Error fetching popular services:", error);
            }
        };

        fetchData();
    }, []);

    const renderCards = (servicesArray) => {
        return servicesArray.map((service, index) => (
            <React.Fragment key={index}>
                {localStorage.getItem("token") ? (
                    <Link to={`/booking/${service.subService?._id}`}>
                        <div className="popular-card">
                            <div className="popular-card-image">
                                <img src={getImageUrl(service.imageURL)} alt={service.subService?.subservice_name ?? "No Photo"} />
                            </div>
                            <div className="popular-card-info">
                                <h3>{service.subService?.subservice_name ?? "No Data"}</h3>
                                <p>{`Projects starting at ${service.price} $`}</p>
                            </div>
                        </div>
                    </Link>
                ) : (
                    <Link to="/login">
                        <div className="popular-card">
                            <div className="popular-card-image">
                                <img src={getImageUrl(service.imageURL)} alt={service.subService?.subservice_name ?? "No Photo"} />
                            </div>
                            <div className="popular-card-info">
                                <h3>{service.subService?.subservice_name ?? "No Data"}</h3>
                                <p>{`Projects starting at ${service.price} $`}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </React.Fragment>
        ));
    };

    const chunkedServices = [];
    for (let i = 0; i < services.length; i += 4) {
        chunkedServices.push(services.slice(i, i + 4));
    }

    return (
        <>
            <div className="popular-projects-container">
                <div className="title">Popular Projects</div>
            </div>
            {chunkedServices.map((group, index) => (
                <div className="popular-projects-container" key={index}>
                    {renderCards(group)}
                </div>
            ))}
        </>
    );
};

export default PopularProjects;
