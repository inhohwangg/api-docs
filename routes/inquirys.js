const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/shop/inquirys/create/{userid}/{productid}:
 *   post:
 *     summary: 문의 생성
 *     tags: [문의]
 *     parameters:
 *       - in: path
 *         name: userid
 *         schema:
 *           type: string
 *         required: true
 *         description: 사용자 _id
 *       - in: path
 *         name: productid
 *         schema:
 *           type: string
 *         required: true
 *         description: 상품 _id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               inquiry_category:
 *                 type: string
 *                 description: 문의 카테고리
 *               inquiry_email:
 *                 type: string
 *                 description: 이메일주소
 *               inquiry_title:
 *                 type: string
 *                 description: 문의 제목
 *               inquiry_details:
 *                 type: string
 *                 description: 문의 내용
 *               is_public:
 *                 type: boolean
 *                 description: 공개
  *     responses:
 *       201:
 *         description: 문의 생성 완료
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: "문의 생성 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       inquiry_category:
 *                         type: string
 *                         example: '사과'
 *                       inquiry_email:
 *                         type: string
 *                         example: 'test@test.com'
 *                       inquiry_title:
 *                         type: string
 *                         example: '사과 문의드립니다.'
 *                       inquiry_details:
 *                         type: string
 *                         example: '언제도착하나요?'
 *                       is_public:
 *                         type: string
 *                         example: true
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"

 */

/**
 * @swagger
 * /api/shop/inquirys:
 *   get:
 *     summary: 문의 전체 조회
 *     tags: [문의]
  *     responses:
 *       200:
 *         description: 문의 전체 조회 완료
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "문의 전체 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       inquiry_category:
 *                         type: string
 *                         example: '사과'
 *                       inquiry_email:
 *                         type: string
 *                         example: 'test@test.com'
 *                       inquiry_title:
 *                         type: string
 *                         example: '사과 문의드립니다.'
 *                       inquiry_details:
 *                         type: string
 *                         example: '언제도착하나요?'
 *                       is_public:
 *                         type: string
 *                         example: true
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"

 */

/**
 * @swagger
 * /api/shop/inquirys/{_id}:
 *   get:
 *     summary: 특정 문의 조회
 *     tags: [문의]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 문의의 고유 ID
  *     responses:
 *       200:
 *         description: 특정 문의 조회 완료
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "특정 문의 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       inquiry_category:
 *                         type: string
 *                         example: '사과'
 *                       inquiry_email:
 *                         type: string
 *                         example: 'test@test.com'
 *                       inquiry_title:
 *                         type: string
 *                         example: '사과 문의드립니다.'
 *                       inquiry_details:
 *                         type: string
 *                         example: '언제도착하나요?'
 *                       is_public:
 *                         type: string
 *                         example: true
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"

 */

/**
 * @swagger
 * /api/shop/inquirys/{_id}:
 *   put:
 *     summary: 문의 수정
 *     tags: [문의]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 문의의 고유 ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               inquiry_category:
 *                 type: string
 *                 description: 문의 카테고리
 *               inquiry_email:
 *                 type: string
 *                 description: 이메일주소
 *               inquiry_title:
 *                 type: string
 *                 description: 문의 제목
 *               inquiry_details:
 *                 type: string
 *                 description: 문의 내용
 *               is_public:
 *                 type: boolean
 *                 description: 공개
  *     responses:
 *       200:
 *         description: 문의 수정 완료
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "문의 수정 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       inquiry_category:
 *                         type: string
 *                         example: '사과'
 *                       inquiry_email:
 *                         type: string
 *                         example: 'test@test.com'
 *                       inquiry_title:
 *                         type: string
 *                         example: '사과 문의드립니다.'
 *                       inquiry_details:
 *                         type: string
 *                         example: '언제도착하나요?'
 *                       is_public:
 *                         type: string
 *                         example: true
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"

 */

/**
 * @swagger
 * /api/shop/inquirys/{_id}:
 *   delete:
 *     summary: 문의 삭제
 *     tags: [문의]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 문의의 고유 ID
  *     responses:
 *       200:
 *         description: 문의 삭제 완료
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "문의 삭제 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       inquiry_category:
 *                         type: string
 *                         example: '사과'
 *                       inquiry_email:
 *                         type: string
 *                         example: 'test@test.com'
 *                       inquiry_title:
 *                         type: string
 *                         example: '사과 문의드립니다.'
 *                       inquiry_details:
 *                         type: string
 *                         example: '언제도착하나요?'
 *                       is_public:
 *                         type: string
 *                         example: true
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"

 */