const fs = require("fs");
const { add, sub, divide, multiply } = require("./utils");

console.log(add(10, 20));
console.log(sub(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));

//create a file if not exist
fs.writeFile("myContext.txt", "this is nodeJS task", (error) => {
    if (error) {
        console.log(error);
    } else {
        //append
        fs.appendFile("myContext.txt", "Appending this here", (error) => {
            if (error) {
                console.log(error);
            }
        });
        //readFile
        fs.readFile("myContext.txt", "utf8", (error, data) => {
            if (error) {
                console.log(error);
            } else {
                console.log(data);
            }
        });
    }
});

//create a folder
// fs.mkdir(path.join(__dirname, "test"), (error) => {
//     if (error) {
//         console.log(error);
//     }
// });
