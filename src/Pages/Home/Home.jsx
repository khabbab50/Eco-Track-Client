import { useEffect, useState } from "react";
import api from "../../api";

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [stats, setStats] = useState({});
  const [challenges, setChallenges] = useState([]);
  const [tips, setTips] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [fRes, cRes, tRes, eRes, sRes] = await Promise.all([
          api.get("/challenges?featured=true"),
          api.get("/challenges?limit=6"),
          api.get("/tips?limit=5"),
          api.get("/events?limit=4"),
          api.get("/stats"),
        ]);

        setFeatured(fRes.data);
        setChallenges(cRes.data);
        setTips(tRes.data);
        setEvents(eRes.data);
        setStats(sRes.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="home-page">
      {/* Carousel */}
      <div className="carousel">
        {featured.map((f) => (
          <div key={f._id} className="carousel-item">
            <img src={f.image} alt={f.title} />
            <h3>{f.title}</h3>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="stats">
        <p>Total Challenges: {stats.totalChallenges || 0}</p>
        <p>Total Tips: {stats.totalTips || 0}</p>
        <p>Total Events: {stats.totalEvents || 0}</p>
      </div>

      {/* Active Challenges */}
      <div className="challenges-grid">
        {challenges.map((c) => (
          <div key={c._id} className="challenge-card">
            <img src={c.image} alt={c.title} />
            <h4>{c.title}</h4>
            <p>{c.category}</p>
            <p>Participants: {c.participants}</p>
            <p>Duration: {c.duration} days</p>
          </div>
        ))}
      </div>

      {/* Recent Tips */}
      <div className="tips-section">
        <h3>Recent Tips</h3>
        {tips.map((tip) => (
          <p key={tip._id}>{tip.content}</p>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="events-section">
        <h3>Upcoming Events</h3>
        {events.map((e) => (
          <div key={e._id}>
            <h4>{e.title}</h4>
            <p>{new Date(e.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
