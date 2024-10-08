const express = require('express')
const redoc = require('redoc-express')
const swaggerDocs = require('./swaggerDocs'); // OpenAPI 스펙 불러오기
const app = express()
const webhook = require('./webhook.js')
const bodyParser = require('body-parser');

// body-parser 미들웨어 설정
app.use(bodyParser.json());  // JSON 형식의 본문을 파싱
app.use(bodyParser.urlencoded({ extended: true }));  // URL-encoded 형식의 본문을 파싱

// 라우트
const routes = require('./routes/index.js')
app.use(routes)
app.use(webhook);

// Redoc 를 사용하여 API 문서화 제공
app.get('/', redoc({
	title: 'API Docs',
	specUrl: '/swagger.json',
}))

//

// OpenAPI 스펙을 JSON 형식으로 제공
app.get('/swagger.json', (req, res) => {
	res.json(swaggerDocs)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT} 실행중입니다.`)
	console.log(`http://localhost:${PORT}/api-docs 에서 API Docs 이용가능합니다.`)
})