import Link from 'next/link'
import { useAppContext } from './StateWrapper'
import style from '../styles/Menu.module.css'

export default function Menu() {

    const cart = useAppContext();

    // Function to open cart from menu button
    function handleOpenCart() {
        cart.openCart()
    }

    return (
        <nav className={style.menu}>
            <div>
                <Link href='/' className={style.link}>Home</Link>
                <Link href='/store' className={style.link}>Store</Link>
                <Link href='/faq' className={style.link}>FAQ</Link>
            </div>
            <div>
                <a href='#' className={style.link} onClick={handleOpenCart}>
                    Cart ({cart.getNumberOfItems()})
                </a>
            </div>
        </nav>
    );
}