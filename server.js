const express = require('express'); // 설치한 프레임워크 사용하겠다
const app = express(); // express 객체를 생성한다.

app.listen(8081, () => {
    console.log('listening on 8081');
});

app.get('/hello', (req, res) => { // /hello URL로 GET요청시, 'Hello, World!\n' 렌더링
    res.send('Hello, World!\n');
});