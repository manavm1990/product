export default {
  // TODO: Use a fxn. 🏭 to use a 'resource'
  async index() {
    const res = await fetch(
      "https://my-json-server.typicode.com/Claim-Academy-JS/products/products"
    )

    return await res.json()
  },
}
