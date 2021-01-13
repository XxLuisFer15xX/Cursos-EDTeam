// Usar una libreria externa JavaScript: ladash
// package.json
// npm init -y
// npm install lodash --save
import {random} from 'lodash';

function numeroAleatorio(a: number, b: number){
	return random(a,b);
}

console.log('numeroAleatorio(1, 10)', numeroAleatorio(1, 10));