import Layout from '../../components/Layout'
import { getItems } from '../../services/storeService';

export default function Index({items}) {
    return (
        <Layout>
            <h1>Store</h1>
            {
                items && items.map(item => <div key={item.id}>{item.title}</div>)
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