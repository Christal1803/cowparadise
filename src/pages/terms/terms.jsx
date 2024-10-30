import React from 'react';
import '../terms/terms.css';
import logo from "../../assets/logo.jpg";
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import PageTitle from '../pagetitle';
function Terms() {

    return (
        <div>
            <PageTitle title="Terms & Conditions" />
            <div className="container-fluid">
                <div className='row'>
                    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full ">
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
                <div className=''>
                    <h1 class="mb-4">Welcome to CowParadise Games!</h1>
                    <p>
                        These Terms & Conditions (“Terms”) govern your access to and use of the CowParadise Games website (the “Website”). By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access or use the Website.
                    </p>

                    <h2 class="mt-3">1. User Agreement</h2>
                    <p className='my-3'>
                        You must be at least 13 years old to access or use the Website. By using the Website, you represent and warrant that you are at least 13 years old and of legal capacity to enter into this agreement.
                    </p>


                    <h2 class="mt-3">2. Acceptable Use</h2>
                    <p className='my-3'>You agree to use the Website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                    <ul className='mx-4'>
                        <li>Interfere with or disrupt the Website or servers or networks connected to the Website.</li>
                        <li>Violate any laws or regulations.</li>
                        <li>Transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, obscene, vulgar, hateful, or racially or ethnically objectionable.</li>
                        <li>Impersonate any person or entity.</li>
                        <li>Infringe on the intellectual property rights of any third party.</li>
                        <li>Collect or store personal data about other users without their express consent.</li>
                    </ul>

                    <h2 class="mt-3">3. Intellectual Property</h2>
                    <p className='my-3'>
                        The Website and all content included on the Website, such as text, graphics, logos, images, and software, are the property of CowParadise Games or its licensors and protected by copyright and other intellectual property laws. You may not modify, publish, transmit, reverse engineer, participate in the transfer or sale of, create derivative works from, or exploit in any way any of the content, in whole or in part.
                    </p>

                    <h2 class="mt-3">4. Disclaimers</h2>
                    <p className='my-3'>
                        The Website is provided “as is” and without warranties of any kind, express or implied. CowParadise Games disclaims all warranties, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. CowParadise Games does not warrant that the Website will be uninterrupted, error-free, or virus-free.
                    </p>

                    <h2 class="mt-3">5. Limitation of Liability</h2>
                    <p className='my-3'>
                        CowParadise Games shall not be liable for any damages arising out of or related to your use of the Website, including, but not limited to, direct, indirect, incidental, consequential, or punitive damages.
                    </p>

                    <h2 class="mt-3">6. Termination</h2>
                    <p className='my-3'>
                        CowParadise Games may terminate your access to the Website at any time, for any reason, without notice.
                    </p>

                    <h2 class="mt-3">7. Governing Law</h2>
                    <p className='my-3'>
                        These Terms shall be governed by and construed in accordance with the laws of [your state or jurisdiction], without regard to its conflict of law provisions.

                    </p>

                    <h2 class="mt-3">8. Entire Agreement</h2>
                    <p className='my-3'>
                        These Terms constitute the entire agreement between you and CowParadise Games with respect to your use of the Website.

                    </p>

                    <h2 class="mt-3">9. Changes to Terms & Conditions</h2>
                    <p className='my-3'>
                        CowParadise Games reserves the right to update these Terms at any time by posting the revised Terms on the Website. You are encouraged to review the Terms periodically for any changes. Your continued use of the Website after the posting of any revised Terms constitutes your acceptance of the revised Terms.

                    </p>

                    <h2 class="mt-3">10. Contact Us</h2>
                    <p className='my-3'>
                        If you have any questions about these Terms, please contact us at contact@cowparadisegames.com.                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Terms;
