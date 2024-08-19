const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/shop/product/create/{categoryid}/{userid}:
 *   post:
 *     summary: 상품 생성
 *     tags: [상품]
 *     parameters:
 *       - in: path
 *         name: categoryid
 *         schema:
 *           type: string
 *         required: true
 *         description: 카테고리 _id
 *       - in: path
 *         name: userid
 *         schema:
 *           type: string
 *         required: true
 *         description: 사용자 _id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_name:
 *                 type: string
 *                 description: 상품 이름
 *               product_desc:
 *                 type: string
 *                 description: 상품 설명
 *               product_price:
 *                 type: number
 *                 description: 상품 가격
 *               product_count:
 *                 type: number
 *                 description: 상품 수량
  *     responses:
 *       201:
 *         description: 상품 생성 완료
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
 *                   example: "상품 생성 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174000"
 *                       product_name:
 *                         type: string
 *                         example: "스마트폰"
 *                       product_desc:
 *                         type: string
 *                         example: "최신형 스마트폰입니다."
 *                       product_price:
 *                         type: number
 *                         example: 799.99
 *                       product_count:
 *                         type: integer
 *                         example: 100
 *                       categoryid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174001"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174002"
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
 * /api/shop/product:
 *   get:
 *     summary: 상품 전체 조회
 *     tags: [상품]
  *     responses:
 *       200:
 *         description: 상품 전체 조회 완료
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
 *                   example: "상품 전체 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174000"
 *                       product_name:
 *                         type: string
 *                         example: "스마트폰"
 *                       product_desc:
 *                         type: string
 *                         example: "최신형 스마트폰입니다."
 *                       product_price:
 *                         type: number
 *                         example: 799.99
 *                       product_count:
 *                         type: integer
 *                         example: 100
 *                       categoryid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174001"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174002"
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
 * /api/shop/product/{_id}:
 *   get:
 *     summary: 특정 상품 조회
 *     tags: [상품]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 상품의 고유 ID
  *     responses:
 *       200:
 *         description: 특정 상품 조회 완료
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
 *                   example: "특정 상품 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174000"
 *                       product_name:
 *                         type: string
 *                         example: "스마트폰"
 *                       product_desc:
 *                         type: string
 *                         example: "최신형 스마트폰입니다."
 *                       product_price:
 *                         type: number
 *                         example: 799.99
 *                       product_count:
 *                         type: integer
 *                         example: 100
 *                       categoryid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174001"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174002"
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
 * /api/shop/product/{_id}:
 *   put:
 *     summary: 상품 수정
 *     tags: [상품]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 상품의 고유 ID
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            properties:
 *              product_name:
 *                type: string
 *                description: 상품명
 *              product_desc:
 *                type: string
 *                description: 상품 설명
 *              product_price:
 *                type: number
 *                description: 상품 가격
 *              product_count:
 *                type: number
 *                description: 상품 수량
  *     responses:
 *       200:
 *         description: 상품 수정 완료
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
 *                   example: "상품 수정 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174000"
 *                       product_name:
 *                         type: string
 *                         example: "스마트폰 입니다."
 *                       product_desc:
 *                         type: string
 *                         example: "최신형 스마트폰입니다."
 *                       product_price:
 *                         type: number
 *                         example: 899.99
 *                       product_count:
 *                         type: integer
 *                         example: 200
 *                       categoryid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174001"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174002"
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
 * /api/shop/product/{_id}:
 *   delete:
 *     summary: 상품 삭제
 *     tags: [상품]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 상품의 고유 ID
  *     responses:
 *       200:
 *         description: 상품 삭제 완료
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
 *                   example: "상품 삭제 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174000"
 *                       product_name:
 *                         type: string
 *                         example: "스마트폰 입니다."
 *                       product_desc:
 *                         type: string
 *                         example: "최신형 스마트폰입니다."
 *                       product_price:
 *                         type: number
 *                         example: 899.99
 *                       product_count:
 *                         type: integer
 *                         example: 200
 *                       categoryid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174001"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174002"
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"

 */