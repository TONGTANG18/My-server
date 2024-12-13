exports.get = (req,res) => {
    res.send('Get Customers');
}

exports.getById = (req,res) => {
    res.send("Customer id: " + req.params.id);
}

exports.getname = (req,res) => {
    res.send("Customer name: " + req.params.name);
}

exports.create = (req,res) => {
    res.send("Create new customer");
}

exports.put = (req,res) => {
    res.send("put customer id: " + req.params.id);
}

exports.patch = (req,res) => {
    res.send("patch customer id:" + req.params.id);
}

exports.delete = (req,res) => {
    res.send("Delete customer id: " + req.params.id);
}