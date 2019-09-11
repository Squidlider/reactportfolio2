import React, { useState, useEffect, Component } from "react";

export default function Rendertest() {
  useEffect(() => {
    fetchMatches();
  }, []);

  const [matches, setMatches] = useState([]);

  const fetchMatches = async () => {
    const data = await fetch(
      "https://api.opendota.com/api/players/58273933/recentMatches"
    );

    const matches = await data.json();
    console.log(matches[0]);

    setMatches(matches.slice(0, 5));
  };

  return (
    <div>
      <ul>
        {matches.map(match => (
          <li key={match.match_id}>
            {" "}
            {match.match_id} {match.kills} {match.deaths}
          </li>
        ))}
      </ul>
    </div>
  );
}
