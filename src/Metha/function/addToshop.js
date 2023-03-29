  const addToCshop = (product, params) => {
    try {
      if (!product) {
        throw new Error("Product not found");
      }
      console.log("addToCart called with product:", product.id);
      window.location.href = `/payments`;
    } catch (error) {
      console.error(error.message);
    }
  };
  
  module.exports = addToCshop;
  