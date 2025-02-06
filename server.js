const express = require('express');
const app = express();

const statusCodes = {
    200: "OK",
    201: "Created",
    204: "No Content",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    429: "Too Many Requests",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout"
};

app.get('/status-info', (req, res) => {
    const code = parseInt(req.query.code, 10);  
    
    if (statusCodes[code]) {
        res.status(code).json({
            code: code,
            description: statusCodes[code]
        });
    } else {
        res.status(400).json({
            error: "Invalid status code"
        });
    }
});

const port = 3000; 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
