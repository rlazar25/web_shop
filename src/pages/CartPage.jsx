// mui
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
// router
import { Link } from "react-router"
// redux and slices
import { useDispatch, useSelector } from "react-redux"
import { clearCartAction, decreaseQuantityAction, increaseQuantityAction, removeProductAction } from "../store/cartSlice";
// react
import { useRef, useState } from "react";
// custome hook
import useTopLoad from "../hooks/useTopLoad";
// toastify
import { showToast } from "../utils/toastifyHelper";
import { toastifyMessages } from "../utils/toastifyMessages";


const CartPage = () => {

    const [activeCoupon, setActiveCoupon] = useState("");
    const { cartProducts, totalPrice } = useSelector(state => state.cartStore);
    const dispatch = useDispatch();

    const couponRef = useRef();

    const handleApplyCoupon = () => {
        setActiveCoupon(couponRef.current.value);
        couponRef.current.value = ""
    }

    // load page at top
    useTopLoad()

    const handleRemoveProduct = (product) => {
        dispatch(removeProductAction(product));
        showToast.error(toastifyMessages.cart.removed)
    }

    const cartClear = () => {
        dispatch(clearCartAction());
        showToast.error(toastifyMessages.cart.clear)
    }

    return (
        <div className="wrapper py-[40px]">
            {cartProducts.length > 0 ? //show cart
                <div className="lg:flex gap-5">
                    {/* cart table */}
                    <div className="lg:w-[70%]">
                        <TableContainer className="rounded-lg" component={Paper} >
                            <Table sx={{ minWidth: 250 }} aria-label="simple table">
                                <TableHead className='bg-midBlue'>
                                    <TableRow>
                                        <TableCell align="left">Products</TableCell>
                                        <TableCell align="center">Price</TableCell>
                                        <TableCell align="center">Quantity</TableCell>
                                        <TableCell align="center">Subtotal</TableCell>
                                        <TableCell align="center">Remove</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cartProducts.map((product) => (
                                        <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">
                                                <Link to={`/singleProduct/${product.id}`} className="flex gap-2 items-center">
                                                    <img src={product.thumbnail} alt={product.title} className='w-[70px] border border-mainBlue rounded-lg object-contain ' />
                                                    <p title={product.title} className="hidden md:inline font-semibold text-mainBlue truncate ">{product.title}</p>
                                                </Link>
                                            </TableCell>
                                            <TableCell align="center">${product.price}</TableCell>
                                            <TableCell align="center">
                                                <div className="flex justify-center items-center text-[18px] font-medium">
                                                    <button onClick={() => dispatch(decreaseQuantityAction(product))} className="cursor-pointer border rounded-l-lg border-darkBlue w-8 h-8 text-center bg-lightBlue hover:bg-midBlue duration-300">-</button>
                                                    <span className="w-[50px] flex justify-center items-center border border-darkBlue h-8 bg-lightBlue">{product.quantity}</span>
                                                    <button onClick={() => dispatch(increaseQuantityAction(product))} className="cursor-pointer border rounded-r-lg border-darkBlue w-8 h-8 text-center bg-lightBlue hover:bg-midBlue duration-300">+</button>
                                                </div>
                                            </TableCell>
                                            <TableCell align="center">${(product.productPriceTotal * product.quantity).toFixed(2)}</TableCell>
                                            <TableCell align="center">
                                                <button
                                                    onClick={() => handleRemoveProduct(product)}
                                                    className="btn bg-red text-lightBlue border-red hover:bg-transparent hover:text-red"
                                                >Remove</button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className="flex items-center justify-between lg:justify-start my-5 gap-4">
                            <Link to="/" className="btn bg-orange border-orange text-lightBlue hover:bg-transparent hover:text-orange">Continue shopping</Link>
                            <button onClick={() => cartClear()} className="btn bg-red border-red text-lightBlue hover:bg-transparent hover:text-red">Clear Cart</button>
                        </div>
                    </div>
                    {/* Total price */}
                    <div className="lg:w-[30%]">
                        <TableContainer component={Paper} className>
                            <Table>
                                <TableHead className="bg-midBlue">
                                    <TableRow>
                                        <TableCell align="center">Total Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell >
                                            <div className="py-2 flex justify-between items-center text-darkBlue">
                                                <p className="text-lg">Subtotal:</p>
                                                <p className={activeCoupon === "kale" ?
                                                    "font-semibold text-xl line-through" :
                                                    "font-semibold text-xl "}>${totalPrice.toFixed(2)}</p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        {/* coupon code */}
                                        <TableCell>
                                            <div className="flex flex-col gap-3 py-2">
                                                <input
                                                    ref={couponRef}
                                                    type="text"
                                                    className="border-[2px] border-darkBlue p-2 rounded-lg placeholder:text-midBlue"
                                                    placeholder="Enter coupon code for discount" />
                                                {activeCoupon === "kale" ?
                                                    <button className="btn text-lightBlue bg-grey line-through" >Coupon Code Applied</button> :
                                                    <button className="btn text-lightBlue hover:text-darkBlue" onClick={handleApplyCoupon}>Apply Coupon Code</button>
                                                }
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <div className="py-2 flex justify-between items-center text-darkBlue">
                                                <p className="text-lg">Total amount:</p>
                                                <p className="font-semibold text-xl">${activeCoupon === "kale" ? (totalPrice / 2).toFixed(2) : totalPrice.toFixed(2)}</p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    {/* buy / checkout */}
                                    <TableRow>
                                        <TableCell>
                                            <button className="btn my-2 text-lightBlue hover:text-darkBlue w-full">Buy</button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div> : // If cart is empty
                <div className="text-center py-[50px]">
                    <h2 className="text-4xl text-red">Cart is empty</h2>
                    <p className="mb-4">Please add a product</p>
                    <Link to="/" className="text-darkBlue underline text-lg ">Continue shopping</Link>
                </div>}
        </div>
    )
}

export default CartPage
