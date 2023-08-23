import Layout from '../../components/Layout'
import { getItems } from '../../services/storeService'
import Image from 'next/image'

export default function Index({items}) {
    return (
        <Layout>
            <h1>Store</h1>
            {
                items && items.map(item => <div key={item.id}>
                    <Image src={item.image} alt='' width='200' height={200} />
                    {item.title}</div>)
            }
        </Layout>
    );
}

// Function to get the data from the API, create a props and inject it into Index
export async function getStaticProps() {
    const res = await getItems()

    return {
        props:{
            items: res,
        },
    }
}