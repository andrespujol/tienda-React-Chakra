const products = [
  { id: 1, title: "Remera cuello redondo", price: 890, stock: 5, pictureUrl: "https://i.ibb.co/Kw5bCnZ/1.jpg", category: "Remera", description: "Remera de algodón blanca con cuello redondo."},
  { id: 2, title: "Camisa", price: 1800, stock: 5, pictureUrl: "https://i.ibb.co/7ztnxxN/2.jpg", category: "camisas", description: "Camisa manga corta."},
  { id: 3, title: "Remera escote V", price: 890, stock: 5, pictureUrl: "https://i.ibb.co/DDBNrfN/3.jpg", category: "Remera", description: "Remera de algodón con escote en V."},
  { id: 4, title: "Blusa", price: 1500, stock: 5, pictureUrl: "https://i.ibb.co/qp2R7wn/4.jpg", category: "Blusa", description: "Blusa escote en V."}
]

export const getProduct = (id) => {
  return new Promise((resolve) => {
      const prod = products.find(p => p.id === parseInt(id))
      setTimeout(() => {
          resolve(prod)
      }, 1000)
  })
}