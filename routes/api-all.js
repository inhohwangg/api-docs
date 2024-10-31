/**
 * @swagger
 * /api/auth:
 *    post:
 *      summary: "1.[로그인] 로그인"
 *      tags: ["api"]
 *      parameters:
 *        - in: path
 *          name: userId
 *          scheme:
 *            type: string
 *          required: true
 *          description: "사용자 아이디"
 *        - in: path
 *          name: userPw
 *          scheme:
 *            type: string
 *          required: true
 *          description: "사용자 비밀번호"
 *      responses:
 *        200:
 *          description: "로그인 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  rows:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        baseURI:
 *                          type: string
 *                          example: "https://apiUrl.com"
 *                          description: "API 서버의 기본 URI"
 *                        userName:
 *                          type: string
 *                          example: "그렉터"
 *                          description: "작업자 이름"
 *                        serviceName:
 *                          type: string
 *                          example: "부산 원격검침 서비스"
 *                          description: "서비스명"
 *                        access_token:
 *                          type: string
 *                          example: "eyJhbGciOiJIUzI1NiJ9.eyJ1cm46dmlld~~~"
 *                          description: "로그인 성공시 발급된 토큰(access_token)"
 *                        refresh_token:
 *                          type: string
 *                          example: "eyJhbGciOiJIUzI1NiJ9.eyJ1cm46dmlld~~~"
 *                          description: "로그인 성공시 발급된 토큰(refresh_token)"
 *                        statusCode:
 *                          type: number
 *                          example: 200
 *                          description: "로그인 시 api 응답코드"
 *          
 */

/**
 * @swagger
 * /api/maintenances:
 *   get:
 *     summary: "2. 작업 일정"
 *     tags: ["api"]
 *     responses:
 *       200:
 *         description: "작업 일정 조회 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rows:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "jz_L3pEBRBmMW7gCONIy"
 *                         description: "작업 일정 ID"
 *                       checklistId:
 *                         type: string
 *                         example: "Hg197pABArPow1pe1-jd"
 *                         description: "작업 지시서 ID"
 *                       deviceId:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: ["yjlnwpIBArPow1peeENO","njlnwpIBArPow1pec0Oo","hTlnwpIBArPow1pelER5"]
 *                         description: "작업일정에 등록된 장치 ID 배열"
 *                       userId:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: ["TXa0HJIBArPow1penXYJ","n3a1HJIBArPow1peFndP","bHa1HJIBArPow1petHlg"]
 *                         description: "작업일정에 등록된 사용자 ID 배열"
 *                       deviceName:
 *                         type: string
 *                         example: "그렉터"
 *                         description: "장치명"
 *                       deviceModel:
 *                         type: string
 *                         example: "GRIDON"
 *                         description: "장치 모델명"
 *                       deviceIface:
 *                         type: string
 *                         example: "CAT.M1"
 *                         description: "장치 통신방식"
 *                       deviceManufacturer:
 *                         type: string
 *                         example: "(주)그렉터"
 *                         description: "장치 제조사명"
 *                       name:
 *                         type: string
 *                         example: "[2024-물-09] 부산시 원격검침단말기 설치"
 *                         description: "작업일정명"
 *                       templateId:
 *                         type: string
 *                         example: "fs50MJEBArPow1peCFu8"
 *                         description: "작업일정 템플릿 ID"
 *                       templateName:
 *                         type: string
 *                         example: "(주)그렉터"
 *                         description: "작업일정 템플릿명"
 *                       manufacturer:
 *                         type: string
 *                         example: "(주)그렉터"
 *                         description: "작업일정 템플릿 제조사명"
 *                       checklistName:
 *                         type: string
 *                         example: "2024 단말기 설치/교체"
 *                         description: "작업지시서명"
 *                       start:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-10-28T00:00:00.000Z"
 *                         description: "작업일정 시작일시"
 *                       end:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-10-30T00:00:00.000Z"
 *                         description: "작업일정 종료일시"
 */

/**
 * @swagger
 * /api/devices:
 *   get:
 *     summary: "3. 장치 조회"
 *     tags: ["api"]
 *     responses:
 *       200:
 *         description: "장치 조회 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rows:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "HSTaL3wBpPGnbL7LoqbU"
 *                         description: "장치 ID"
 *                       templateId:
 *                         type: string
 *                         example: "Z3sOgHsBpPGnbL7LPT_Z"
 *                         description: "템플릿 ID"
 *                       userId:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: ["8LQaZowBRBmMW7gCr6EN"]
 *                         description: "사용자 ID 배열"
 *                       statics:
 *                         type: object
 *                         properties:
 *                           msrErr:
 *                             type: integer
 *                             example: 0
 *                           lastMsrTime:
 *                             type: string
 *                             example: "2024-10-30 03:00:00"
 *                           isOverFlow:
 *                             type: integer
 *                             example: 0
 *                           isLeak:
 *                             type: integer
 *                             example: 0
 *                           lastMsrValue:
 *                             type: number
 *                             example: 801.16
 *                           msrValue:
 *                             type: number
 *                             example: 13
 *                           commErr:
 *                             type: integer
 *                             example: 0
 *                           meterLeak:
 *                             type: integer
 *                             example: 0
 *                           changeRate:
 *                             type: number
 *                             example: 0
 *                           meterLeakTime:
 *                             type: string
 *                             example: ""
 *                           yearMsrAvg:
 *                             type: number
 *                             example: 13.75
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2021-09-29T04:41:16.249Z"
 *                       geometry:
 *                         type: object
 *                         properties:
 *                           coordinates:
 *                             type: array
 *                             items:
 *                               type: number
 *                             example: [128.758998604421, 35.2933700828794]
 *                           type:
 *                             type: string
 *                             example: "Point"
 *                       properties:
 *                         type: object
 *                         properties:
 *                           grtId:
 *                             type: string
 *                             example: "00000930d02544fffef70662"
 *                           installedAt:
 *                             type: string
 *                             example: "2021-09-28"
 *                           isp:
 *                             type: string
 *                             example: "SK"
 *                           isLeak:
 *                             type: integer
 *                             example: 0
 *                           type:
 *                             type: string
 *                             example: "watergrid"
 *                           manufacturer:
 *                             type: string
 *                             example: "가암테크"
 *                           areaName:
 *                             type: string
 *                             example: "진영읍"
 *                           msrNo:
 *                             type: string
 *                             example: "0021082327"
 *                           meterNo:
 *                             type: string
 *                             example: "21-156359"
 *                           model:
 *                             type: string
 *                             example: "ObsQ"
 *                           msrReport:
 *                             type: string
 *                             example: "6"
 *                           addressMain:
 *                             type: string
 *                             example: "진영읍 진영로454번길 37-21"
 *                           fcltStatus:
 *                             type: string
 *                             example: "P"
 *                           iface:
 *                             type: string
 *                             example: "SKT-LORA"
 *                           fcltId:
 *                             type: string
 *                             example: "011-141-0176-17"
 *                           meterCategory:
 *                             type: string
 *                             example: "A"
 *                           name:
 *                             type: string
 *                             example: "502호"
 *                           addressOld:
 *                             type: string
 *                             example: "진영읍 내룡리 41-3 상일그린빌라A동"
 *                           status:
 *                             type: string
 *                             example: "U"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-06-05T02:14:12.649Z"
 *                       serviceName:
 *                         type: string
 *                         example: "김해시 원격검침 통합시스템"
 *                       templateName:
 *                         type: string
 *                         example: "가암테크"
 */


/**
 * @swagger
 * /api/datas/audit/work:
 *   get:
 *     summary: "4. 작업완료 리스트 조회"
 *     tags: ["api"]
 *     responses:
 *       200:
 *         description: "작업완료 리스트 조회 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rows:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "3cefe46b-3d1b-4c18-8c5e-5a54550726db"
 *                         description: "고유 ID"
 *                       con:
 *                         type: object
 *                         properties:
 *                           start:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-05-16T00:00:00.000Z"
 *                           userName:
 *                             type: string
 *                             example: "그리드온03"
 *                           type:
 *                             type: string
 *                             example: "device"
 *                           deviceId:
 *                             type: string
 *                             example: "LdbI-H8B0A2dgSFMU1S1"
 *                           userId:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["yhTDk48BRBmMW7gCGvye", "ixTBk48BRBmMW7gC8Pp2"]
 *                           nodes:
 *                             type: object
 *                             properties:
 *                               images:
 *                                 type: object
 *                                 description: "이미지 정보"
 *                               checklistdata:
 *                                 type: string
 *                                 example: "{}"
 *                           timestamp:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-06-05 18:02:45"
 *                           end:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-07-01T00:00:00.000Z"
 *                           category:
 *                             type: string
 *                             example: "work"
 *                           scheduleId:
 *                             type: string
 *                             example: "v25hV48BRBmMW7gCC9Zh"
 *                           checklistId:
 *                             type: string
 *                             example: "NW7iVo8BRBmMW7gCEgn6"
 *                           status:
 *                             type: string
 *                             example: "P1"
 *                           serviceName:
 *                             type: string
 *                             example: "김해시 원격검침 통합시스템"
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-06-05T08:45:38.038Z"
 */

/**
 * @swagger
 * /api/datas:
 *   get:
 *     summary: "5. 장치 데이터 조회"
 *     tags: ["api"]
 *     responses:
 *       200:
 *         description: "장치 데이터 조회 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rows:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "aa9a283f-503f-49d3-97d9-95a10dfd9b37"
 *                       con:
 *                         type: object
 *                         properties:
 *                           templateId:
 *                             type: string
 *                             example: "fs50MJEBArPow1peCFu8"
 *                           nodes:
 *                             type: object
 *                             properties:
 *                               header:
 *                                 type: string
 *                                 example: "a3"
 *                               length:
 *                                 type: integer
 *                                 example: 69
 *                               cmd:
 *                                 type: string
 *                                 example: "70"
 *                               imei:
 *                                 type: string
 *                                 example: "860113060020187"
 *                               imsi:
 *                                 type: string
 *                                 example: "234502107326408"
 *                               rssi:
 *                                 type: integer
 *                                 example: -57
 *                               hum:
 *                                 type: integer
 *                                 example: 45
 *                               cid:
 *                                 type: string
 *                                 example: "3800"
 *                               rsrp:
 *                                 type: integer
 *                                 example: -77
 *                               rsrq:
 *                                 type: integer
 *                                 example: -7
 *                               snr:
 *                                 type: integer
 *                                 example: 21
 *                               msrNo:
 *                                 type: string
 *                                 example: "0001002707"
 *                               msrFw:
 *                                 type: string
 *                                 example: "0.5"
 *                               meterNo:
 *                                 type: string
 *                                 example: "24-400101"
 *                               meterCaliber:
 *                                 type: string
 *                                 example: "4"
 *                               msrPrecision:
 *                                 type: integer
 *                                 example: 3
 *                               meterOverload:
 *                                 type: string
 *                                 example: "0"
 *                               meterReflux:
 *                                 type: string
 *                                 example: "0"
 *                               meterLeak:
 *                                 type: string
 *                                 example: "1"
 *                               meterBattery:
 *                                 type: string
 *                                 example: "0"
 *                               msrCycle:
 *                                 type: string
 *                                 example: "1"
 *                               msrReport:
 *                                 type: string
 *                                 example: "6"
 *                               year:
 *                                 type: integer
 *                                 example: 2024
 *                               month:
 *                                 type: integer
 *                                 example: 10
 *                               day:
 *                                 type: integer
 *                                 example: 30
 *                               hour:
 *                                 type: integer
 *                                 example: 13
 *                               minute:
 *                                 type: integer
 *                                 example: 43
 *                               second:
 *                                 type: integer
 *                                 example: 0
 *                               msrCnt:
 *                                 type: integer
 *                                 example: 6
 *                               msrStdIdx:
 *                                 type: integer
 *                                 example: 0
 *                               msrStdValue:
 *                                 type: number
 *                                 example: 801868
 *                               msrVolt:
 *                                 type: number
 *                                 example: 3.5
 *                               msrBattery:
 *                                 type: string
 *                                 example: "0"
 *                               date:
 *                                 type: string
 *                                 format: date-time
 *                                 example: "2024-10-30 13:43:00"
 *                               msrValue:
 *                                 type: number
 *                                 example: 801.868
 *                           timestamp:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-10-30 13:43:00"
 *                           deviceId:
 *                             type: string
 *                             example: "K-IJ6ZEBArPow1peA7mU"
 *                           deviceGeometry:
 *                             type: object
 *                             properties:
 *                               coordinates:
 *                                 type: array
 *                                 items:
 *                                   type: number
 *                                 example: [127.14910750000003, 37.00062039999999]
 *                               type:
 *                                 type: string
 *                                 example: "Point"
 *                           deviceManufacturer:
 *                             type: string
 *                             example: "(주)그렉터"
 *                           deviceModel:
 *                             type: string
 *                             example: "GRIDON"
 *                           deviceIface:
 *                             type: string
 *                             example: "CAT.M1"
 *                           deviceName:
 *                             type: string
 *                             example: "민웅기"
 *                           serviceName:
 *                             type: string
 *                             example: "엘리엇 워터 v1.0"
 *                           templateName:
 *                             type: string
 *                             example: "(주)그렉터"
 *                           templateAltName:
 *                             type: string
 *                             example: "(장치) (주)그렉터 - GRIDON (CAT.M1)"
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-10-30T04:43:22.960Z"
 */

/**
 * @swagger
 * /api/templates:
 *   get:
 *     summary: "6. 템플릿데이터 조회"
 *     tags: ["api"]
 *     responses:
 *       200:
 *         description: "성공적으로 데이터 조회"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rows:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "UVOtUnsBpPGnbL7LGx4m"
 *                         description: "고유 식별자"
 *                       properties:
 *                         type: object
 *                         properties:
 *                           configs:
 *                             type: object
 *                             description: "구성 설정"
 *                             example: {}
 *                           nodes:
 *                             type: object
 *                             properties:
 *                               msrId:
 *                                 type: object
 *                                 properties:
 *                                   name:
 *                                     type: string
 *                                     example: "EID"
 *                                   type:
 *                                     type: string
 *                                     example: "text"
 *                                   desc:
 *                                     type: string
 *                                     example: "단말기 ID"
 *                                   order:
 *                                     type: integer
 *                                     example: 0
 *                               groupName:
 *                                 type: object
 *                                 properties:
 *                                   name:
 *                                     type: string
 *                                     example: "단말기 그룹"
 *                                   type:
 *                                     type: string
 *                                     example: "text"
 *                                   desc:
 *                                     type: string
 *                                     example: "단말기 그룹"
 *                                   order:
 *                                     type: integer
 *                                     example: 1
 *                               fcltId:
 *                                 type: object
 *                                 properties:
 *                                   name:
 *                                     type: string
 *                                     example: "수용가"
 *                                   type:
 *                                     type: string
 *                                     example: "text"
 *                                   desc:
 *                                     type: string
 *                                     example: "수용가 번호"
 *                                   order:
 *                                     type: integer
 *                                     example: 2
 *                               contact:
 *                                 type: object
 *                                 properties:
 *                                   min:
 *                                     type: integer
 *                                     nullable: true
 *                                     example: null
 *                                   max:
 *                                     type: integer
 *                                     nullable: true
 *                                     example: null
 *                                   name:
 *                                     type: string
 *                                     example: "연락처"
 *                                   type:
 *                                     type: string
 *                                     example: "text"
 *                                   maxLength:
 *                                     type: integer
 *                                     nullable: true
 *                                     example: null
 *                                   desc:
 *                                     type: string
 *                                     example: "연락처"
 *                                   order:
 *                                     type: integer
 *                                     example: 7
 *                               commentedAt:
 *                                 type: object
 *                                 properties:
 *                                   name:
 *                                     type: string
 *                                     example: "처리일시"
 *                                   type:
 *                                     type: string
 *                                     example: "datetime-local"
 *                                   desc:
 *                                     type: string
 *                                     example: "처리일시 ( 해결 / 미해결 구분 )"
 *                                   order:
 *                                     type: integer
 *                                     example: 4
 *                               eventName:
 *                                 type: object
 *                                 properties:
 *                                   min:
 *                                     type: integer
 *                                     nullable: true
 *                                     example: null
 *                                   max:
 *                                     type: integer
 *                                     nullable: true
 *                                     example: null
 *                                   name:
 *                                     type: string
 *                                     example: "경보 타입"
 *                                   type:
 *                                     type: string
 *                                     example: "text"
 *                                   maxLength:
 *                                     type: integer
 *                                     nullable: true
 *                                     example: null
 *                                   desc:
 *                                     type: string
 *                                     example: "미터기 경보 타입"
 *                                   order:
 *                                     type: integer
 *                                     example: 5
 *                               addressMain:
 *                                 type: object
 *                                 properties:
 *                                   name:
 *                                     type: string
 *                                     example: "주소"
 *                                   type:
 *                                     type: string
 *                                     example: "text"
 *                                   desc:
 *                                     type: string
 *                                     example: "주소"
 *                                   order:
 *                                     type: integer
 *                                     example: 6
 *                               comment:
 *                                 type: object
 *                                 properties:
 *                                   name:
 *                                     type: string
 *                                     example: "처리내역"
 *                                   type:
 *                                     type: string
 *                                     example: "text"
 *                                   desc:
 *                                     type: string
 *                                     example: "처리내역"
 *                                   order:
 *                                     type: integer
 *                                     example: 8
 *                               facilityName:
 *                                 type: object
 *                                 properties:
 *                                   name:
 *                                     type: string
 *                                     example: "이름"
 *                                   type:
 *                                     type: string
 *                                     example: "text"
 *                                   desc:
 *                                     type: string
 *                                     example: "수용가 이름"
 *                                   order:
 *                                     type: integer
 *                                     example: 9
 *                               manufacturer:
 *                                 type: object
 *                                 properties:
 *                                   name:
 *                                     type: string
 *                                     example: "업무명"
 *                                   type:
 *                                     type: string
 *                                     example: "text"
 *                                   value:
 *                                     type: string
 *                                     example: "경보 목록"
 *                                   desc:
 *                                     type: string
 *                                     example: "경보 목록 데이터셋"
 *                                   order:
 *                                     type: integer
 *                                     example: 10
 *                           author:
 *                             type: string
 *                             example: "시스템"
 *                           name:
 *                             type: string
 *                             example: "경보 목록"
 *                           type:
 *                             type: string
 *                             example: "workflow"
 *                           version:
 *                             type: string
 *                             example: "1.0.0"
 *                           revision:
 *                             type: string
 *                             example: "1"
 *                           desc:
 *                             type: string
 *                             example: "[WORK02] 알람 > 미해결, 해결 경보 목록\n기간 : now/d-1d-1h  ~ now/d+1h\n"
 *                           info:
 *                             type: object
 *                             properties:
 *                               manufacturer:
 *                                 type: object
 *                                 properties:
 *                                   name:
 *                                     type: string
 *                                     example: "업무명"
 *                                   value:
 *                                     type: string
 *                                     example: "경보 목록"
 *                                   order:
 *                                     type: integer
 *                                     example: 0
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2021-08-17T05:55:12.914Z"
 *                       docType:
 *                         type: string
 *                         example: "template"
 *                       updatedAt:
 *                         type: string
 *                         nullable: true
 *                         example: null
 */

/**
 * @swagger
 * /api/devices/search:
 *   get:
 *     summary: "7. 장치 검색"
 *     tags: ["api"]
 *     responses:
 *       200:
 *         description: "장치 검색 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rows:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "rpamDYgBArPow1peTSZc"
 *                         description: "장치의 고유 ID"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2023-05-12T01:49:42.619Z"
 *                       geometry:
 *                         type: object
 *                         description: "지리 정보"
 *                         properties:
 *                           coordinates:
 *                             type: array
 *                             items:
 *                               type: number
 *                             example: [127.1480335, 37.58363334]
 *                           type:
 *                             type: string
 *                             example: "Point"
 *                       templateId:
 *                         type: string
 *                         example: "13bycocBArPow1peEavi"
 *                         description: "템플릿 ID"
 *                       serviceId:
 *                         type: string
 *                         example: "OIkGMIcBArPow1pezTw0"
 *                         description: "서비스 ID"
 *                       userId:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: ["o1S06Y4BArPow1peXLcg"]
 *                         description: "사용자 ID 배열"
 *                       properties:
 *                         type: object
 *                         description: "장치 속성"
 *                         properties:
 *                           grtId:
 *                             type: string
 *                             example: "350225785504241"
 *                             description: "GRT ID"
 *                           installedAt:
 *                             type: string
 *                             example: "2023-05-11"
 *                             description: "설치 일자"
 *                           isp:
 *                             type: string
 *                             example: "GLOBAL"
 *                             description: "통신사"
 *                           fcltStatus:
 *                             type: string
 *                             example: "P"
 *                             description: "시설 상태"
 *                           addressMain:
 *                             type: string
 *                             example: "구리시 벌말로80번길 23(메인)"
 *                             description: "주소"
 *                           type:
 *                             type: string
 *                             example: "watergrid"
 *                             description: "장치 유형"
 *                           manufacturer:
 *                             type: string
 *                             example: "NTMORE"
 *                             description: "제조사"
 *                           iface:
 *                             type: string
 *                             example: "CAT.M1"
 *                             description: "통신 방식"
 *                           msrDate:
 *                             type: integer
 *                             example: 31
 *                             description: "검침 일자"
 *                           protocol:
 *                             type: string
 *                             example: "UDP"
 *                             description: "프로토콜"
 *                           fcltId:
 *                             type: string
 *                             example: "08-221-0062-0100"
 *                             description: "수용가 ID"
 *                           areaName:
 *                             type: string
 *                             example: "수택3동"
 *                             description: "지역명"
 *                           name:
 *                             type: string
 *                             example: "김학신(메인)"
 *                             description: "장치명"
 *                           meterNo:
 *                             type: string
 *                             example: "22-000262"
 *                             description: "계량기 번호"
 *                           msrNo:
 *                             type: string
 *                             example: "0000009020"
 *                             description: "검침 번호"
 *                           model:
 *                             type: string
 *                             example: "NTMA9205-RB"
 *                             description: "모델명"
 *                           addressOld:
 *                             type: string
 *                             example: "토평동 440-8"
 *                             description: "구 주소"
 *                           meterCaliber:
 *                             type: string
 *                             example: "20"
 *                             description: "계량기 구경"
 *                           status:
 *                             type: string
 *                             example: "U"
 *                             description: "상태"
 *                       statics:
 *                         type: object
 *                         description: "장치 통계 정보"
 *                         properties:
 *                           lastMsrTime:
 *                             type: string
 *                             example: "2024-03-31 09:35:00"
 *                             description: "마지막 검침 시간"
 *                           isLeak:
 *                             type: integer
 *                             example: 0
 *                             description: "누수 여부"
 *                           msrRatio:
 *                             type: integer
 *                             example: 0
 *                             description: "검침 비율"
 *                           lastMsrValue:
 *                             type: number
 *                             example: 242.865
 *                             description: "마지막 검침 값"
 *                           meterLeak:
 *                             type: integer
 *                             example: 0
 *                             description: "계량기 누수 여부"
 *                           commErr:
 *                             type: integer
 *                             example: 0
 *                             description: "통신 오류 여부"
 *                           meterLeakTime:
 *                             type: string
 *                             example: ""
 *                             description: "계량기 누수 시간"
 *                           ratio:
 *                             type: integer
 *                             example: 0
 *                             description: "비율"
 *                       serviceName:
 *                         type: string
 *                         example: "구리시 원격검침 서비스"
 *                         description: "서비스명"
 *                       templateName:
 *                         type: string
 *                         example: "NTMORE"
 *                         description: "템플릿명"
 */

/**
 * @swagger
 * /api/checklists:
 *   get:
 *     summary: "8. 체크리스트 조회"
 *     tags: ["api"]
 *     parameters:
 *       - in: path
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: "체크리스트 타입"
 *       - in: path
 *         name: catg
 *         schema:
 *           type: string
 *         required: true
 *         description: "카테고리"
 *       - in: path
 *         name: serviceId
 *         schema:
 *           type: string
 *         required: true
 *         description: "서비스 ID"
 *     responses:
 *       200:
 *         description: "체크리스트 조회 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rows:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "Hg197pABArPow1pe1-jd"
 *                         description: "고유 ID"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-07-26T10:02:23.068Z"
 *                         description: "생성 일시"
 *                       docType:
 *                         type: string
 *                         example: "checklist"
 *                         description: "문서 타입"
 *                       serviceId:
 *                         type: string
 *                         example: "tLeM1X0BArPow1peqV3a"
 *                         description: "서비스 ID"
 *                       categoryId:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: []
 *                         description: "카테고리 ID 목록"
 *                       properties:
 *                         type: object
 *                         description: "체크리스트 속성"
 *                         properties:
 *                           code:
 *                             type: string
 *                             example: "DEV_WRK,ti0nt7q51p8"
 *                             description: "코드"
 *                           name:
 *                             type: string
 *                             example: "2024 단말기 설치/교체"
 *                             description: "체크리스트 이름"
 *                           type:
 *                             type: string
 *                             example: "device"
 *                             description: "체크리스트 유형"
 *                           items:
 *                             type: array
 *                             description: "체크리스트 항목"
 *                             items:
 *                               type: object
 *                               properties:
 *                                 code:
 *                                   type: string
 *                                   example: "DEV_WRK,ti0nt7q51p8"
 *                                 deviceUpdate:
 *                                   type: boolean
 *                                   example: true
 *                                 requiredCheck:
 *                                   type: integer
 *                                   example: 0
 *                                 prof:
 *                                   type: string
 *                                   example: ""
 *                                 required:
 *                                   type: boolean
 *                                   example: true
 *                                 isFileContain:
 *                                   type: boolean
 *                                   example: true
 *                                 inpt:
 *                                   type: string
 *                                   example: "radio"
 *                                 name:
 *                                   type: string
 *                                   example: "단말기 설치"
 *                                 _id:
 *                                   type: string
 *                                   example: "dchoGkHELZMBbPzXVOCT"
 *                                 text:
 *                                   type: string
 *                                   example: "단말기 설치"
 *                                 attach:
 *                                   type: object
 *                                   properties:
 *                                     ext:
 *                                       type: array
 *                                       items:
 *                                         type: string
 *                                       example: ["jpg", "jpeg", "png"]
 *                                     count:
 *                                       type: string
 *                                       example: "5"
 *                                     limit:
 *                                       type: integer
 *                                       example: 3145728
 *                                 items:
 *                                   type: array
 *                                   items:
 *                                     type: object
 *                                     properties:
 *                                       refs:
 *                                         type: array
 *                                         items:
 *                                           type: string
 *                                         example: []
 *                                       value:
 *                                         type: string
 *                                         example: "단말기 신규 설치"
 *                                       base:
 *                                         type: string
 *                                         example: ""
 *                                 key:
 *                                   type: string
 *                                   example: "images"
 *                                 order:
 *                                   type: integer
 *                                   example: 0
 *                           catg:
 *                             type: string
 *                             example: "work"
 *                             description: "카테고리"
 *                           desc:
 *                             type: string
 *                             example: "2024 그렉터 단말기 테스트"
 *                             description: "설명"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-09-11T00:29:59.245Z"
 *                         description: "수정 일시"
 *                       serviceName:
 *                         type: string
 *                         example: "엘리엇 워터 v1.0"
 *                         description: "서비스 이름"
 */

/**
 * @swagger
 * /api/devices:
 *   put:
 *     summary: "장치 수정"
 *     tags: ["api"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               properties:
 *                 type: object
 *                 properties:
 *                   grtId:
 *                     type: string
 *                     example: ""
 *                   isp:
 *                     type: string
 *                     example: "GLOBAL"
 *                   manufacturer:
 *                     type: string
 *                     example: "(주)그렉터"
 *                   protocol:
 *                     type: string
 *                     example: "UDP"
 *                   msrNo:
 *                     type: string
 *                     example: "026169032515"
 *                   meterAmount:
 *                     type: string
 *                     example: ""
 *                   model:
 *                     type: string
 *                     example: "GRIDON"
 *                   msrReport:
 *                     type: integer
 *                     example: 1
 *                   images:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: []
 *                   fcltStatus:
 *                     type: string
 *                     example: "P"
 *                   iface:
 *                     type: string
 *                     example: "CAT.M1"
 *                   msrDate:
 *                     type: integer
 *                     example: 25
 *                   fcltId:
 *                     type: string
 *                     example: "32-041-0604-0099"
 *                   meterCategory:
 *                     type: string
 *                     example: "A"
 *                   name:
 *                     type: string
 *                     example: "수용가 테스트"
 *                   location:
 *                     type: string
 *                     example: ""
 *                   user:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         contact:
 *                           type: string
 *                           example: ""
 *                         name:
 *                           type: string
 *                           example: "그리드온"
 *                         _id:
 *                           type: string
 *                           example: "9q89vJEBH5GfLRy3TlAC"
 *                         username:
 *                           type: string
 *                           example: "gridon"
 *                   maintenance:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         styl:
 *                           type: string
 *                           example: "prd"
 *                         code:
 *                           type: string
 *                           example: "DEV_WRK,hbl8seukpng"
 *                         rptStyl:
 *                           type: string
 *                           example: "week"
 *                         start:
 *                           type: string
 *                           format: date-time
 *                           example: "2024-09-06T00:00:00.000Z"
 *                         type:
 *                           type: string
 *                           example: "device"
 *                         templateId:
 *                           type: string
 *                           example: "BcmEv5EBH5GfLRy3Q24z"
 *                         serviceName:
 *                           type: string
 *                           example: "제주시 상수도 원격검침 통합관리시스템"
 *                         manufacturer:
 *                           type: string
 *                           example: "(주)그렉터"
 *                         maintenanceId:
 *                           type: string
 *                           example: "c_k-xpEBH5GfLRy3Sb-N"
 *                         checklistName:
 *                           type: string
 *                           example: "2024년 (주)그렉터 단말기 설치"
 *                         aday:
 *                           type: boolean
 *                           example: true
 *                         typeIds:
 *                           type: array
 *                           items:
 *                             type: string
 *                           example: ["0_k9xpEBH5GfLRy3ILoA"]
 *                         name:
 *                           type: string
 *                           example: "수용가 테스트"
 *                         expr:
 *                           type: string
 *                           example: "0 0 * * "
 *                         end:
 *                           type: string
 *                           format: date-time
 *                           example: "2024-09-07T00:00:00.000Z"
 *                         checklistId:
 *                           type: string
 *                           example: "CMvGv5EBH5GfLRy34lk3"
 *                         status:
 *                           type: string
 *                           example: "P1"
 *                         catg:
 *                           type: string
 *                           example: "work"
 *                   status:
 *                     type: string
 *                     example: "U"
 *               _id:
 *                 type: string
 *                 example: "0_k9xpEBH5GfLRy3ILoA"
 *               docType:
 *                 type: string
 *                 example: "device"
 *               userId:
 *                 type: string
 *                 example: "9q89vJEBH5GfLRy3TlAC"
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-09-06T07:36:45.336Z"
 *               geometry:
 *                 type: object
 *                 properties:
 *                   coordinates:
 *                     type: array
 *                     items:
 *                       type: number
 *                     example: [127.07979, 37.51133440000003]
 *                   type:
 *                     type: string
 *                     example: "Point"
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-09-06T09:20:30.511Z"
 *               templateId:
 *                 type: string
 *                 example: "BcmEv5EBH5GfLRy3Q24z"
 *     responses:
 *       200:
 *         description: "이력 생성 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "이력이 성공적으로 생성되었습니다."
 */

/**
 * @swagger
 * /api/datas/audit/work:
 *   post:
 *     summary: "작업 데이터 생성"
 *     tags:
 *       - "api"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               con:
 *                 type: object
 *                 description: "작업 데이터 객체"
 *                 properties:
 *                   category:
 *                     type: string
 *                     example: "work"
 *                   serviceId:
 *                     type: string
 *                     example: "s17TWo4BArPow1pexSHw"
 *                   checklistId:
 *                     type: string
 *                     example: "fu0ZrI4BArPow1pe8NjK"
 *                   scheduleId:
 *                     type: string
 *                     example: "tKNHipIBArPow1pejlaB"
 *                   start:
 *                     type: string
 *                     format: date
 *                     example: "2024-10-14"
 *                   end:
 *                     type: string
 *                     format: date
 *                     example: "2024-10-15"
 *                   time:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-30T17:58"
 *                   status:
 *                     type: string
 *                     example: "D"
 *                   facilityId:
 *                     type: string
 *                     nullable: true
 *                     example: null
 *                   facilityName:
 *                     type: string
 *                     nullable: true
 *                     example: null
 *                   userId:
 *                     type: string
 *                     example: "gridon"
 *                   userName:
 *                     type: string
 *                     example: "그리드온"
 *                   nodes:
 *                     type: object
 *                     properties:
 *                       checklistdata:
 *                         type: object
 *                         description: "체크리스트 데이터"
 *                         properties:
 *                           images:
 *                             type: string
 *                             example: "단말기 신규 설치"
 *                           images_isRequired:
 *                             type: boolean
 *                             example: false
 *                           images_requiredCheck:
 *                             type: integer
 *                             example: 0
 *                           images_phts:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: []
 *                           grtId:
 *                             type: string
 *                             example: "026169032515"
 *                           grtId_isRequired:
 *                             type: boolean
 *                             example: false
 *                           grtId_requiredCheck:
 *                             type: integer
 *                             example: 0
 *                           grtId_phts:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: []
 *                           addressMain:
 *                             type: string
 *                             example: "test"
 *                           addressMain_isRequired:
 *                             type: boolean
 *                             example: false
 *                           addressMain_requiredCheck:
 *                             type: integer
 *                             example: 0
 *                           addressMain_phts:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: []
 *                           meterAmount:
 *                             type: string
 *                             example: "1234"
 *                           meterAmount_isRequired:
 *                             type: boolean
 *                             example: false
 *                           meterAmount_requiredCheck:
 *                             type: integer
 *                             example: 0
 *                           meterAmount_phts:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: []
 *                           location:
 *                             type: array
 *                             items:
 *                               type: number
 *                             example: [127.0798072, 37.51130470000001]
 *                           location_isRequired:
 *                             type: boolean
 *                             example: false
 *                           location_requiredCheck:
 *                             type: integer
 *                             example: 0
 *                           location_phts:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: []
 *                           memo:
 *                             type: string
 *                             example: "test"
 *                           memo_isRequired:
 *                             type: boolean
 *                             example: false
 *                           memo_requiredCheck:
 *                             type: integer
 *                             example: 0
 *                           memo_phts:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: []
 *                       type:
 *                         type: string
 *                         example: "device"
 *                   type:
 *                     type: string
 *                     example: "device"
 *                   deviceId:
 *                     type: string
 *                     example: "Z23OdJIBArPow1peQPGM"
 *     responses:
 *       200:
 *         description: "작업 데이터 생성 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "데이터가 성공적으로 저장되었습니다."
 */

/**
 * @swagger
 * /api/datas/audit/work:
 *   put:
 *     summary: "작업 데이터 수정"
 *     tags:
 *       - "api"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               con:
 *                 type: object
 *                 description: "작업 데이터 객체"
 *                 properties:
 *                   category:
 *                     type: string
 *                     example: "work"
 *                   serviceId:
 *                     type: string
 *                     example: "s17TWo4BArPow1pexSHw"
 *                   checklistId:
 *                     type: string
 *                     example: "fu0ZrI4BArPow1pe8NjK"
 *                   scheduleId:
 *                     type: string
 *                     example: "tKNHipIBArPow1pejlaB"
 *                   start:
 *                     type: string
 *                     format: date
 *                     example: "2024-10-14"
 *                   end:
 *                     type: string
 *                     format: date
 *                     example: "2024-10-15"
 *                   time:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-30T17:58"
 *                   status:
 *                     type: string
 *                     example: "D"
 *                   facilityId:
 *                     type: string
 *                     nullable: true
 *                     example: null
 *                   facilityName:
 *                     type: string
 *                     nullable: true
 *                     example: null
 *                   userId:
 *                     type: string
 *                     example: "gridon"
 *                   userName:
 *                     type: string
 *                     example: "그리드온"
 *                   nodes:
 *                     type: object
 *                     properties:
 *                       checklistdata:
 *                         type: object
 *                         description: "체크리스트 데이터"
 *                         properties:
 *                           images:
 *                             type: string
 *                             example: "단말기 신규 설치"
 *                           images_isRequired:
 *                             type: boolean
 *                             example: false
 *                           images_requiredCheck:
 *                             type: integer
 *                             example: 0
 *                           images_phts:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: []
 *                           grtId:
 *                             type: string
 *                             example: "026169032515"
 *                           grtId_isRequired:
 *                             type: boolean
 *                             example: false
 *                           grtId_requiredCheck:
 *                             type: integer
 *                             example: 0
 *                           grtId_phts:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: []
 *                           addressMain:
 *                             type: string
 *                             example: "test"
 *                           addressMain_isRequired:
 *                             type: boolean
 *                             example: false
 *                           addressMain_requiredCheck:
 *                             type: integer
 *                             example: 0
 *                           addressMain_phts:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: []
 *                           meterAmount:
 *                             type: string
 *                             example: "1234"
 *                           meterAmount_isRequired:
 *                             type: boolean
 *                             example: false
 *                           meterAmount_requiredCheck:
 *                             type: integer
 *                             example: 0
 *                           meterAmount_phts:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: []
 *                           location:
 *                             type: array
 *                             items:
 *                               type: number
 *                             example: [127.0798072, 37.51130470000001]
 *                           location_isRequired:
 *                             type: boolean
 *                             example: false
 *                           location_requiredCheck:
 *                             type: integer
 *                             example: 0
 *                           location_phts:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: []
 *                           memo:
 *                             type: string
 *                             example: "test"
 *                           memo_isRequired:
 *                             type: boolean
 *                             example: false
 *                           memo_requiredCheck:
 *                             type: integer
 *                             example: 0
 *                           memo_phts:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: []
 *                       type:
 *                         type: string
 *                         example: "device"
 *                   type:
 *                     type: string
 *                     example: "device"
 *                   deviceId:
 *                     type: string
 *                     example: "Z23OdJIBArPow1peQPGM"
 *     responses:
 *       200:
 *         description: "작업 데이터 생성 수정"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "데이터가 성공적으로 수정되었습니다."
 */
