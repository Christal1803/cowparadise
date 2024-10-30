import React from 'react';
import '../endless/endless.css';
import logo from "../../assets/logo.jpg";
import Aplay from "../../assets/5a902db97f96951c82922874.png";
import Gplay from "../../assets/GetItOnGooglePlay_Badge_Web_color_English.png";
import { Link } from 'react-router-dom';

import Footer from '../footer/footer';
import PageTitle from '../pagetitle';
function Endless() {

    return (

        <div>
            <PageTitle title="Endless-Runner-Game" />
            <div className="container-fluid">
                <div className='row'>
                    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full dark:bg-neutral-800 dark:border-neutral-700">
                        <nav className="w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2">
                            <div className="flex justify-between items-center gap-x-1">
                                <Link to="/">
                                    <img width="250" height="213" src={logo} className="aux-attachment aux-featured-image attachment-2560x613 aux-attachment-id-1367" alt="logo" data-ratio="4.18" data-original-w="2560"></img>
                                </Link>
                                <button type="button" className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-header-base-collapse" aria-expanded="false" aria-controls="hs-header-base" aria-label="Toggle navigation" data-hs-collapse="#hs-header-base">
                                    <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line fill="black" x1="3" x2="21" y1="6" y2="6" /><line fill="black" x1="3" x2="21" y1="12" y2="12" /><line fill="black" x1="3" x2="21" y1="18" y2="18" /></svg>
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

                    <div>
                        <div className="video-container">
                            <video className="d-block w-100 h-100" autoPlay muted loop>
                                <source src="https://cowparadisegames.com/wp-content/uploads/2024/09/videoplayback-1.mp4" type="video/mp4" />
                            </video>
                            <div className="carousel-caption d-none d-md-block">
                                <div className='text-start v-cation'>
                                    <h5 className='video-caption-title'>Cinematic Trailer </h5>
                                    <button className='v-c-btn' data-bs-target="#carouselExampleFade" data-bs-slide="prev">PREV </button>
                                    <span className='v-c-btn'>/</span>
                                    <button className='v-c-btn' type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">NEXT</button>
                                </div>
                            </div>
                        </div>

                        <div className='detailofgame my-3'>
                            <div>

                                <h4 className='nameofgame my-2'>Endless Runner Game</h4>
                            </div>
                            <div className='store-imgs my-2'>
                                <span href="https://play.google.com/store/apps/details?id=com.CowParadise.CowRun&pcampaignid=web_share" target="_blank"><img src={Gplay} className='img-fluid store-imgs me-4' /></span>
                                <span href="https://apps.apple.com/us/app/cow-paradise-cow-run/id6557071895" target='_blank'><img src={Aplay} className='img-fluid store-imgs' /></span>
                            </div>
                        </div>
                    </div>
                    <h1 class="mb-4">Welcome to CowRun, where the adventure never ends! Take control of your cow and race through stunning landscapes filled with challenges and surprises.</h1>
                    <p>
                        Key features:
                    </p>

                    <h2 class="mt-3">1. Information We Collect</h2>
                    <p className='my-3'>We collect the following information about you:</p>
                    <ul className='mx-4'>
                        <li>
                            ⁠Endless Adventure: Run through beautifully crafted environments that keep changing, ensuring a fresh experience every time you play.                        </li>
                        <li>
                            ⁠Easy Controls: Simple swipe controls make CowRun easy and fun for everyone. Dodge obstacles, jump over hurdles, and slide under barriers with ease.                        </li>
                        <li>
                            ⁠Customizable Cows: Personalize your cow with a variety of skins and stand out on the run.
                        </li>
                        <li>
                            Compete with Friends: Connect with friends and compete for the top spot on the leaderboards. Show off your skills and prove you have the fastest cow in town.
                        </li>
                        <li>
                            ⁠Daily Challenges: Take on daily challenges and quests to earn extra rewards and keep the game fresh and engaging.
                        </li>
                        <li>
                            Stunning Graphics: Enjoy high-quality graphics and animations that bring the world of CowRun to life. Immerse yourself in vibrant and dynamic environments.
                        </li>
                    </ul>

                    <p className='mt-3'>Join the endless fun and excitement of CowRun today! Download now and see how far you can go. Ready, set, moo!</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Endless;
