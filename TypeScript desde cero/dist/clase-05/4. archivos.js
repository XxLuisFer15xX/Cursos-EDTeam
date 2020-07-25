"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Usar una libreria externa JavaScript: ladash
// package.json
// npm init -y
// npm install lodash --save
var lodash_1 = require("lodash");
function numeroAleatorio(a, b) {
    return lodash_1.random(a, b);
}
console.log('numeroAleatorio(1, 10)', numeroAleatorio(1, 10));
