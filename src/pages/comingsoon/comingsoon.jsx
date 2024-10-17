import "../comingsoon/comingsoon.css";
import coming from "../../assets//coming_soon_board.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Assuming you are using react-router for navigation
import "preline/preline";
import Slider from "react-slick";
import Slider3D from "../slider/slider3D";
function Comingsoon() {
    const location = useLocation(); // Used to re-trigger initialization on route change

    useEffect(() => {
        // Initialize the Preline components
        window.HSStaticMethods.autoInit(["carousel", "dropdown"]);
    }, [location.pathname]);

    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="comingsoon">
                    <div class="widget-container">
                        <img className="img-fluid mx-auto" src={coming} alt="" />
                    </div>

                    <div className="col-12 mt-5 char">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-2">
                                <img
                                    class="img-fluid mx-auto character-pics"
                                    src="https://cowparadisegames.com/wp-content/uploads/2024/02/Protagoniste_artist-300x300.webp"
                                    alt="Image 1"
                                />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2 character-pics">
                                <img
                                    class="img-fluid mx-auto"
                                    src="https://cowparadisegames.com/wp-content/uploads/2024/02/Protagoniste_cook-300x300.webp"
                                    alt="Image 2"
                                />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2 character-pics">
                                <img
                                    class="img-fluid mx-auto"
                                    src="https://cowparadisegames.com/wp-content/uploads/2024/02/Protagoniste_cop-300x300.webp"
                                />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2 character-pics">
                                <img
                                    class="img-fluid mx-auto"
                                    src="https://cowparadisegames.com/wp-content/uploads/2024/02/Protagoniste_Indiana-300x300.webp"
                                />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2 character-pics">
                                <img
                                    class="img-fluid mx-auto"
                                    src="https://cowparadisegames.com/wp-content/uploads/2024/02/Protagoniste_main_Character-300x300.webp"
                                />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2 character-pics">
                                <img
                                    class="img-fluid mx-auto"
                                    src="https://cowparadisegames.com/wp-content/uploads/2024/02/Protagoniste_Nurse-300x300.webp"
                                    alt="Image 6"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="col-12 my-5 ">

                       <Slider3D/>
                       


                       {/* <div data-hs-carousel='{
 "loadingClasses": "opacity-0",
 "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
 "isCentered": true,
 "isInfiniteLoop": true,
 "slidesQty": {
   "xs": 1,
   "lg": 1.1
 },
 "isDraggable": true
}' className="relative">
   <div className="hs-carousel w-full overflow-hidden bg-white rounded-lg">
       <div className="relative min-h-72 -mx-1">
           <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing"
                style={{ transform: 'translateX(-25%)' }}>
               <div className="hs-carousel-slide px-1 ">
                   <div className=" h-100 bg-gray-500 p-6 dark:bg-neutral-900">
                       <img src="https://cowparadisegames.com/wp-content/uploads/2024/06/Toy-1.webp"/>
                      
                   </div>
               </div>
               <div className="hs-carousel-slide px-1 ">
                   <div className="h-100 bg-red-900 p-6 dark:bg-neutral-800">
                       <img src="https://cowparadisegames.com/wp-content/uploads/2024/02/11CowParadiseExploration.00_00_16_27.Still001.webp" className="img-fluid"/>
                   </div>
               </div>
               <div className="hs-carousel-slide px-1 ">
                   <div className=" h-100 bg-gray-300 p-6 dark:bg-neutral-700">
                       <img src="https://cowparadisegames.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-02-21-at-23.50.15-scaled-1.webp" className="img-fluid"/>
                   </div>
               </div>
           </div>
       </div>
   </div>

   <button
       type="button"
       className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
       <span className="text-2xl" aria-hidden="true">
           <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="m15 18-6-6 6-6"></path>
           </svg>
       </span>
       <span className="sr-only">Previous</span>
   </button>
   <button
       type="button"
       className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
       <span className="sr-only">Next</span>
       <span className="text-2xl" aria-hidden="true">
           <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="m9 18 6-6-6-6"></path>
           </svg>
       </span>
   </button>
</div> */}

                   </div>
                 
                </div>
            </div>
        </div>
    );
}

export default Comingsoon;
