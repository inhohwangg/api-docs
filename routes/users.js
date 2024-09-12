const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/shop/users/create:
 *   post:
 *     summary: 사용자 생성
 *     tags: [사용자]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: 아이디
 *               email:
 *                 type: string
 *                 description: 이메일 주소
 *               password:
 *                 type: string
 *                 description: 비밀번호
  *     responses:
 *       201:
 *         description: 사용자 생성 완료
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
 *                   example: "사용자 생성 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       username:
 *                         type: string
 *                         example: "testAccount"
 *                       email:
 *                         type: string
 *                         example: "test@email.com"
 *                       password:
 *                         type: string
 *                         example: "testAccount"
 *                       role:
 *                         type: string
 *                         example: "사용자"
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
 * /api/shop/users/login:
 *   get:
 *     summary: 로그인
 *     tags: [사용자]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: 아이디
 *               password:
 *                 type: string
 *                 description: 비밀번호
  *     responses:
 *       200:
 *         description: 로그인 완료
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
 *                   example: "로그인 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       username:
 *                         type: string
 *                         example: "testAccount"
 *                       email:
 *                         type: string
 *                         example: "test@email.com"
 *                       password:
 *                         type: string
 *                         example: "testAccount"
 *                       token:
 *                         type: string
 *                         example: "$2b$10$twRnBWNSrb6VAtQ4Y.BSuONP7tTgWUixgVjOmofOhsX.OJX"
 *                       role:
 *                         type: string
 *                         example: "사용자"
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
 * /api/shop/users:
 *   get:
 *     summary: 사용자 전체 조회
 *     tags: [사용자]
  *     responses:
 *       200:
 *         description: 사용자 전체 조회 완료
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
 *                   example: "사용자 전체 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       username:
 *                         type: string
 *                         example: "testAccount"
 *                       email:
 *                         type: string
 *                         example: "test@email.com"
 *                       password:
 *                         type: string
 *                         example: "testAccount"
 *                       role:
 *                         type: string
 *                         example: "사용자"
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
 * /api/shop/users/{_id}:
 *   get:
 *     summary: 특정 사용자 조회
 *     tags: [사용자]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 사용자의 고유 ID
  *     responses:
 *       200:
 *         description: 특정 사용자 조회 완료
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
 *                   example: "특정 사용자 조회 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       username:
 *                         type: string
 *                         example: "testAccount"
 *                       email:
 *                         type: string
 *                         example: "test@email.com"
 *                       password:
 *                         type: string
 *                         example: "testAccount"
 *                       role:
 *                         type: string
 *                         example: "사용자"
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
 * /api/shop/users/email/check:
 *   get:
 *     summary: 이메일 중복 검사
 *     tags: [사용자]
 *     parameters:
 *      - in: path
 *        name: email
 *        schema:
 *          type: string
 *        required: true
 *        description: 검사할 email 주소
  *     responses:
 *       200:
 *         description: 이메일 조회 완료
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
 *                   example: "사용 가능한 이메일입니다."

 */

/**
 * @swagger
 * /api/shop/users/email/{_id}:
 *   put:
 *     summary: 사용자 이메일 수정
 *     tags: [사용자]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 사용자의 고유 ID
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                description: 사용자 이메일
  *     responses:
 *       200:
 *         description: 사용자 이메일 완료
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
 *                   example: "사용자 이메일 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       username:
 *                         type: string
 *                         example: "testAccount"
 *                       email:
 *                         type: string
 *                         example: "test123@email.com"
 *                       password:
 *                         type: string
 *                         example: "testAccount"
 *                       role:
 *                         type: string
 *                         example: "관리자"
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
 * /api/shop/users/role/{_id}:
 *   put:
 *     summary: 사용자 권한 수정
 *     tags: [사용자]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 사용자의 고유 ID
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            properties:
 *              role:
 *                type: string
 *                description: 사용자 권한
  *     responses:
 *       200:
 *         description: 사용자 권한 완료
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
 *                   example: "사용자 권한 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       username:
 *                         type: string
 *                         example: "testAccount"
 *                       email:
 *                         type: string
 *                         example: "test123@email.com"
 *                       password:
 *                         type: string
 *                         example: "testAccount"
 *                       role:
 *                         type: string
 *                         example: "판매자"
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
 * /api/shop/users/change-password/{_id}:
 *   put:
 *     summary: 사용자 비밀번호 수정
 *     tags: [사용자]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 사용자의 고유 ID
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            properties:
 *              password:
 *                type: string
 *                description: 사용자 비밀번호
  *     responses:
 *       200:
 *         description: 사용자 비밀번호 변경 완료
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
 *                   example: "사용자 비밀번호 변경 완료!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-45697456"
 *                       username:
 *                         type: string
 *                         example: "testAccount123"
 *                       email:
 *                         type: string
 *                         example: "test123@email.com"
 *                       password:
 *                         type: string
 *                         example: "testAccount"
 *                       role:
 *                         type: string
 *                         example: "관리자"
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
 * /api/shop/users/{_id}:
 *   delete:
 *     summary: 사용자 삭제
 *     tags: [사용자]
 *     parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: 사용자의 고유 ID
  *     responses:
 *       200:
 *         description: 사용자 삭제 완료
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
 *                   example: "사용자 삭제 완료!"
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