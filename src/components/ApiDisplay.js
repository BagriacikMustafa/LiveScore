import React, { useState, useEffect } from "react";
import "./ApiDisplay.css";

const App = () => {
  const [liveScores, setLiveScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API çağrısı yapıyoruz
    fetch("http://localhost:3001/api/livescores")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API isteği başarısız oldu");
        }
        return response.json();
      })
      .then((data) => {
        const matches = [];
        for (const key in data.data.matches) {
          matches.push(data.data.matches[key]);
        }
        setLiveScores(matches); // API'den gelen veriyi state'e set ediyoruz
        setLoading(false); // Yükleme durumu bitti
      })
      .catch((err) => {
        setError(err.message); // Hata durumunu state'e set ediyoruz
        setLoading(false); // Hata olsa bile yükleme durumu biter
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
        {liveScores.map((match, index) => {
          const {
            homeTeam,
            awayTeam,
            score,
            competitionId,
            matchSlug,
            stageId,
            status,
            state,
            substate,
          } = match;

          return (
            <li key={index} style={{ marginBottom: "20px" }}>
              <div>
                <strong>{homeTeam?.name || "Bilinmeyen Takım"}</strong>
                <span>
                  {" "}
                  ({score?.home ?? "?"}) - ({score?.away ?? "?"}){" "}
                </span>
                <strong>{awayTeam?.name || "Bilinmeyen Takım"}</strong>
              </div>
              <div style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
                <p>
                  <strong>Maç Slug: </strong> {matchSlug || "Bilinmeyen"}
                </p>
                <p>
                  <strong>Yarışma ID: </strong> {competitionId || "Bilinmeyen"}
                </p>
                <p>
                  <strong>Aşama ID: </strong> {stageId || "Bilinmeyen"}
                </p>
                <p>
                  <strong>Durum: </strong> {status || "Bilinmeyen"} ({state || "?"} -{" "}
                  {substate || "?"})
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
