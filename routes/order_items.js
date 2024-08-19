const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/shop/order_items/create/{orderid}/{productid}:
 *   post:
 *     summary: 주문 목록 생성
 *     tags: [주문 목록]
 *     parameters:
 *       - in: path
 *         name: orderid
 *         schema:
 *           type: string
 *         required: true
 *         description: 주문 _id
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
 *               order_count:
 *                 type: number
 *                 description: 결재방법
 *               product_price:
 *                 type: number
 *                 description: 주소
  *     responses:
 *       201:
 *         description: 주문 목록 생성 완료
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
 *                   example: "주문 목록 생성 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       order_count:
 *                         type: number
 *                         example: 10
 *                       product_price:
 *                         type: number
 *                         example: 100000
 *                       orderid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-567098f"
 *                       productid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-459645io"
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
 * /api/shop/order_items:
 *   get:
 *     summary: 주문 목록 전체 조회
 *     tags: [주문 목록]
  *     responses:
 *       200:
 *         description: 주문 목록 전체 조회 완료
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
 *                   example: "주문 목록 전체 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       order_count:
 *                         type: number
 *                         example: 10
 *                       product_price:
 *                         type: number
 *                         example: 100000
 *                       orderid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-567098f"
 *                       productid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-459645io"
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
 * /api/shop/order_items/{_id}:
 *   get:
 *     summary: 특정 주문 목록 조회
 *     tags: [주문 목록]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 주문 목록의 고유 ID
  *     responses:
 *       200:
 *         description: 특정 주문 목록 조회 완료
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
 *                   example: "특정 주문 목록 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       order_count:
 *                         type: number
 *                         example: 10
 *                       product_price:
 *                         type: number
 *                         example: 100000
 *                       orderid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-567098f"
 *                       productid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-459645io"
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
 * /api/shop/order_items/{_id}:
 *   put:
 *     summary: 주문 목록 수정
 *     tags: [주문 목록]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 주문 목록의 고유 ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order_count:
 *                 type: number
 *                 description: 결재방법
 *               product_price:
 *                 type: number
 *                 description: 주소
  *     responses:
 *       200:
 *         description: 주문 목록 수정 완료
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
 *                   example: "주문 목록 수정 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       order_count:
 *                         type: number
 *                         example: 10
 *                       product_price:
 *                         type: number
 *                         example: 100000
 *                       orderid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-567098f"
 *                       productid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-459645io"
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
 * /api/shop/order_items/{_id}:
 *   delete:
 *     summary: 주문 목록 삭제
 *     tags: [주문 목록]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 주문 목록의 고유 ID
  *     responses:
 *       200:
 *         description: 주문 목록 삭제 완료
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
 *                   example: "주문 목록 삭제 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       order_count:
 *                         type: number
 *                         example: 10
 *                       product_price:
 *                         type: number
 *                         example: 100000
 *                       orderid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-567098f"
 *                       productid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-459645io"
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"

 */