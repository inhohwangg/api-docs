const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'My API Documentation',
			version: '1.0.0',
			description: 'API documentation using Redoc and OpenAPI 3.0',
			termsOfService: 'http://example.com/terms/',
			contact: {
				name: 'API Support',
				url: 'http://example.com/support',
				email: 'support@example.com'
			},
			license: {
				name: 'Apache 2.0',
				url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
			}
		},
		servers: [
			{
				url: 'http://localhost:5000',
			},
		],
	},
	apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;