const express = require('express'); // 설치한 프레임워크 사용하겠다
const app = express(); // express 객체를 생성한다.

app.listen(8081, () => {
    console.log('listening on 8081');
});

app.get('/', (req, res) => { // '/' URL로 GET요청시, index.html 파일 전송 및 렌더링
    res.sendFile(__dirname + '/index.html');
});