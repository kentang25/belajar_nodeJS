// const getCurrentDate = () => new Date(). toISOString().split('T')[0];

// const formatCurrency = (amount, currency = 'USD') => {
//     return new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency : currency
//     }),format(amount);
// };

// exports.getCurrentDate = getCurrentDate;
// exports.formatCurrency = formatCurrency;

// const { getCurrentDate, formatCurrency } = require('./modules');

// console.log('current date :', getCurrentDate());
// console.log('formatted currency :', formatCurrency(1000, 'USD'));

// function getUserPromise(id){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve ({id: id, name: 'John'});
//         }, 1000);

//     });


// }

// const http = require('http');
// const path = require('path');

// const {getCurrentDate, formatCurrency} = require('./myfirst');
// const Logger = require('./servis');

// const logger = new Logger('App');

// const server = http.createServer((req, res) => {
//     try{
//         logger.log(`Request received for ${req.url}`);

//         // res.writeHead(200, {'Content-Type': 'text/html'});

//          res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(`<h1>Welcome to our app!</h1>`);
//     res.write(`<p>Current date: ${getCurrentDate()}</p>`);
//     res.write(`<p>Formatted amount: ${formatCurrency(99.99)}</p>`);
//         res.end();
//     }catch(error){
//         logger.error(error);
//         res.writeHead(500, {'Content-Type': 'text/html'});
//         res.end('<h1>Internal Server Error</h1>');
//     }
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     logger.log(`Server running at http://localhost:${PORT}`);
// })

import * as math from './myfirst.js';
console.log(math.add(3,3));
// console.log(subtract(2,1));

import mainFunction from './myfirst.js';
mainFunction();