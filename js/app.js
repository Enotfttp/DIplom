// Подключение пакетов
var fs = require('fs');
const mysql = require('mysql2/promise')
const config = require('./config');
// Рендер файла html
// function onRequest(request, response) {
// 	response.writeHead(200, {'Content-Type': 'text/html'});
// 	fs.readFile('./index.html', null, function(err, data) {
// 		if (err) {
// 			response.writeHead(404);
// 			response.write('File not found!');
// 		} else {
// 			response.write(data);
// 		}
// 		response.end();
// 	});
// }


// Асинхронная работа базы
async function main() { 
	const conn = await mysql.createConnection(config);
	const [rows, fields] = await conn.execute('select * from user where id_user = 1');
	console.log(rows);
	conn.end();
} 

async function f() { 
	let a = await main();
	console.log(a);
	//let registration = await registration();
}


// Регистрация
async function registration() {
	let login = document.querySelector(".login").value;
	let password = document.getElementById("pas_2").value;
	if (await script.pas() === true) { 
		try { 
			const conn = await mysql.createConnection(config);
			await conn.execute("INSERT INTO `user` (`id_user`, `login`, `password`, `role`) VALUES (null ,'6' ,'6' ,'user') ");
		} catch { 
			console.error(err);
		}
	} else {
		console.log("Проверьте правильность введенных данных");
	}
}
f();
