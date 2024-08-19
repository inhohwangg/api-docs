const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/shop/carts/create/{userid}/{productid}:
 *   post:
 *     summary: 장바구니 생성
 *     tags: [장바구니]
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
 *               quantity:
 *                 type: number
 *                 description: 장바구니 수량
 *               order_status:
 *                 type: string
 *                 description: 주문 상태
  *     responses:
 *       201:
 *         description: 장바구니 생성 완료
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
 *                   example: "장바구니 생성 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       quantity:
 *                         type: number
 *                         example: 10
 *                       order_status:
 *                         type: string
 *                         example: "배송중"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-213490234"
 *                       productid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-4569878456"
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
 * /api/shop/carts:
 *   get:
 *     summary: 장바구니 전체 조회
 *     tags: [장바구니]
  *     responses:
 *       200:
 *         description: 장바구니 전체 조회 완료
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
 *                   example: "장바구니 전체 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       quantity:
 *                         type: number
 *                         example: 10
 *                       order_status:
 *                         type: string
 *                         example: "배송중"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-213490234"
 *                       productid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-4569878456"
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
 * /api/shop/carts/{_id}:
 *   get:
 *     summary: 특정 장바구니 조회
 *     tags: [장바구니]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 장바구니의 고유 ID
  *     responses:
 *       200:
 *         description: 특정 장바구니 조회 완료
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
 *                   example: "특정 장바구니 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       quantity:
 *                         type: number
 *                         example: 10
 *                       order_status:
 *                         type: string
 *                         example: "배송중"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-213490234"
 *                       productid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-4569878456"
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
 * /api/shop/carts/{_id}:
 *   put:
 *     summary: 장바구니 수정
 *     tags: [장바구니]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 장바구니의 고유 ID
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            properties:
 *              quantity:
 *                type: number
 *                description: 장바구니 수량
 *              order_status:
 *                type: string
 *                description: 주문 상태
  *     responses:
 *       200:
 *         description: 장바구니 수정 완료
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
 *                   example: "장바구니 수정 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       quantity:
 *                         type: number
 *                         example: 20
 *                       order_status:
 *                         type: string
 *                         example: "배송중"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-213490234"
 *                       productid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-4569878456"
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
 * /api/shop/carts/{_id}:
 *   delete:
 *     summary: 장바구니 삭제
 *     tags: [장바구니]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 장바구니의 고유 ID
  *     responses:
 *       200:
 *         description: 장바구니 삭제 완료
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
 *                   example: "장바구니 삭제 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       quantity:
 *                         type: number
 *                         example: 20
 *                       order_status:
 *                         type: string
 *                         example: "배송중"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-213490234"
 *                       productid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-4569878456"
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"

 */