var PrendaFactory = function(RecursosFactory,
							$localStorage,
							$log){
	
	var _prenda = null;

	$localStorage.proceso = $localStorage.proceso || {};
	
	return {
		proceso : $localStorage.proceso,

		//buscar la informacion de la prenda
		buscarPrenda: function(codigo) {
			return RecursosFactory
			.get('/prendas/codigo/' + codigo, {})
			.then(function(respuesta) {
				$log.debug("PrendaFactory.buscarPrenda()", respuesta);
				if(respuesta){
					_prenda = respuesta.data.prenda;
					return _prenda;
				}
			});
		},

		//enviar novedad de la prenda
		enviarNovedad:function(prenda, novedad) {
			console.log(prenda, novedad);
			return RecursosFactory
			.post('/prendas/novedad', {prenda: prenda, novedad: novedad})
			.then(function(respuesta) {
				$log.debug("PrendaFactory.enviarNovedad()", respuesta);
				if(respuesta){
					
				}
			});	
		}
	};
};

app.factory('PrendaFactory', PrendaFactory);
