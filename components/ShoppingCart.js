import { useAppContext } from './StateWrapper'
import Product from './Product'
import style from '../styles/ShoppingCart.module.css'

export default function ShoppingCart() {

    const cart = useAppContext();

    // Function to close cart from button
    function handleCloseCart() {
        cart.closeCart()
    }

    return (
        <div className={style.shoppingCart} style={{display: cart.isOpen ? 'block' : 'none'}}>
            <button onClick={handleCloseCart} className={style.btnClose}>
                Close
            </button>

            {
                cart.items.length === 0 ? (
                    <div className={style.empty}>Cart is empty</div>
                ) : (
                    <>
                        <h3>Your products</h3>
                        <div>
                            {
                                cart.items.map(item => <Product key={item.id} item={item} showAs='ListItem' qty={item.qty} />)
                            }
                        </div>
                    </>
                )
            }            
        </div>
    );
}