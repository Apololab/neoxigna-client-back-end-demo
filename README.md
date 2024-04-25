# neoxigna-client-back-end-demo
Esta es una demo básica desarrollada en Express como ejemplo del backend que se debe implementar para gestionar las llaves de descarga de los documentos firmados.
Esta incluye un callback cuya ruta es /api/postsign. Este callback será llamado una vez se complete la postfirma del documento, y recibe por parámetros el documentId y el downloadKey del documento firmado.
También incluye un endpoint para obtener el downloadKey para un determinado documentId. Este se consume de la siguiente forma: /api/getDownloadKey?documentId={documentId}, y devuelve un objeto como este:

```
{
    "documentId": string,
    "downloadKey": string
}
```

Requisitos:
- NodeJS v14

## Instalación y ejecución:

### EJECUCIÓN LOCAL:

1. Ejecute "npm install" para instalar las dependencias del proyecto
2. Ejecute "npm start" para levantar el servidor de desarrollo. Esto levantará el proyecto en http://localhost:3000


### DOCKER:
1. Genere la imagen de docker utilizando el Dockerfile incluído en el proyecto: "docker build -t fischel-demo-backend ."
2. Ejecute un container basado en esta imagen: "docker run -d --name fischel-demo-backend -p 3000:3000 fischel-demo-backend". Esto levantará creará un puente en http://localhost:3000 que apunte al container creado