var restify = require('restify');
var server = restify.createServer({});

server.use(restify.CORS());

var products = [
    { id: 1, name: 'Foo', description: "Foo is Bar" },
    { id: 2, name: 'Milk', description: "Foo is Baz" }
];

server.get('api/products', function (req, res, next) {
    res.send(products);
});


server.get('api/products/:id', function (req, res, next) {
    var found = products.filter(function (p) {
        return p.id === parseInt(req.params.id);
    });

    if (found.length === 0) {
        res.send(404, "Not found");
    }
    res.send(found[0]);
});

server.listen(3000, function () {
    console.log('Node API running on port 3000');
});