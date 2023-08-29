import Layout from '../../components/Layout'
import Product from '../../components/Product'
import { getItems } from '../../services/storeService'
import Image from 'next/image'
import style from '../../styles/Product.module.css'

export default function Index({ products }) {
    return (
        <Layout>
            <div className={style.items}>
                {
                    products && 
                        products.map((item) => (
                            <Product key={item.id} item={item} showAs='Default' />
                        ))
                }
            </div>
        </Layout>
    );
}

// Function to get the data from the API, create a props and inject it into Index
export async function getStaticProps() {
    const res = await getItems()

    return {
        props:{
            products: res,
        },
    }
}