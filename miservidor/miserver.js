var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');


var genDatos = function(){
	var rndID = faker.random.uuid();
	var rndName = faker.name.findName();
	var rndTelefono = faker.phone.phoneNumber();
	var rndDireccion = faker.address.streetAddress() + " - " +faker.address.city() + " - " +faker.address.country();
	var rndEmail = faker.internet.email();
	var rndWeb = faker.internet.url();
	var rndLorem = faker.lorem.sentence();
	var rndFecha = faker.date.recent();
	var rndImage = faker.image.image();
	return{
		id: rndID,
		nombre: rndName,
		telefono: rndTelefono,
		direccion: rndDireccion,
		email: rndEmail,
		url: rndWeb,
		contenido: rndLorem,
		fecha: rndFecha,
		imagen: rndImage
	}
}

app.get('/', function (req, res) {
  res.send('Principal!');
})

app.get('/datos', function (req, res) {
  var cantidad = _.random(10,15)
  var usuarios = _.times(cantidad, genDatos)
  res.json(usuarios);
})


app.listen(3000);