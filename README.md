## Detalles

Desarrollo de un servicio REST, que pueda ser consumido por un WebApp.
Este servicio REST debe permitir, mediante un comando POST, obtener la hora en formato UTC de 2 parámetros enviados al servicio: hora y timezone
(por ejemplo: hour=18:31:45, utc=-4), deberán devolver la hora calculada, en un archivo json con el siguiente formato:

Ejemplo:

- (http://localhost:4000/api/timezone)
- method = POST
- Body:
```
{
    "hour": "18:31:45",
    "utc": -4
}

```
- Response: 
```
{
    "hour": "17:31:45",
    "utc": "America/Caracas"
}
```

### Instalación y uso
- clonar el proyecto
- ejecutar: npm install
- ejecutar: node index.js