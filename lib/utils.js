import { getItems } from '../services/storeService'

// Function that allows to obtain the info of the Id of all the products
export async function getPathsFromIds() {
    const items = await getItems()

    const ids = items.map((item) => {
        return {
            params: {
                id: convertToPath(item.title),
            },
        }
    })

    return ids
}

// Function that returns the element of the array that matches the parameter
export async function getItemData(id) {
    const items = await getItems()
    const product = items.find((item => convertToPath(item.title) === id))

    return {
        id: id,
        data: product,
    }
}

// Function to display the product name in the path
export function convertToPath(title) {
    return title.toLowerCase().replace(/\s/g, '-')
}