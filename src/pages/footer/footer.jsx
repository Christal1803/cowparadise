import "../footer/footer.css";

function Footer() {
  return (
    <div>
      <footer class="mt-auto w-full py-10 px-5 sm:px-6 lg:px-8 mx-auto footer-bg">
        <div class="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-10 mt-4 pb-70">
          <div class="col-span-full hidden lg:col-span-1 lg:block">
            <a
              class="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
              href="#"
              aria-label="Brand"
            >
              <img src="https://cowparadisegames.com/wp-content/uploads/2024/02/cropped-Logo-final-scaled.webp" />
            </a>
            <p class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400 f-30">
              Cowparadise is not just a game it’s an adventure filled with
              laughter, exploration, and friendship.
            </p>
          </div>

          <div className="ml-10">
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

          <div>
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

          <div>
            <h6 class="f-15 dark:text-neutral-100 text-white">
              Follow us on Social Media
            </h6>

            <div class="mt-3 grid space-y-3 ">
              <p>
                <a class="inline-flex gap-x-2 text-white " href="#">
                  Facebook
                </a>
              </p>
              <p>
                <a class="inline-flex gap-x-2 text-white " href="#">
                  Twittwe
                </a>
              </p>
              <p>
                <a class="inline-flex gap-x-2 text-white " href="#">
                  Youtube
                </a>
              </p>
              <p>
                <a
                  class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-6ee55cb"
                  href="https://www.facebook.com/profile.php?id=61552567389239&amp;mibextid=9R9pXO"
                  target="_blank"
                >
                  <span class="elementor-screen-only">Facebook</span>
                   
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="pt-4 border-t text-center border-gray-200 dark:border-neutral-700">
          <h6 className="text-white">
            © cowparadisegames – All rights reserved
          </h6>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
