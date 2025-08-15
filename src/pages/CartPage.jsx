import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router"
import { removeProductAction } from "../store/CartSlice";

const CartPage = () => {

    const { cartProducts } = useSelector(state => state.cartStore);
    const dispatch = useDispatch();

    return (
        <div className="wrapper py-[40px]">
            {cartProducts.length > 0 ?
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
                                            <img src={product.thumbnail} alt="" className='w-[90px] h-[90px] border border-mainBlue rounded-lg object-cover ' />
                                            <p title={product.title} className="hidden md:inline text-xl font-semibold text-mainBlue truncate ">{product.title}</p>
                                        </Link>
                                    </TableCell>
                                    <TableCell align="center">${product.price}</TableCell>
                                    <TableCell align="center">
                                        <div className="flex justify-center items-center text-[18px] font-medium">
                                            <button className="cursor-pointer border rounded-l-lg border-darkBlue w-9 h-8 text-center bg-lightBlue hover:bg-midBlue duration-300">-</button>
                                            <span className="w-16 flex justify-center items-center border border-darkBlue h-8 bg-lightBlue">{product.quantity}</span>
                                            <button className="cursor-pointer border rounded-r-lg border-darkBlue w-9 h-8 text-center bg-lightBlue hover:bg-midBlue duration-300">+</button>
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">${(product.productPriceTotal).toFixed(2)}</TableCell>
                                    <TableCell align="center">
                                        <button
                                            onClick={() => dispatch(removeProductAction(product))}
                                            className="btn bg-red text-lightBlue border-red hover:bg-transparent hover:text-red"
                                        >Remove</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> :
                <div className="text-center py-[50px]">
                    <h2 className="text-4xl text-red">Cart is empty</h2>
                    <p className="mb-4">Please add a product</p>
                    <Link to="/" className="text-darkBlue underline text-lg ">
                        Continue shopping
                    </Link>
                </div>}
        </div>
    )
}

export default CartPage
