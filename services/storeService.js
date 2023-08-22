// Function to get items from API
export async function getItems() {
    const request = await fetch('http://localhost:3000/api/items')
    const items = await request.json()

    return items
}

// Function to display the last 3 new items
export async function getLatestItems() {
    const items = await getItems()

    return items.slice(0, 3)
}