// src/App.js
import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState("");

    useEffect(() => {
        // Flask APIエンドポイントにリクエスト
        fetch('http://localhost:5000/')
            .then(response => response.text())  // テキストとして取得
            .then(data => setData(data))        // 取得したデータを状態に保存
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>{data}</h1>
        </div>
    );
}

export default App;
