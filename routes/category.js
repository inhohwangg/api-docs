const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/shop/category/create:
 *   post:
 *     summary: 카테고리 생성
 *     tags: [카테고리]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cate_name:
 *                 type: string
 *                 description: 카테고리 이름
 *               cate_desc:
 *                 type: string
 *                 description: 카테고리 설명
  *     responses:
 *       201:
 *         description: 카테고리 생성 완료
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
 *                   example: "카테고리 생성 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       cate_name:
 *                         type: string
 *                         example: '사과'
 *                       cate_desc:
 *                         type: string
 *                         example: '청송사과 입니다.'
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
 * /api/shop/category:
 *   get:
 *     summary: 카테고리 전체 조회
 *     tags: [카테고리]
  *     responses:
 *       200:
 *         description: 카테고리 전체 조회 완료
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
 *                   example: "카테고리 전체 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       cate_name:
 *                         type: string
 *                         example: '사과'
 *                       cate_desc:
 *                         type: string
 *                         example: '청송사과 입니다.'
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
 * /api/shop/category/{_id}:
 *   get:
 *     summary: 특정 카테고리 조회
 *     tags: [카테고리]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 카테고리의 고유 ID
  *     responses:
 *       200:
 *         description: 특정 카테고리 조회 완료
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
 *                   example: "특정 카테고리 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       cate_name:
 *                         type: string
 *                         example: '사과'
 *                       cate_desc:
 *                         type: string
 *                         example: '청송사과 입니다.'
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
 * /api/shop/category/{_id}:
 *   put:
 *     summary: 카테고리 수정
 *     tags: [카테고리]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 카테고리의 고유 ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cate_name:
 *                 type: string
 *                 description: 카테고리 이름
 *               cate_desc:
 *                 type: string
 *                 description: 카테고리 설명
  *     responses:
 *       200:
 *         description: 카테고리 수정 완료
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
 *                   example: "카테고리 수정 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       cate_name:
 *                         type: string
 *                         example: '사과'
 *                       cate_desc:
 *                         type: string
 *                         example: '청송사과 입니다.'
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
 * /api/shop/category/{_id}:
 *   delete:
 *     summary: 카테고리 삭제
 *     tags: [카테고리]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 카테고리의 고유 ID
  *     responses:
 *       200:
 *         description: 카테고리 삭제 완료
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
 *                   example: "카테고리 삭제 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       cate_name:
 *                         type: string
 *                         example: '사과'
 *                       cate_desc:
 *                         type: string
 *                         example: '청송사과 입니다.'
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"

 */