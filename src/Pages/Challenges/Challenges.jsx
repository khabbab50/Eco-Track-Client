import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function Challenges() {
  const [challenges, setChallenges] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function fetchChallenges() {
      try {
        const res = await api.get(`/challenges${category ? `?category=${category}` : ""}`);
        setChallenges(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchChallenges();
  }, [category]);

  return (
    <div>
      <h2>All Challenges</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Waste Reduction">Waste Reduction</option>
        <option value="Energy Saving">Energy Saving</option>
      </select>

      <div className="challenges-grid">
        {challenges.map((c) => (
          <Link key={c._id} to={`/challenges/${c._id}`}>
            <div className="challenge-card">
              <h4>{c.title}</h4>
              <p>{c.category}</p>
              <p>Participants: {c.participants}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
