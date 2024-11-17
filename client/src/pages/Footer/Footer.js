import React from "react";
import Logo from "../../assets/Logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="relative z-10 bg-black pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full mb-8 px-4 sm:w-1/2 lg:w-1/4">
                        <div>
                            <a href="/" className="inline-block max-w-[160px] mb-4">
                                <img src={Logo} alt="Logo" className="dark:hidden max-w-full" />
                                <img src={Logo} alt="Logo" className="hidden dark:block max-w-full" />
                            </a>
                            <p className="text-base text-body-color dark:text-white mb-4">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam.
                            </p>
                            <p className="text-sm text-body-color dark:text-white flex items-center">
                                <span className="mr-3 text-primary">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.1875 19.4688C14.3438 19.4688..."
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                                +012 (345) 678 99
                            </p>
                        </div>
                    </div>

                    {/* Links Group */}
                    <LinkGroup header="Resources">
                        <NavLink link="/#" label="SaaS Development" />
                        <NavLink link="/#" label="Our Products" />
                        <NavLink link="/#" label="User Flow" />
                        <NavLink link="/#" label="User Strategy" />
                    </LinkGroup>
                    <LinkGroup header="Company">
                        <NavLink link="/#" label="About Us" />
                        <NavLink link="/#" label="Contact & Support" />
                        <NavLink link="/#" label="Success Stories" />
                        <NavLink link="/#" label="Privacy Policy" />
                    </LinkGroup>
                    <LinkGroup header="Quick Links">
                        <NavLink link="/#" label="Premium Support" />
                        <NavLink link="/#" label="Our Services" />
                        <NavLink link="/#" label="Team Info" />
                        <NavLink link="/#" label="Download App" />
                    </LinkGroup>

                    {/* Social Media */}
                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <h4 className="mb-6 text-lg font-semibold text-white dark:text-white">Follow Us</h4>
                        <div className="flex space-x-3">
                            <SocialIcon />
                            <SocialIcon />
                            <SocialIcon />
                            <SocialIcon />
                        </div>
                        <p className="mt-4 text-base text-body-color dark:text-white">
                            &copy; 2025 TailGrids. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

// Link Group Component
const LinkGroup = ({ children, header }) => {
    return (
        <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
            <div>
                <h4 className="mb-6 text-lg font-semibold text-white dark:text-white">{header}</h4>
                <ul className="space-y-2">{children}</ul>
            </div>
        </div>
    );
};

// NavLink Component
const NavLink = ({ link, label }) => {
    return (
        <li>
            <a
                href={link}
                className="text-base text-body-color hover:text-primary dark:text-white"
            >
                {label}
            </a>
        </li>
    );
};

// Social Icon Component
const SocialIcon = () => {
    return (
        <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-white hover:bg-primary hover:text-white dark:border-dark-3"
        >
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="8" cy="8" r="7" />
            </svg>
        </a>
    );
};
