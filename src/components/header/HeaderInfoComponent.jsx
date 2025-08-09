// react hooks
import { useState } from "react";
// icons
import { TbMap2 } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


const HeaderInfoComponent = () => {

    const [toggle, setToggle] = useState(true)

    return (
        <div className=" wrapper" >
            {toggle &&
                <div className="py-2.5 flex flex-col gap-2 items-center lg:flex-row lg:justify-between text-darkBlue ">
                    <p>Need Help? Call us: (+98) 0123 456 789</p>
                    {/*  */}
                    <div className="flex flex-col items-center lg:flex-row gap-3">
                        <div className="flex-centar-between gap-1">
                            <TbMap2 size={20} /> <p>Track Your Delivery</p>
                        </div>
                        <div className="flex-centar-between gap-1">
                            <IoLocationSharp size={20} /> <p>Our Store</p>
                        </div>
                        <div className="cursor-pointer hover:scale-[1.2] justify-self-center lg:justify-self-end" onClick={() => setToggle(false)}>
                            <MdKeyboardArrowUp size={30} />
                        </div>
                    </div>
                </div>
            }
            {!toggle && <MdKeyboardArrowDown size={30} onClick={() => setToggle(true)} className="justify-self-center lg:justify-self-end cursor-pointer hover:scale-[1.2]" />}
        </div>
    )
}

export default HeaderInfoComponent
