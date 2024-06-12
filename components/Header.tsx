import Image from "next/image"

function Header() {


 
  

  return (
    <header className="sticky top-0 z-50">
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
          <div className="mt-2 flex items-center  rounded-l-md flex-grow sm:flex-grow-0">
          <Image 
    
    src="https://i.postimg.cc/zf0SwbLq/IMG-20230429-WA0000.jpg"
    width={90}
    height={14}
    style={{objectFit:"contain"}}
    className="cursor-pointer rounded-full p-1" alt="gh"
/>

          </div>

          <div className="hidden sm:flex items-center h-10 rounded-md 
           bg-yellow-400 hover:bg-yellow-500 flex-grow">
            <input className="p-2 h-full w-6 flex-grow 
            flex-shrink rounded-l-md
            focus:outline-none px-4" type="text" />
            <MagnifyingGlassIcon className="h-12 p-4" />
          </div>

          <div className="text-white flex items-center 
          text-xs space-x-6 mx-6 whitespace-nowrap">
            <div className="cursor-pointer link">
                <p className="hover:underline">
              {'Sign In'}
                </p>
                <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>

            <div  className="link">
                <p>Returns</p>
                <p className="font-extrabold md:text-sm">Orders</p>
            </div>

            <div  className="relative link flex items-center">
                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400
                 text-center rounded-full text-black font-bold ">items.length</span>
                <ShoppingCartIcon className="h-10" />
                <p className="hidden  md:inline font-extrabold md:text-sm mt-2">Basket</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
          <p className="link flex items-center">
            <Bars3Icon className="h-6 mr-1" />
            All
          </p>
          {/* <p className="link ">Prime video</p> */}
          {/* <p className="link ">Business</p> */}
          <p className="link ">Todays Deals</p>
          {/* <p className="link hidden lg:inline">Electronics</p> */}
          {/* <p className="link hidden lg:inline">Food & Grocery</p> */}
          {/* <p className="link hidden lg:inline">Prime</p>
          <p className="link hidden lg:inline">Buy Again</p>
          <p className="link hidden lg:inline">Shopping Toolkit</p> */}
          <p  className="link inline">Contact Us</p>        
        </div>

    </header>  
  )
}
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";

export default Header
