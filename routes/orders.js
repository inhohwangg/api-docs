const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/shop/orders/create/{userid}:
 *   post:
 *     summary: 주문 생성
 *     tags: [주문]
 *     parameters:
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
 *               pay_method:
 *                 type: string
 *                 description: 결재방법
 *               address:
 *                 type: string
 *                 description: 주소
 *               delivery_cost:
 *                 type: number
 *                 description: 배송비
 *               tracking_number:
 *                 type: number
 *                 description: 송장번호
 *               order_count:
 *                 type: number
 *                 description: 주문 수량
 *               order_amount:
 *                 type: number
 *                 description: 주문 금액
 *               order_status:
 *                 type: string
 *                 description: 주문 상태
  *     responses:
 *       201:
 *         description: 주문 생성 완료
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
 *                   example: "주문 생성 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       pay_method:
 *                         type: string
 *                         example: "신용카드"
 *                       address:
 *                         type: string
 *                         example: "서울시 송파구 올림픽로 82"
 *                       delivery_cost:
 *                         type: number
 *                         example: 3000
 *                       tracking_number:
 *                         type: number
 *                         example: 456987-2345980845
 *                       order_count:
 *                         type: number
 *                         example: 10
 *                       order_amount:
 *                         type: number
 *                         example: 20000
 *                       order_status:
 *                         type: string
 *                         example: "배송중"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-213490234"
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
 * /api/shop/orders:
 *   get:
 *     summary: 주문 전체 조회
 *     tags: [주문]
  *     responses:
 *       200:
 *         description: 주문 전체 조회 완료
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
 *                   example: "주문 전체 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       pay_method:
 *                         type: string
 *                         example: "신용카드"
 *                       address:
 *                         type: string
 *                         example: "서울시 송파구 올림픽로 82"
 *                       delivery_cost:
 *                         type: number
 *                         example: 3000
 *                       tracking_number:
 *                         type: number
 *                         example: 456987-2345980845
 *                       order_count:
 *                         type: number
 *                         example: 10
 *                       order_amount:
 *                         type: number
 *                         example: 20000
 *                       order_status:
 *                         type: string
 *                         example: "배송중"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-213490234"
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
 * /api/shop/orders/{_id}:
 *   get:
 *     summary: 특정 주문 조회
 *     tags: [주문]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 주문의 고유 ID
  *     responses:
 *       200:
 *         description: 특정 주문 조회 완료
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
 *                   example: "특정 주문 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       pay_method:
 *                         type: string
 *                         example: "신용카드"
 *                       address:
 *                         type: string
 *                         example: "서울시 송파구 올림픽로 82"
 *                       delivery_cost:
 *                         type: number
 *                         example: 3000
 *                       tracking_number:
 *                         type: number
 *                         example: 456987-2345980845
 *                       order_count:
 *                         type: number
 *                         example: 10
 *                       order_amount:
 *                         type: number
 *                         example: 20000
 *                       order_status:
 *                         type: string
 *                         example: "배송중"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-213490234"
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
 * /api/shop/orders/{_id}:
 *   put:
 *     summary: 주문 수정
 *     tags: [주문]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 주문의 고유 ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pay_method:
 *                 type: string
 *                 description: 결재방법
 *               address:
 *                 type: string
 *                 description: 주소
 *               delivery_cost:
 *                 type: number
 *                 description: 배송비
 *               tracking_number:
 *                 type: number
 *                 description: 송장번호
 *               order_count:
 *                 type: number
 *                 description: 주문 수량
 *               order_amount:
 *                 type: number
 *                 description: 주문 금액
 *               order_status:
 *                 type: string
 *                 description: 주문 상태
  *     responses:
 *       200:
 *         description: 주문 수정 완료
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
 *                   example: "주문 수정 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       pay_method:
 *                         type: string
 *                         example: "신용카드"
 *                       address:
 *                         type: string
 *                         example: "서울시 송파구 올림픽로 82"
 *                       delivery_cost:
 *                         type: number
 *                         example: 3000
 *                       tracking_number:
 *                         type: number
 *                         example: 456987-2345980845
 *                       order_count:
 *                         type: number
 *                         example: 10
 *                       order_amount:
 *                         type: number
 *                         example: 20000
 *                       order_status:
 *                         type: string
 *                         example: "배송중"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-213490234"
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
 * /api/shop/orders/{_id}:
 *   delete:
 *     summary: 주문 삭제
 *     tags: [주문]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 주문의 고유 ID
  *     responses:
 *       200:
 *         description: 주문 삭제 완료
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
 *                   example: "주문 삭제 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       pay_method:
 *                         type: string
 *                         example: "신용카드"
 *                       address:
 *                         type: string
 *                         example: "서울시 송파구 올림픽로 82"
 *                       delivery_cost:
 *                         type: number
 *                         example: 3000
 *                       tracking_number:
 *                         type: number
 *                         example: 456987-2345980845
 *                       order_count:
 *                         type: number
 *                         example: 10
 *                       order_amount:
 *                         type: number
 *                         example: 20000
 *                       order_status:
 *                         type: string
 *                         example: "배송중"
 *                       userid:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-213490234"
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"

 */