const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /api/v1/test:
 *   get:
 *     summary: 테스트 엔드포인트
 *     description: 이 엔드포인트는 간단한 테스트를 위해 사용됩니다.
 *     responses:
 *       200:
 *         description: 성공적으로 응답을 반환합니다.
 */
router.get('/api/v1/test', (req, res) => {
	res.status(200).json({ message: 'Test endpoint' });
});

module.exports = router;