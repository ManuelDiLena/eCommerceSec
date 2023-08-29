import { createContext, useContext, useState } from "react"

const AppContext = createContext({
    isOpen: false,
    items: [],
    openCart: () => {},
    closeCart: () => {},
    addItemToCart: () => {},
    getNumberOfItems: () => {},
})

export default function StateWrapper({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);

    // Function to open cart window
    function handleOpenCart() {
        setIsOpen(true)
    }

    // Function to close cart window
    function handleCloseCart() {
        setIsOpen(false)
    }

    // Function to add a product to the cart
    function handleAddItemToCart(item) {
        const temp = [...items]
        const found = temp.find(product => product.id === item.id)

        if (found) {
            found.qty++
        } else {
            item.qty = 1
            temp.push(item)
        }

        setItems([...temp])
    }

    // Function to add the number of products in the cart
    function handleNumberOfItems() {
        const total = items.reduce((acc, item) => acc + item.qty, 0)

        return total
    }

    return (
        <AppContext.Provider 
            value={{
                isOpen,
                items,
                openCart: handleOpenCart,
                closeCart: handleCloseCart,
                addItemToCart: handleAddItemToCart,
                getNumberOfItems: handleNumberOfItems,
            }}
        >{children}</AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext)
}