import styles from '../styles/Product.module.css'
import { useAppContext } from './StateWrapper'

export default function CartBtn({ item }) {

    const cart = useAppContext();

    // Function to call the method that adds items to the cart
    function handleClick() {
        cart.addItemToCart(item)
    }

    return (
        <button className={styles.btnCart} onClick={handleClick}>
            Add to Cart
        </button>
    );
}