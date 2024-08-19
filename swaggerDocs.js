const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'API 문서',
			version: '1.0.0',
			description: 'API 문서입니다.',
			// termsOfService: 'http://example.com/terms/',
			// contact: {
			// 	name: 'API Support',
			// 	url: 'http://example.com/support',
			// 	email: 'support@example.com'
			// },
			// license: {
			// 	name: 'Apache 2.0',
			// 	url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
			// }
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