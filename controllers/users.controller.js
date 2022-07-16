
const { request, response } = require('express');


const usuariosGet = (req = request, res = response) => {
	// http://sigiddbb.peacsa.com:8080/api/users?q=hola&nombre=Juan&apikey=123456789
	const { q, nombre = 'No name', page = 1, limit = 10, apikey } = req.query;

	res.json({
		message: 'get API - controller',
		q,
		nombre,
		apikey,
		page,
		limit
	});
}

const usuariosPost = (req, res = response) => {
	const { nombre, edad } = req.body;

	res.status(201).json({
		message: 'post API - controller',
		nombre,
		edad
	});
}

const usuariosPut = (req, res = response) => {
	// http://sigiddbb.peacsa.com:8080/api/users/10
	const id = req.params.id;
	res.json({
		message: 'put API - controller',
		id
	});
}

const usuariosPatch = (req, res = response) => {
	res.json({
		message: 'patch API - controller'
	});
}

const usuariosDelete = (req, res = response) => {
	const id = req.params.id;
	res.json({
		message: 'delete API - controller',
		id
	});
}

module.exports = {
	usuariosGet,
	usuariosPost,
	usuariosPut,
	usuariosPatch,
	usuariosDelete
}