const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/shop/reviews/create/{userid}/{productid}:
 *   post:
 *     summary: 리뷰 생성
 *     tags: [리뷰]
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
 *               review_star:
 *                 type: string
 *                 description: 리뷰 평점
 *               review_comment:
 *                 type: string
 *                 description: 리뷰 댓글
  *     responses:
 *       201:
 *         description: 리뷰 생성 완료
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
 *                   example: "리뷰 생성 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       review_star:
 *                         type: string
 *                         example: '내돈내산 사과 후기입니다.'
 *                       review_comment:
 *                         type: string
 *                         example: '사과가 맛있어요!'
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
 * /api/shop/reviews:
 *   get:
 *     summary: 리뷰 전체 조회
 *     tags: [리뷰]
  *     responses:
 *       200:
 *         description: 리뷰 전체 조회 완료
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
 *                   example: "리뷰 전체 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       review_star:
 *                         type: string
 *                         example: '내돈내산 사과 후기입니다.'
 *                       review_comment:
 *                         type: string
 *                         example: '사과가 맛있어요!'
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
 * /api/shop/reviews/{_id}:
 *   get:
 *     summary: 특정 리뷰 조회
 *     tags: [리뷰]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 리뷰의 고유 ID
  *     responses:
 *       200:
 *         description: 특정 리뷰 조회 완료
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
 *                   example: "특정 리뷰 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       review_star:
 *                         type: string
 *                         example: '내돈내산 사과 후기입니다.'
 *                       review_comment:
 *                         type: string
 *                         example: '사과가 맛있어요!'
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
 * /api/shop/reviews/{_id}:
 *   put:
 *     summary: 리뷰 수정
 *     tags: [리뷰]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 리뷰의 고유 ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               review_star:
 *                 type: string
 *                 description: 리뷰 평점
 *               review_comment:
 *                 type: string
 *                 description: 리뷰 댓글
  *     responses:
 *       200:
 *         description: 리뷰 수정 완료
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
 *                   example: "리뷰 수정 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       review_star:
 *                         type: string
 *                         example: '내돈내산 사과 후기입니다.'
 *                       review_comment:
 *                         type: string
 *                         example: '사과가 맛있어요!'
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
 * /api/shop/reviews/{_id}:
 *   delete:
 *     summary: 리뷰 삭제
 *     tags: [리뷰]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 리뷰의 고유 ID
  *     responses:
 *       200:
 *         description: 리뷰 삭제 완료
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
 *                   example: "리뷰 삭제 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       review_star:
 *                         type: string
 *                         example: '내돈내산 사과 후기입니다.'
 *                       review_comment:
 *                         type: string
 *                         example: '사과가 맛있어요!'
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-19T12:34:56Z"

 */