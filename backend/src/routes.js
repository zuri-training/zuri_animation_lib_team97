const requestHandler = (req, res) => {
    console.log("Server running!");
    res.end("<h1>Welcome to the server</h1>");
}
module.exports = requestHandler;