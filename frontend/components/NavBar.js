import Link from "next/link";

const NavBar = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm2 0v14h14V3H4z"
              clip-rule="evenodd"
            />
            <path d="M6 6a1 1 0 011-1h2a1 1 0 110 2H7a1 1 0 01-1-1z" />
            <path
              fill-rule="evenodd"
              d="M6 8a1 1 0 011-1h2a1 1 0 110 2H7a1 1 0 01-1-1zm0 2a1 1 0 011-1h2a1 1 0 110 2H7a1 1 0 01-1-1zm0 2a1 1 0 011-1h2a1 1 0 110 2H7a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="ml-3 text-xl">My Shop</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#" class="mr-5 hover:text-gray-900">Home</Link>
          <Link href="#" class="mr-5 hover:text-gray-900">About</Link>
          <Link href="#" class="mr-5 hover:text-gray-900">Products</Link>
          <Link href="#" class="mr-5 hover:text-gray-900">Contact</Link>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Login
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
