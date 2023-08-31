import styleHome from '../styles/Home.module.css'
import styleProduct from '../styles/Product.module.css'
import Layout from '../components/Layout'
import { getLatestItems } from '../services/storeService'
import Product from '../components/Product'

export default function Home({ items }) {
    return (
        <Layout title='Welcome'>
            <div className={styleHome.banner}>
                <div className={styleHome.bannerInfo}>
                    <h2>Shop GitHub 2023 Collection</h2>
                </div>
            </div>

            <h3>Latest Products</h3>
            <div className={styleProduct.items}>
                {
                    items && items.map((item) => (
                        <Product key={item.id} item={item} showAs='item' />
                    ))
                }
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await getLatestItems()

    return {
        props:{
            items: res,
        },
    }
}
