const express = require('express')
const redoc = require('redoc-express')
const swaggerDocs = require('./swaggerDocs'); // OpenAPI 스펙 불러오기
const app = express()

// 라우트
const routes = require('./routes/index.js')
app.use(routes)

// Redoc 를 사용하여 API 문서화 제공
app.get('/api-docs', redoc({
	title: 'My API Docs',
	specUrl: '/swagger.json',
}))

// OpenAPI 스펙을 JSON 형식으로 제공
app.get('/swagger.json', (req, res) => {
	res.json(swaggerDocs)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT} 실행중입니다.`)
	console.log(`http://localhost:${PORT}/api-docs 에서 API Docs 이용가능합니다.`)
})