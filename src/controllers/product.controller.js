exports.get = (req,res) => {
    res.send('Get Product');
}

exports.getById = (req,res) => {
    res.send("Product id: " + req.params.id);
}

exports.create = (req,res) => {
    res.send("Create product");
}