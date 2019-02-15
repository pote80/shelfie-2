module.exports = {
    getAll: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.getAllProducts().then((data) => {
            res.status(200).send(data)
        })
    },

    newProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const { img_url, product_name, price } = req.body
        dbInstance.createNewProduct(img_url, product_name, price).then(response => {
            res.status(201).send(response)
        })
    },

    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const id = +req.params.id
        dbInstance.deleteProduct(id).then((response) => {
            res.status(200)
        })
    }
}