import { exoplanetResults } from "../content.js";

const classes = [
  { name: "Confirmed", p: 0.89, r: 0.94 },
  { name: "False positive", p: 0.9, r: 0.92 },
  { name: "Candidate", p: 0.73, r: 0.65 },
];

export default function ExoplanetChart() {
  const min = 60;
  const max = 100;
  const pct = (v) => ((v - min) / (max - min)) * 100;
  return (
    <div className="exo">
      <h4 className="panel-title">How the model improved</h4>
      <p className="panel-sub">Accuracy, 5-fold cross-validation on all 9,564 objects</p>
      <ul className="bars">
        {exoplanetResults.map((r) => (
          <li key={r.model} className={r.best ? "best" : ""}>
            <span className="bar-label">{r.model}</span>
            <span className="bar-track">
              <span className="bar-fill" style={{ width: `${pct(r.acc)}%` }} />
              <span className="bar-value">{r.acc}%</span>
            </span>
          </li>
        ))}
        <li className="leak">
          <span className="bar-label">With leaked NASA columns (rejected)</span>
          <span className="bar-track">
            <span className="bar-fill" style={{ width: `${pct(95)}%` }} />
            <span className="bar-value">~95%</span>
          </span>
        </li>
      </ul>
      <p className="axis-note">Axis starts at 60%</p>

      <h4 className="panel-title spaced">Per class, best model</h4>
      <table className="mini-table">
        <thead>
          <tr><th scope="col">Class</th><th scope="col">Precision</th><th scope="col">Recall</th></tr>
        </thead>
        <tbody>
          {classes.map((c) => (
            <tr key={c.name}><td>{c.name}</td><td>{c.p.toFixed(2)}</td><td>{c.r.toFixed(2)}</td></tr>
          ))}
        </tbody>
      </table>
      <p className="panel-sub">
        Candidates are hardest: they're signals nobody has confirmed or ruled out yet, so many look exactly like the other two classes.
      </p>
    </div>
  );
}
