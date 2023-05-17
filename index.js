const fs = require("fs");
const { add, sub, divide, multiply } = require("./utils");
const { createServer } = require("http");

//simple Node Js Server
const server = createServer((req, res) => {
    switch (req.url) {
        case "/": {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Hello world");
            break;
        }
        case "/products": {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>Page Not Found 404 Error</h1>");
            break;
        }
        case "/userList": {
            fs.readFile("myContext.txt", (error, data) => {
                if (data) {
                    res.writeHead(200, { "Content-Type": "text/json" });
                    res.end(data);
                } else {
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.end(`<h1>Page Not Found 404 ${error}</h1>`);
                }
            });
        }
    }
});
server.listen(5000, () => {
    console.log("listening to port");
});

//module exports function
console.log(add(10, 20));
console.log(sub(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));

//read
fs.writeFileSync("mycontentNew.txt", "welcome to the website", (err) => {
    if (err) {
        console.log(error);
    }
});
//append
fs.appendFileSync(
    "mycontentNew.txt",
    "\n this is a appending meessage",
    (error) => {
        console.log(error);
    }
);
//create a folder
// fs.mkdir(path.join(__dirname, "test"), (error) => {
//     if (error) {
//         console.log(error);
//     }
// });
