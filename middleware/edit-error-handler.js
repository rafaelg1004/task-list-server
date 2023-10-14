function handleEditErrors(req, res, next) {
    if (req.method === 'POST' && !req.body) {
      return res.status(400).send('Cuerpo de la solicitud vacío en POST');
    }
  
    if(req.method === 'POST' && (!req.body)) {
      return res.status(400).send('Información no válida o atributos faltantes para crear tareas en POST');
    }
  
    if (req.method === 'PUT' && !req.body) {
      return res.status(400).send('Cuerpo de la solicitud vacío en PUT');
    }
  
   
    next();
  }
  
  module.exports = handleEditErrors;
  