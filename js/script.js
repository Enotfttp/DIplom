// Открытие меню
function openMenu() { 
	document.getElementById("menu").classList.toggle("active");
}
// Открытие подменю
function openSubMenu() { 
	document.getElementById("vertical-menu").classList.toggle("active");
}
// Открытие формы авторизации и затемнение фона
function openAuthoriz() { 
	document.getElementById("form-authorize").classList.toggle("active");
	document.querySelector("body").classList.toggle("shadow");
}
// Закрытие формы авторизации и затемнение фона
function closeAuthorize() { 
	document.getElementById("form-authorize").classList.toggle("active");
	document.querySelector("body").classList.toggle("shadow");
}
// Открытие формы регистрации
function openReg() { 
	document.getElementById("form-reg").classList.toggle("active");
	document.getElementById("form-authorize").classList.toggle("active");

}
// Закрытие формы регистрации и затемнение фона
function closeReg() { 
	document.getElementById("form-reg").classList.toggle("active");
	document.querySelector("body").classList.toggle("shadow");
}
// Скролл header и поялвение тени

$(window).scroll(function(){
    if ($(window).scrollTop() > 20){
       $('header').addClass('scroll');
    } else {
       $('header').removeClass('scroll');
    }
 });


//Форма Регистрации
//Проверка на повтор пароля
/**that
 * 
 *return Promise(Boolean)
 * */
async function pas() { 
	let pas_1 = document.getElementById("pas_1").value;
	let pas_2 = document.getElementById("pas_2").value;
	if (pas_1 === pas_2) {
		console.log("Всё отлично");
		$("#err-pas").css('display', 'none');
		return true;
	} else { 	
		console.log("Пароли не совпадают");
		$("#err-pas").css('color', 'red');
		$("#err-pas").css('display', 'block');
		return false;
	}
}
async function registration() {
	let login = document.querySelector(".login").value;
	let password = document.getElementById("pas_2").value;
	if (await pas() === true) {
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

//Проверка на занятое имя

function username() {
	let errUser = document.getElementById("err-username");


}
// Слайдер
