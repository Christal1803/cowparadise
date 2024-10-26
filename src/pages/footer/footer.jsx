import "../footer/footer.css";
import fl from "../../assets/flogo.jpg";
function Footer() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <footer class="mt-auto w-full py-10 px-5 sm:px-6 lg:px-8 mx-auto footer-bg">
          <div class="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-10 mt-4 pb-70">
            <div class="col-span-full hidden lg:col-span-1 lg:block mt-5">
              <a
                class="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
                href="#"
                aria-label="Brand"
              >
                <img src={fl} />
              </a>
              <p class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400 f-30">
                Cowparadise is not just a game it’s an adventure filled with
                laughter, exploration, and friendship.
              </p>
            </div>

            <div className="ml-10 mt-5">
              <h6 class="f-15 dark:text-neutral-100 text-white">Quick Links</h6>

              <div class="mt-3 grid space-y-3 ">
                <p>
                  <a class="inline-flex gap-x-2 text-white" href="#">
                    Home
                  </a>
                </p>
                <p>
                  <a class="inline-flex gap-x-2 text-white " href="#">
                    Game Trailer
                  </a>
                </p>
                <p>
                  <a class="inline-flex gap-x-2 text-white " href="#">
                    Marketplace
                  </a>
                </p>
                <p>
                  <a class="inline-flex gap-x-2 text-white " href="#">
                    Coming Soon
                  </a>
                </p>
                <p>
                  <a class="inline-flex gap-x-2 text-white " href="#">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-5">
              <h6 class="f-15 dark:text-neutral-100 text-white">Other Links</h6>

              <div class="mt-3 grid space-y-3 ">
                <p>
                  <a class="inline-flex gap-x-2 text-white " href="#">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a class="inline-flex gap-x-2 text-white " href="#">
                    Terms & Conditions
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-5">
              <h6 class="f-15 dark:text-neutral-100 text-white">
                Follow us on Social Media
              </h6>

              <div class="mt-3 d-inline space-y-3 ">
                
                  <a class="inline-flex gap-x-2 text-white " href="#">
                  <i class="fa-brands fa-facebook"></i>
                  </a>
             
                  <a class="inline-flex gap-x-2 text-white ms-3" href="#">
                  <i class="fa-brands fa-twitter"></i>
                  </a>
                
              
                  <a class="inline-flex gap-x-2 text-white ms-3" href="#">
                  <i class="fa-brands fa-youtube"></i>
                  </a>
               
                
              </div>
            </div>
          </div>
        </footer>

        <div class="pt-4 border-t text-center border-gray-200 dark:border-neutral-700 footer-bg pb-4">
          <h6 className="text-white">
            © cowparadisegames – All rights reserved
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
