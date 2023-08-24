import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Product.module.css'
import { convertToPath } from '../lib/utils';

export default function Product({ item, showAs }) {

    if (showAs === 'Page') {
        return (
            <div>
                <h2>{item.title}</h2>
            </div>
        );
    }

    if (showAs === 'ListItem') {
        return <div>List Item</div>
    }

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
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}