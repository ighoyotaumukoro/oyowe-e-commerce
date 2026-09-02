import { useState, createContext, useContext } from "react";
import { getProductById } from "../data/products";

export const WishlistContext = createContext(null);

export default function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  function addToWishlist(productId) {
    const existing = wishlistItems.find((item) => item.id === productId);
    if (existing) {
      const currentQuantity = existing.quantity;
      const updatedWishlistItems = wishlistItems.map((item) =>
        item.id === productId
          ? { id: productId, quantity: currentQuantity + 1 }
          : item,
      );

      setWishlistItems(updatedWishlistItems);
    } else {
      setWishlistItems([...wishlistItems, { id: productId, quantity: 1 }]);
    }
  }

  function getWishlistItemsWithProducts(){
    return wishlistItems.map(item => ({
      ...item,
      product: getProductById(item.id)
    })).filter(item => item.product)
  }
  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, getWishlistItemsWithProducts}}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  return context;
}
