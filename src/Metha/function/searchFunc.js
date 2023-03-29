async function searchProductById(productId) {
    try {
      const response = await fetch(`https://api.yourdomain.com/products/${productId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Usage
  searchProductById(123).then(product => {
    console.log(product);
  });
  