import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Product.module.css'
import { convertToPath } from '../lib/utils'
import CartBtn from './CartBtn'

export default function Product({ item, showAs, qty = 0 }) {

    // Shows product information in detail
    if (showAs === 'Page') {
        return (
            <div className={style.page}>
                <div className={style.image}>
                    <Image 
                        src={item.image}
                        alt={item.description}
                        width={350}
                        height={350}
                    />
                </div>

                <div className={style.info}>
                    <div>
                        <h2 className={style.title}>{item.title}</h2>
                    </div>
                    <div className={style.price}>${item.price}</div>
                    <div>{item.description}</div>
                    <div>
                        <CartBtn item={item} />
                    </div>
                </div>
            </div>
        );
    }

    // Show cart products
    if (showAs === 'ListItem') {
        return (
            <div className={style.listItem}>
                <div>
                    <Image 
                        src={item.image} 
                        alt={item.description} 
                        width={80} 
                        height={80} 
                    />
                </div>
                <div>
                    <b>{item.title}</b>
                    <div>${item.price}</div>
                    {
                        qty === 0 ? '' : <div>{qty} units</div>
                    }
                    {
                        qty === 0 ? '' : <div>Subtotal: ${qty * item.price}</div>
                    }
                </div>
            </div>
        );
    }

    // Shows the list of profucts on the Store page
    return (
        <div className={style.item}>
            <div>
                <Link href={`/store/${convertToPath(item.title)}`}>
                    <Image 
                        src={item.image} 
                        alt={item.description} 
                        width={300} 
                        height={300} 
                    />
                </Link>
            </div>

            <div>
                <h3>
                    <Link href={`/store/url-to-my-component`}>
                        {item.title}
                    </Link>
                </h3>
            </div>
            <div>${item.price}</div>
        </div>
    );
}