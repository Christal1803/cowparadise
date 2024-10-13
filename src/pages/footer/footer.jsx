import '../footer/footer.css';

function Footer() {
  return (
    <div>
<footer class="mt-auto w-full py-10 px-5 sm:px-6 lg:px-8 mx-auto bg-dark">
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
    <div class="col-span-full hidden lg:col-span-1 lg:block">
      <a class="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white" href="#" aria-label="Brand"><img src='https://cowparadisegames.com/wp-content/uploads/2024/02/cropped-Logo-final-scaled.webp'/></a>
      <p class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400 f-30">
        Cowparadise is not just a game it’s an adventure filled with laughter, exploration, and friendship.
      </p>
    </div>

    <div>
      <h6 class="f-15 font-semibold uppercase dark:text-neutral-100 text-white">Quick Links</h6>

      <div class="mt-3 grid space-y-3 ">
        <p><a class="inline-flex gap-x-2 text-white  focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Home</a></p>
        <p><a class="inline-flex gap-x-2 text-white hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Game Trailer</a></p>
        <p><a class="inline-flex gap-x-2 text-white hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Marketplace</a></p>
        <p><a class="inline-flex gap-x-2 text-white hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Coming Soon</a></p>
        <p><a class="inline-flex gap-x-2 text-white hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Contact Us</a></p>
      </div>
    </div>

    <div>
      <h6 class="f-15  font-semibold  uppercase dark:text-neutral-100 text-white">Other Links</h6>

      <div class="mt-3 grid space-y-3 ">
        <p><a class="inline-flex gap-x-2 text-white hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Privacy Policy</a></p>
        <p><a class="inline-flex gap-x-2 text-white hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Terms & Conditions</a></p>
      </div>
    </div>

    <div>
      <h6 class="f-15 font-semibold  uppercase dark:text-neutral-100 text-white">Follow us on Social Media</h6>

      <div class="mt-3 grid space-y-3 ">
        <p><a class="inline-flex gap-x-2 text-white hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Facebook</a></p>
        <p><a class="inline-flex gap-x-2 text-white hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Twittwe</a></p>
        <p><a class="inline-flex gap-x-2 text-white hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Youtube</a></p>
      </div>
    </div>

    {/* <div>
      <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">Developers</h4>

      <div class="mt-3 grid space-y-3 text-sm">
        <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Api</a></p>
        <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Status</a></p>
        <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">GitHub</a> <span class="inline text-blue-600 dark:text-blue-500">— New</span></p>
      </div>

      <h4 class="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">Industries</h4>

      <div class="mt-3 grid space-y-3 text-sm">
        <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Financial Services</a></p>
        <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Education</a></p>
      </div>
    </div> */}
  </div>

  <div class="pt-4 border-t text-center border-gray-200 dark:border-neutral-700">
    <h6 className='text-white'>© cowparadisegames – All rights reserved</h6>
  </div>
</footer>

    </div>
  );
}

export default Footer;
