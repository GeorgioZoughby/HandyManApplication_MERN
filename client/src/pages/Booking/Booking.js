import React, { useState, useEffect } from "react";
import "./Booking.css";
import logo from "../../assets/dark_logo.png";
import { Link, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import CardForm from "./CardForm";
import { Card } from "@mui/material";

const steps = [
    { label: 'Describe your task', step: 1 },
    { label: 'Browse Taskers & Prices', step: 2 },
    { label: 'Confirm Payment', step: 3 },
];



const MultiStepForm = () => {
    const [paymentDetails, setPaymentDetails] = useState({
        taskerRate: "0.00",
        trustAndSupportFee: "0.00",
        totalAmount: "0.00"
    });    
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(2);
    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const handleNext = () => {
        if (page < pageCount) {
            setPage(page + 1);
        }
    }

    const { id } = useParams();
    useEffect(() => {
        const fetchSubservices = async () => {
            try {
                const response = await fetch(`/api/subservices/${id}?page=${page}`);
                const data = await response.json();
                setSubservices(data.subservices || []);
                setPageCount(data.pageCount || 1);
            } catch (error) {
                console.error("Error fetching subservices:", error);
            }
        };

        if (id) fetchSubservices();
    }, [id, page]);

    const getImageUrl = (imagePath) => {
        return `/assets/taskers/${imagePath}`;
    };
    const [value, setValue] = useState([2, 30]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [selectedNationalities, setSelectedNationalities] = useState({
        lebanese: false,
        international: false,
    });

    const [selectedGender, setSelectedGender] = useState({
        male: false,
        female: false,
    });

    const handleGenderChange = (gender) => {
        setSelectedGender((prev) => ({
            ...prev,
            [gender]: !prev[gender],
        }));
    };

    const handleNationalityChange = (nationality) => {
        setSelectedNationalities((prev) => ({
            ...prev,
            [nationality]: !prev[nationality],
        }));
    };

    useEffect(() => {
        const fetchTaskers = async () => {
            try {
                const { male, female } = selectedGender;
                const { lebanese, international } = selectedNationalities;
                const [minPrice, maxPrice] = value;

                let url = `/api/taskers/by-subservice/${id}?page=${page}`;
                const filters = [];

                if (male || female) filters.push(`genders=${[male && 'male', female && 'female'].filter(Boolean).join(',')}`);
                if (lebanese || international) filters.push(`nationalities=${[lebanese && 'lebanese', international && 'international'].filter(Boolean).join(',')}`);
                filters.push(`minPrice=${minPrice}`, `maxPrice=${maxPrice}`);

                if (filters.length) url = `/api/taskers/by-filters?${filters.join('&')}&serviceId=${id}&page=${page}`;

                console.log("Fetching URL:", url);

                const response = await fetch(url);
                const data = await response.json();
                setTaskers(data.taskers || []);
                setPageCount(data.pageCount || 1); // Update page count from response
            } catch (error) {
                console.error("Error fetching taskers:", error);
            }
        };

        fetchTaskers();
    }, [selectedGender, selectedNationalities, value, id, page]);


    const valuetext = (value) => {
        return `$${value}`;
    };
    const [activeStep, setActiveStep] = useState(1);
    const [subservices, setSubservices] = useState([]);
    const [selected, setSelected] = useState(null);
    const [taskDetails, setTaskDetails] = useState("");
    const [taskers, setTaskers] = useState([]);
    const [address, setAddress] = useState("");
    const [floor, setFloor] = useState("");

    const handleCheckboxChange = (id) => {
        setSelected((prevSelected) => (prevSelected === id ? null : id));
    };

    const handleTaskDetailsChange = (event) => setTaskDetails(event.target.value);
    const handleAddressChange = (event) => setAddress(event.target.value);
    const handleFloorChange = (event) => setFloor(event.target.value);

    useEffect(() => {
        fetch(`/api/taskers/by-subservice/${id}&page=${page}`)
            .then((response) => response.json())
            .then((data) => setTaskers(data))
            .catch((error) => console.error("Error fetching taskers:", error));
    }, [id]);

    const nextStep = () => setActiveStep((prev) => Math.min(prev + 1, steps.length));
    const ToPayment = (price) => {
        const trustAndSupportFee = price * 0.2; // 20%
        const totalAmount = price + trustAndSupportFee;

        const paymentDetails = {
            taskerRate: price.toFixed(2),
            trustAndSupportFee: trustAndSupportFee.toFixed(2),
            totalAmount: totalAmount.toFixed(2)
        };
        setPaymentDetails(paymentDetails);

        console.log(paymentDetails);

        setActiveStep((prev) => Math.min(prev + 1, steps.length));
    };
    const prevStep = () => setActiveStep((prev) => Math.max(prev - 1, 1));

    const totalSteps = steps.length;
    const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

    return (
        <>
            <div className="navbar-progress">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="main-container">
                    <div className="step-container" style={{ '--progress-width': width }}>
                        {steps.map(({ step, label }) => (
                            <div className="step-wrapper" key={step}>
                                <div
                                    className="step-style"
                                    style={{
                                        '--border-color': activeStep >= step ? '#207663' : '#F3E7F3',
                                    }}
                                >
                                    {activeStep > step ? (
                                        <div className="check-mark">L</div>
                                    ) : (
                                        <span className="step-count">{step}</span>
                                    )}
                                </div>
                                <div className="steps-label-container">
                                    <span className="step-label">{label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {activeStep === 1 && (
                <>
                    <div className="form-detail-title">
                        <i className="bi bi-pencil-square"></i>
                        <h3>Tell us about your task. We use these details to show Taskers in your area who fit your needs.</h3>
                    </div>

                    <div className="middle flex items-center justify-center mt-5">
                        <div className="card-form-info">
                            <h1 className="text-black font-semibold text-2xl text-center">{subservices.subservice_name}</h1>
                            <div className="mt-8 ml-20 mr-20">
                                <label htmlFor="full_address" className="form-label">Full Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="full_address"
                                    value={address}
                                    onChange={handleAddressChange}
                                    required
                                />
                            </div>
                            <div className="mt-3 ml-20 md:ml-20 mr-40 md:mr-96">
                                <label htmlFor="floor" className="form-label">Floor #</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floor"
                                    value={floor}
                                    onChange={handleFloorChange}
                                    required
                                />
                            </div>
                            <div className="mt-5 ml-20 mr-96">
                                <h6 className="estimated-time-title mb-3 font-bold" style={{ color: "var(--dark-green)" }}>
                                    Estimated Time
                                </h6>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={selected === "easy"}
                                        onChange={() => handleCheckboxChange("easy")}
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label ml-2 text-nowrap" htmlFor="flexCheckDefault">
                                        Easy - Est. 1 hr
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={selected === "medium"}
                                        onChange={() => handleCheckboxChange("medium")}
                                        id="flexCheckChecked1"
                                    />
                                    <label className="form-check-label ml-2 text-nowrap" htmlFor="flexCheckChecked1">
                                        Medium - Est. 2-3 hrs
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={selected === "hard"}
                                        onChange={() => handleCheckboxChange("hard")}
                                        id="flexCheckChecked2"
                                    />
                                    <label className="form-check-label ml-2 text-nowrap" htmlFor="flexCheckChecked2">
                                        Hard - Est. 4+ hrs
                                    </label>
                                </div>
                            </div>
                            <div className="mt-8 ml-20 mr-20">
                                <label htmlFor="task_details" className="form-label">Tell us the details of your task</label>
                                <textarea
                                    className="form-control h-24 align-text-top"
                                    id="task_details"
                                    value={taskDetails}
                                    onChange={handleTaskDetailsChange}
                                    required
                                ></textarea>
                                <h4 className="italic text-sm mt-2">If you need two or more Taskers, please post additional tasks for each Tasker needed.</h4>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {activeStep === 2 && (
                <>
                    <div className="form-detail-title">
                        <i className="bi bi-people-fill"></i>
                        <h3>Filter and sort to find your Tasker. Then view their availability to request your date and time.</h3>
                    </div>
                    <div className="middle-container mt-5">
                        <div className="flex flex-col gap-8">
                            <div className="tasker-filtering-options">
                                <div className="task-filter">
                                    <div className="task-filter-title">
                                        <h3 className="font-bold text-black mb-4">Date</h3>
                                        <div className="task-filter-options flex flex-wrap gap-3">
                                            <button className="task-filter-option">Today</button>
                                            <button className="task-filter-option">Within 3 days</button>
                                            <button className="task-filter-option mb-4">Within a week</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="task-filter mt-4">
                                    <div className="task-filter-title">
                                        <h3 className="font-bold text-black mb-4">Time</h3>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="flexCheckDefault"
                                            />
                                            <label className="form-check-label ml-2 text-nowrap" htmlFor="flexCheckDefault">
                                                Morning (8am - 12pm)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="flexCheckChecked1"
                                            />
                                            <label className="form-check-label ml-2 text-nowrap" htmlFor="flexCheckChecked1">
                                                Afternoon (12pm - 5pm)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input mb-4"
                                                type="checkbox"
                                                id="flexCheckChecked2"
                                            />
                                            <label className="form-check-label ml-2 text-nowrap mb-4" htmlFor="flexCheckChecked2">
                                                Evening (5pm - 9:30pm)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="task-filter mt-4">
                                    <div className="task-filter-title">
                                        <h3 className="font-bold text-black mb-4">Nationality</h3>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="lebanese"
                                                onChange={() => handleNationalityChange('lebanese')}
                                                checked={selectedNationalities.lebanese}
                                            />
                                            <label className="form-check-label ml-2 text-nowrap" htmlFor="flexCheckDefault">
                                                Lebanese
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="international"
                                                onChange={() => handleNationalityChange('international')}
                                                checked={selectedNationalities.international}
                                            />
                                            <label className="form-check-label ml-2 text-nowrap mb-4" htmlFor="flexCheckChecked1">
                                                International
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="task-filter mt-4">
                                    <div className="task-filter-title">
                                        <h3 className="font-bold text-black mb-4">Gender</h3>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                checked={selectedGender.male}
                                                onChange={() => handleGenderChange("male")}
                                                className="form-check-input"
                                            />
                                            <label className="form-check-label ml-2 text-nowrap" htmlFor="flexCheckDefault">
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                checked={selectedGender.female}
                                                onChange={() => handleGenderChange("female")}
                                                className="form-check-input"
                                            />
                                            <label className="form-check-label ml-2 text-nowrap mb-4" htmlFor="flexCheckChecked1">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="font-bold mb-4">Price</h3>
                                    <Box sx={{ width: 300 }}>
                                        <Slider
                                            min={2}
                                            max={30}
                                            step={2}
                                            value={value}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            valueLabelFormat={valuetext}
                                            getAriaLabel={() => 'Budget range'}
                                            getAriaValueText={valuetext}
                                            sx={{
                                                color: '#207663',
                                                '& .MuiSlider-thumb': {
                                                    backgroundColor: '#207663',
                                                },
                                                '& .MuiSlider-track': {
                                                    backgroundColor: '#207663',
                                                },
                                                '& .MuiSlider-rail': {
                                                    backgroundColor: '#c8e6c9',
                                                },
                                                '& .MuiSlider-valueLabel': {
                                                    backgroundColor: '#207663',
                                                },
                                            }}
                                        />
                                    </Box>
                                </div>
                            </div>
                            <div className="tasker-policy">
                                <div className="flex gap-3"><i className="bi bi-file-lock-fill text-2xl"></i>Always have peace of mind. All Taskers undergo ID and criminal background checks. </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            {taskers.length > 0 ? (
                                taskers.map((tasker) => (
                                    <div className="tasker-person" key={tasker._id}>
                                        <div className="flex flex-col gap-3">
                                            <img src={getImageUrl(tasker.imageURL)} alt={tasker.name} className="tasker-image" />
                                            <button
                                                onClick={() => ToPayment(tasker.services[0]?.price)}
                                                className="choose-tasker">
                                                Select & Continue
                                            </button>
                                            <span className="italic text-gray-500 text-xs w-48 text-wrap text-center">
                                                You can chat with your Tasker, adjust task details, or change task time after booking.
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex justify-between" style={{ width: "550px" }}>
                                                <div className="tasker-fullname">{tasker.name}</div>
                                                <div className="tasker-price">${tasker.services[0]?.price.toFixed(2)}/hr</div>
                                            </div>
                                            <span className="tasker-nationality mb-4">{tasker.nationality}</span>
                                            <div className="tasker-rating mb-4">★ 5.0 (9 reviews)</div>
                                            <div className="tasker-aboutme flex flex-col gap-2">
                                                <span className="font-bold text-green-900 ">About Me</span>
                                                {tasker.description}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="tasker-person  items-center justify-center">
                                    <p>No taskers available for this filter combination.</p>
                                </div>
                            )}
                            <div className="flex justify-end gap-2">
                                <button
                                    disabled={page === 1}
                                    style={{ display: page === 1 ? 'none' : 'inline-block' }}
                                    className="pagination-button"
                                    onClick={handlePrevious}
                                >
                                    <i class="bi bi-arrow-left-short"></i>
                                </button>
                                <span className="pagination-button" id="current_page">{page}</span>
                                <button disabled={page === pageCount} className="pagination-button" onClick={handleNext}><i class="bi bi-arrow-right-short"></i></button>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {activeStep === 3 && (
                <div className="flex gap-8 justify-center mt-8">
                    <div className="flex flex-col gap-8">
                        <div className="payment-method-container">
                            <div className="flex flex-col gap-4">
                                <span className="payment-title text-black font-bold text-3xl">
                                    Confirm Details
                                </span>

                                <span className="payment-subtitle text-green-900 font-bold text-xl">
                                    Deposit Details
                                </span>
                                <div className="flex justify-between">
                                    <span className="payment-subtitle text-black  text-base">
                                        Tasker Hourly Rate
                                    </span>
                                    <span className="payment-subtitle text-black  text-base">
                                        {paymentDetails?.taskerRate} $
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="payment-subtitle text-black  text-base">
                                        Trust & Support Fee
                                    </span>
                                    <span className="payment-subtitle text-black  text-base">
                                        {paymentDetails?.trustAndSupportFee} $
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="payment-subtitle text-black font-bold  text-base">
                                        Total Amount
                                    </span>
                                    <span className="payment-subtitle text-black font-bold  text-base">
                                        {paymentDetails?.totalAmount} $
                                    </span>
                                </div>
                                <span className="b-gray-bottom"></span>
                                <span className="payment-subtitle text-green-900 font-bold text-xl">
                                    Payment Confirmation
                                </span>
                                <span className="payment-subtitle text-black italic text-sm">
                                    You will be billed in the amount of your Tasker's hourly rate and our commission fee.
                                    Don't worry - this amount will be deducted from your task's total amount when your task is completed!
                                </span>
                                <CardForm />
                                <div className="flex justify-center">
                                    <Link to="/home">
                                    <button className="mt-4 text-nowrap text-white p-3 bg-green-800 rounded-3xl">Confirm & Pay</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}

            <div className="buttons-container mt-4 mb-4">
                <button
                    className="button-style"
                    onClick={prevStep}
                    disabled={activeStep === 1}
                >
                    Back
                </button>
                <button
                    className="button-style"
                    onClick={nextStep}
                    disabled={activeStep === totalSteps || activeStep === 2}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default MultiStepForm;