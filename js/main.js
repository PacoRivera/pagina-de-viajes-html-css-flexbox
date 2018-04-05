



function load(seleccionElemento, element) {
	var url = seleccionElemento.getAttribute('data-content-url');
	req = new XMLHttpRequest();
	req.open("GET", url, false);
	req.send(null);

	element.innerHTML = req.responseText;
	$(".menuDestino__titulo").removeClass("activo");
	seleccionElemento.classList.add('activo');


	$(document).ready(cardInfo);

	function cardInfo() {
		$('.card__informacion').hover(function () {
			$(this).find('.card__footer__descripcion').animate({
				height: "toggle",
				opacity: "toggle"
			}, 300);
		});
	};

}

$('.menu__destino__sol').click(function () {
	var creaDestinosSol = function (clave, valor) {
		let nuevoDestino =
			'<div class="container__cards__column">' +
			'<div class="card__informacion">' +
			'<div class="card__informacion__miniatura">' +
			'<div class=" card__informacion__contFecha">' +
			'<div class="card__informacion__dias">' + valor.diaLimite + '</div>' +
			'<div class=" card__informacion__mes">' + valor.mesLimite + '</div>' +
			'</div><img class="card__informacion__img" src="' + valor.imagen + '"/>' +
			'</div>' +
			'<div class="card__footer">' +
			'<div class="card__footer__categoria">Reservar</div>' +
			'<h1 class="card__footer__titulo">' + valor.nombre + '</h1>' +
			'<h2 class="card__footer__subtitulo">' + valor.fraseDestino + '</h2>' +
			'<p class="card__footer__descripcion">' + valor.descripcion + '</p>' +
			'<div class="card__footer__span"><span class="timestamp">' + valor.oferta + '</span><span class="comments"><a href="#">' + valor.precio + '</a></span></div>' +
			'</div>' +
			'</div>' +
			' </div>'

		$('#sol').append(nuevoDestino);
	}
	$.getJSON('js/sol.json', function (datos) {
		$.each(datos, function (clave, valor) {
			creaDestinosSol(clave, valor);
		});
	});
});

$('.menu__destino__natural').click(function () {
	var creaDestinosNatural = function (clave, valor) {
		let nuevoDestino =
			'<div class="container__cards__column">' +
			'<div class="card__informacion">' +
			'<div class="card__informacion__miniatura">' +
			'<div class=" card__informacion__contFecha">' +
			'<div class="card__informacion__dias">' + valor.diaLimite + '</div>' +
			'<div class=" card__informacion__mes">' + valor.mesLimite + '</div>' +
			'</div><img class="card__informacion__img" src="' + valor.imagen + '"/>' +
			'</div>' +
			'<div class="card__footer">' +
			'<div class="card__footer__categoria">Reservar</div>' +
			'<h1 class="card__footer__titulo">' + valor.nombre + '</h1>' +
			'<h2 class="card__footer__subtitulo">' + valor.fraseDestino + '</h2>' +
			'<p class="card__footer__descripcion">' + valor.descripcion + '</p>' +
			'<div class="card__footer__span"><span class="timestamp">' + valor.oferta + '</span><span class="comments"><a href="#">' + valor.precio + '</a></span></div>' +
			'</div>' +
			'</div>' +
			' </div>'

		$('#natural').append(nuevoDestino);
	}
	$.getJSON('js/natural.json', function (datos) {
		$.each(datos, function (clave, valor) {
			creaDestinosNatural(clave, valor);
		});
	});
});

$('.menu__destino__metro').click(function () {
	var creaDestinosMetro = function (clave, valor) {
		let nuevoDestino =
			'<div class="container__cards__column">' +
			'<div class="card__informacion">' +
			'<div class="card__informacion__miniatura">' +
			'<div class=" card__informacion__contFecha">' +
			'<div class="card__informacion__dias">' + valor.diaLimite + '</div>' +
			'<div class=" card__informacion__mes">' + valor.mesLimite + '</div>' +
			'</div><img class="card__informacion__img" src="' + valor.imagen + '"/>' +
			'</div>' +
			'<div class="card__footer">' +
			'<div class="card__footer__categoria">Reservar</div>' +
			'<h1 class="card__footer__titulo">' + valor.nombre + '</h1>' +
			'<h2 class="card__footer__subtitulo">' + valor.fraseDestino + '</h2>' +
			'<p class="card__footer__descripcion">' + valor.descripcion + '</p>' +
			'<div class="card__footer__span"><span class="timestamp">' + valor.oferta + '</span><span class="comments"><a href="#">' + valor.precio + '</a></span></div>' +
			'</div>' +
			'</div>' +
			' </div>'

		$('#metro').append(nuevoDestino);
	}
	$.getJSON('js/metropolitano.json', function (datos) {
		$.each(datos, function (clave, valor) {
			creaDestinosMetro(clave, valor);
		});
	});
});

$('.menu__destino__cultural').click(function () {
	var creaDestinosHistorico = function (clave, valor) {
		let nuevoDestino =
			'<div class="container__cards__column">' +
			'<div class="card__informacion">' +
			'<div class="card__informacion__miniatura">' +
			'<div class=" card__informacion__contFecha">' +
			'<div class="card__informacion__dias">' + valor.diaLimite + '</div>' +
			'<div class=" card__informacion__mes">' + valor.mesLimite + '</div>' +
			'</div><img class="card__informacion__img" src="' + valor.imagen + '"/>' +
			'</div>' +
			'<div class="card__footer">' +
			'<div class="card__footer__categoria">Reservar</div>' +
			'<h1 class="card__footer__titulo">' + valor.nombre + '</h1>' +
			'<h2 class="card__footer__subtitulo">' + valor.fraseDestino + '</h2>' +
			'<p class="card__footer__descripcion">' + valor.descripcion + '</p>' +
			'<div class="card__footer__span"><span class="timestamp">' + valor.oferta + '</span><span class="comments"><a href="#">' + valor.precio + '</a></span></div>' +
			'</div>' +
			'</div>' +
			' </div>'

		$('#historico').append(nuevoDestino);
	}
	$.getJSON('js/historico.json', function (datos) {
		$.each(datos, function (clave, valor) {
			creaDestinosHistorico(clave, valor);
		});
	});
});
$('.menu__destino__mapa').click(function initialize() {
	var marcadores = [
		['León', 42.603, -5.577],
		['Salamanca', 40.963, -5.669],
		['Zamora', 41.503, -5.744]
	];
	var map = new google.maps.Map(document.getElementById('mapa'), {
		zoom: 7,
		center: new google.maps.LatLng(41.503, -5.744),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	var infowindow = new google.maps.InfoWindow();
	var marker, i;
	for (i = 0; i < marcadores.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
			map: map
		});
		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(marcadores[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
});







$(document).ready(main);

var contador = 1;

function main() {
	$('.menu__bar').click(function () {
		// $('nav').toggle(); 

		if (contador == 1) {
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
function registro() {
	$('#registrarme').click(function () {

		if (contadorRegistro == 1) {
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






