const products = [
  { id: 1, title: "T-Shirt", price: 890, stock: 5, pictureUrl: "https://i.ibb.co/Kw5bCnZ/1.jpg", category: "T-shirts", description: "T-shirt."},
  { id: 2, title: "Shirt", price: 1800, stock: 5, pictureUrl: "https://i.ibb.co/7ztnxxN/2.jpg", category: "Shirts", description: "Shirt."},
  { id: 3, title: "V-Neck T-Shirt", price: 890, stock: 5, pictureUrl: "https://i.ibb.co/DDBNrfN/3.jpg", category: "T-shirt", description: "V-Neck T-Shirt"},
  { id: 4, title: "Blouse", price: 1500, stock: 5, pictureUrl: "https://i.ibb.co/qp2R7wn/4.jpg", category: "Blouses", description: "V-Neck Blouse"}
]

export const getProductsByCategory = (category) => {
  return new Promise((res) => {
      const productos = products.filter(product => product.category === category);
      setTimeout(() => {
          res(productos);
      }, 2000);
  });
}
export const getProducts = () => {
  return new Promise((res) => {
      setTimeout(() => {
          res(products);
      }, 2000);
  });
}
export const getProduct = (id) => {
  return new Promise((resolve) => {
      const prod = products.find(p => p.id === parseInt(id))
      setTimeout(() => {
          resolve(prod)
      }, 1000)
  })
}