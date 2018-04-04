

// function load(seleccionElemento, element)
// {
//     var url = seleccionElemento.getAttribute('data-content-url');
//     req = new XMLHttpRequest();
//     req.open("GET", url, false);
//     req.send(null);

//     element.innerHTML = req.responseText; 
//     $("li").removeClass("active");
//     seleccionElemento.classList.add('active');
// }


$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu__bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('.header__nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.header__nav').animate({
				left: '-100%'
			});
		}
 
	});
};

$(document).ready(registro);

var contadorRegistro = 1;
function registro(){
	$('#registrarme').click(function(){
 
		if(contadorRegistro == 1){
			$('.contenedor-registro').animate({
				right: '2vw'
			});
			contadorRegistro = 0;
		} else {
			contadorRegistro = 1;
			$('.contenedor-registro').animate({
				right: '-100%'
			});
		}
 
	});
};

// $(document).ready(grow);

// function grow() {
// 	$('.contenedor-card').click(function(){
// 		$(".contenedor-card").css({
// 			"flex-grow": "1",
//  "transition": "flex-grow .3s",
// "-webkit-transition": "flex-grow .3s",

// 		});
	
 
// 	});
// };


var formulario = document.getElementById('formulario'),
	nombre = formulario.nombre,
	correo = formulario.correo,
	contraseña = formulario.contraseña,
	confirmContra = formulario.confirmContraseña,
	sexo = formulario.sexo,
	terminos = formulario.terminos,
	error = document.getElementById('error');

function validarNombre(e) {
	if (nombre.value == '' || nombre.value == null) {
		console.log('Por favor completa el nombre');
		error.style.display = 'block';
		error.innerHTML += '<li>Por favor completa el nombre</li>';

		e.preventDefault();
	} else {
		error.style.display = 'none';
	}
}

function validarCorreo(e) {
	if (correo.value == '' || correo.value == null) {
		console.log('Por favor completa el correo');
		error.style.display = 'block';
		error.innerHTML += '<li>Por favor completa el correo</li>';

		e.preventDefault();
	} else {
		error.style.display = 'none';
	}
}

function validarContraseña(e) {
	if (contraseña.value == '' || contraseña.value == null) {
		console.log('Por favor pon una contraseña');
		error.style.display = 'block';
		error.innerHTML += '<li>Por favor pon una contraseña</li>';

		e.preventDefault();
	} else {
		error.style.display = 'none';
	}
}

function validarConfirmContra(e) {
	if (confirmContra.value == '' || confirmContra.value == null) {
		console.log('Por favor confirma contraseña');
		error.style.display = 'block';
		error.innerHTML += '<li>Por favor confirma contraseña</li>';

		e.preventDefault();
	} else {
		error.style.display = 'none';
	}
}

function validarSexo(e) {
	if (sexo.value == '' || sexo.value == null) {
		console.log('Por favor completa el sexo');
		error.style.display = 'block';
		error.innerHTML += '<li>Por favor completa el sexo</li>';

		e.preventDefault();
	} else {
		error.style.display = 'none';
	}
}

function validarTerminos(e) {
	if (terminos.checked == false) {
		console.log('Por favor acepta los terminos');
		error.style.display = 'block';
		error.innerHTML += '<li>Por favor acepta los terminos</li>';

		e.preventDefault();
	} else {
		error.style.display = 'none';
	}
}

function validarFormulario(e) {
	error.innerHTML = '';

	validarNombre(e);
	validarCorreo(e);
	validarContraseña(e);
	validarConfirmContra(e);
	validarSexo(e);
	validarTerminos(e);
}

formulario.addEventListener('submit', validarFormulario);

