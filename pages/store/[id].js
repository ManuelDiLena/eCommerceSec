import Layout from '../../components/Layout'
import Product from '../../components/Product'
import { getItemData, getPathsFromIds } from '../../lib/utils';

export default function ProductPage({ productInfo }) {
    return (
        <Layout>
            <Product item={productInfo} showAs='Page' />
        </Layout>
    );
}

// Function to prepare dynamic routes
export async function getStaticPaths() {
    const paths = await getPathsFromIds()

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const id = params.id
    const product = await getItemData(id)

    return {
        props: {
            productInfo: product,
        }
    }
}