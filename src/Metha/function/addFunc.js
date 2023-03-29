const addToCart = (product, params) => {
  try {
    if (!product) {
      throw new Error("Product not found");
    }
    console.log("addToCart called with product:", product.id);
    window.location.href = `/produc/${product.id}`;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = addToCart;