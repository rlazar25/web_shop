import logo from "../../assets/logo-dark.png"
// icons
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterComponent =() => {
    return (
        <footer className=" bg-midBlue">
            <div className='wrapper grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4 mt-4 py-[50px] px-6 lg:px-0'>
                <div className="flex flex-col gap-6 items-center">
                    <img src={logo} alt="logo" className='w-[150px] ' />
                    <p>64 st james boulevard hoswick , ze2 7zj</p>
                    <div className="flex gap-4 justify-center border-t-[2px] py-6 self-stretch ">
                        <FaFacebookF size={24} className=' cursor-pointer hover:text-orange' />
                        <FaXTwitter size={24} className=' cursor-pointer hover:text-orange' />
                        <FaWhatsapp size={24} className=' cursor-pointer hover:text-orange' />
                    </div>
                </div>
                <div className="text-center ">
                    <h2 className='text-[20px] font-semibold' >Find product</h2>
                    <ul className='flex flex-col mt-4 gap-3'>
                        <li>Brownze arnold</li>
                        <li>Chronograph blue</li>
                        <li>Smart phones</li>
                        <li>Automatic watch</li>
                        <li>Hair straighteners</li>
                    </ul>
                </div>
                <div className="text-center ">
                    <h2 className='text-[20px] font-semibold' >Get Help</h2>
                    <ul className='flex flex-col mt-4 gap-3'>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Return policy</li>
                        <li>Privacy policy</li>
                        <li>Payment policy</li>
                    </ul>
                </div>
                <div className="text-center ">
                    <h2 className='text-[20px] font-semibold' >About us</h2>
                    <ul className='flex flex-col mt-4 gap-3'>
                        <li>News</li>
                        <li>Service</li>
                        <li>Our policy</li>
                        <li>Custmer care</li>
                        <li>Faq’s</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent