import React from "react";
import "./Categories.css";

const Categories = () => {
    const categories = [
        "General Furniture Assembly",
        "IKEA Assembly",
        "Crib Assembly",
        "PAX Assembly",
        "Bookshelf Assembly",
        "Desk Assembly"
    ];

    return (
        <div className="categories-container">
            {categories.map((category, index) => (
                <button key={index} className="category">
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
