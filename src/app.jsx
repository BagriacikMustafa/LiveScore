import React, { useState, useEffect } from 'react';

const App = () => {
  const [liveScores, setLiveScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API çağrısı yapıyoruz
    fetch('http://localhost:3001/api/livescores')
      .then(response => {
        if (!response.ok) {
          throw new Error('API isteği başarısız oldu');
        }
        return response.json();
      })
      .then(data => {
        //console.log(data.data.matches);
        var result = [];
        for(var i in data.data.matches)
          result.push([i, data.data.matches [i]]);
        
        setLiveScores(result);  // API'den gelen veriyi state'e set ediyoruz
        setLoading(false);     // Yükleme durumu bitti
      })
      .catch(err => {
        setError(err.message); // Hata durumunu state'e set ediyoruz
        setLoading(false);     // Hata olsa bile yükleme durumu biter
      });
  }, []); 

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <div>
      <h1>Canlı Skorlar</h1>
      <ul>
       {liveScores.map(function(match, key){
        //console.log(match[1]['homeTeam']['name']); // Bu evsahibi takımın adı
        //console.log(match[1]['awayTeam']['name']); // Bu deplasman takımın adı
        console.log(match[1]['matchName']); // Bu evsahibi takımın adı
        console.log(match[1]['score']['home']); // Bu evsahibi skor
        console.log(match[1]['score']['away']); // Bu deplasman skor
       })}
      </ul>
    </div>
  );
};

export default App;