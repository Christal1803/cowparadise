import React from 'react';
import '../privacy/privacy.css';
import logo from "../../assets/logo.jpg";
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import PageTitle from '../pagetitle';
function Privacy() {

    return (

        <div>
            <PageTitle title="Privacy & Policy" />
            <div className="container-fluid">
                <div className='row'>
                    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full dark:bg-neutral-800 dark:border-neutral-700">
                        <nav className="w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2">
                            <div className="flex justify-between items-center gap-x-1">
                                <Link to="/">
                                    <img width="250" height="213" src={logo} className="aux-attachment aux-featured-image attachment-2560x613 aux-attachment-id-1367" alt="logo" data-ratio="4.18" data-original-w="2560"></img>
                                </Link>
                                <button type="button" className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-header-base-collapse" aria-expanded="false" aria-controls="hs-header-base" aria-label="Toggle navigation" data-hs-collapse="#hs-header-base">
                                    <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                    <svg className="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    <span className="sr-only">Toggle navigation</span>
                                </button>
                            </div>

                            <div id="hs-header-base" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-header-base-collapse">
                                <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                                    <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                                        <div className="grow">
                                            <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">

                                                <Link to="/#home" className="header-menu m p-2 flex items-center text-sm text-gray-800 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                                    HOME
                                                </Link>
                                                <Link to="/#trailer" className="header-menu m p-2 flex items-center text-sm text-gray-800 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                                    GAME TRAILER
                                                </Link>
                                                <Link to="/#marketplace" className="header-menu m p-2 flex items-center text-sm text-gray-800 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                                    MARKETPLACE
                                                    </Link>
                                                <Link to="/#comingsoon" className="header-menu m p-2 flex items-center text-sm text-gray-80 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                                    COMING SOON
                                                    </Link>
                                                <Link to="/#contact" className="header-menu m p-2 flex items-center text-sm text-gray-800 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                                    CONTACT US
                                                    </Link>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-x-1.5">
                                            <Link to="/endless-runner-game" target="_blank">
                                                <a className="header-button py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-500" >
                                                    Play Now
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
            <div className='container-fluid my-4 char'>
                <div className='row'>
                    <h1 class="mb-4">Welcome to CowParadise Games!</h1>
                    <p>
                        This Privacy Policy describes how CowParadise Games (“we”, “us”, or “our”) collects, uses, and discloses your personal information when you use our website (the “Website”).
                    </p>

                    <h2 class="mt-3">1. Information We Collect</h2>
                    <p className='my-3'>We collect the following information about you:</p>
                    <ul className='mx-4'>
                        <li>
                            Information you provide directly to us: We collect information that you provide directly to us when you use the Website, such as your name, email address, and any other information you choose to share in comments, forums, or other interactive features.
                        </li>
                        <li>
                            Information collected automatically: We collect certain information automatically when you use the Website, such as your IP address, browser type, operating system, the referring website, and the pages you visit on the Website. This information is used to analyze trends, administer the Website, track users’ movements around the Website, and gather demographic information about our user base.
                        </li>
                    </ul>

                    <h2 class="mt-3">2. Use of Cookies</h2>
                    <p className='my-3'>
                        We may use cookies to collect information about your use of the Website. Cookies are small data files that are placed on your device by a website when you visit the website. They can be used to store a variety of information, such as your preferences or the pages you have visited on the Website.
                    </p>
                    <p>
                        You can control or disable cookies through your browser settings. However, if you disable cookies, you may not be able to use certain features of the Website.
                    </p>

                    <h2 class="mt-3">3. Use of Your Information</h2>
                    <p className='my-3'>We use your information to:</p>
                    <ul className='mx-4'>
                        <li>Provide and operate the Website.</li>
                        <li>Respond to your inquiries and requests.</li>
                        <li>Send you information about our products and services.</li>
                        <li>Analyze trends and improve the Website.</li>
                        <li>Administer the Website.</li>
                        <li>Comply with applicable laws and regulations.</li>
                    </ul>

                    <h2 class="mt-3">4. Disclosure of Your Information</h2>
                    <p className='my-3'>
                        We may disclose your information to third-party service providers who help us operate the Website and provide our services. These service providers are contractually obligated to keep your information confidential and to use it only for the purposes for which we disclose it to them.
                    </p>
                    <p>
                        We may also disclose your information if we are required to do so by law or if we believe that such disclosure is necessary to protect our rights or the rights of others.
                    </p>

                    <h2 class="mt-3">5. Data Retention</h2>
                    <p className='my-3'>
                        We will retain your information for as long as your account is active or as needed to provide you with services. We will also retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
                    </p>

                    <h2 class="mt-3">6. Your Rights</h2>
                    <p className='my-3'>You have certain rights with respect to your personal information. These rights may vary depending on the laws of your jurisdiction. You may have the right to:</p>
                    <ul className='mx-4'>
                        <li>Access your personal information.</li>
                        <li>Rectify inaccurate personal information.</li>
                        <li>Request the deletion of your personal information.</li>
                        <li>Object to the processing of your personal information.</li>
                        <li>Restrict the processing of your personal information.</li>
                        <li>Request the portability of your personal information.</li>
                        <li>You can exercise these rights by contacting us at contact@cowparadisegames.com.</li>
                    </ul>

                    <h2 class="mt-3">7. Children's Privacy</h2>
                    <p className='my-3'>
                        The Website is not directed to children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us at [your email address]. We will take steps to delete the information from our records.
                    </p>

                    <h2 class="mt-3">8. Changes to Privacy Policy</h2>
                    <p className='my-3'>
                        We may update this Privacy Policy at any time by posting the revised Privacy Policy on the Website. You are encouraged to review the Privacy Policy periodically for any changes. Your continued use of the Website after the posting of any revised Privacy Policy constitutes your acceptance of the revised Privacy Policy.
                    </p>

                    <h2 class="mt-3">9. Contact Us</h2>
                    <p className='my-3'>
                        If you have any questions about this Privacy Policy, please contact us at contact@cowparadisegames.com.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Privacy;
