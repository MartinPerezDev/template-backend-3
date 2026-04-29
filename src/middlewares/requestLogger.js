function getLogLevel(statusCode){
  //error >= 500
  //warn >= 400
  //info
}


export function requestLogger(req, res, next) {
  //1 - Registrar el tiempo cuando entro la peticion
  const start = Date.now();

  //2 - Escuchamos el evento "finish" que dispara una funcion cuando la respuesta ya se envio al cliente
  res.on("finish", ()=> {
    //3 - Calculamos cuanto tiempo paso desde que llego la peticion hasta que se respondio
    const responseTimeMs = Date.now() - start;

    const log = {
      level: "info",
      method: req.method,
      path: req.originalUrl,
      statusCode: res.statusCode,
      responseTimeMs,
      timestamp: new Date().toISOString()
    };

    console.log( JSON.stringify(log) );
  });

  //llamamos a next para que la peticion siga su curso
  next();
};