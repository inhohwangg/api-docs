const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'My API Documentation',
			version: '1.0.0',
			description: 'API documentation using Redoc and OpenAPI 3.0'
		},
		servers: [
			{
				url: 'http://localhost:5000',
			}
		]
	},
	apis: ['./router/*.js'], // API 문서가 정의된 파일의 경로
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;