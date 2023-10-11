const axios = require('axios');
const lostArk_api = require('./lostArk_api');
const express = require('express');
const app = express();
const port = 5000; // 포트 번호를 설정합니다. 원하는 포트로 변경할 수 있습니다.

// 미들웨어 추가
app.use(express.json());

// API 엔드포인트
app.get('/', async (req, res) => {
    try {
        const response = await axios.get(lostArk_api.CharacterUrl, {
            headers: {
                'accept': 'application/json',
                'authorization': lostArk_api.APIkey,
            }
        });
        const data = response.data;
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error('오류:', error);
        res.status(500).json({ error: '서버 오류' });
    }
});
// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});




//   const filteredData = data.filter(info => info.ServerName === '카단');
//   filteredData.forEach(function (info) {
//     console.log("CharacterName: " + info.CharacterName);
//     console.log("CharacterLevel: " + info.CharacterLevel);
//     console.log("CharacterClassName: " + info.CharacterClassName);
//     console.log("ItemMaxLevel: " + info.ItemMaxLevel);
//   });
