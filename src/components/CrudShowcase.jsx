import AppVideo from "./AppVideo.jsx";
import demo from "../assets/eurovision-crud-app.mp4";

const endpoints = [
  ["GET", "/countries"],
  ["GET", "/countries/{id}"],
  ["POST", "/countries"],
  ["PUT", "/countries/{id}"],
  ["DELETE", "/countries/{id}"],
];

// Shown full width above the project text, so the recording is big enough to read
export function CrudVideo() {
  return (
    <div className="wide-video">
      <AppVideo
        src={demo}
        browser
        title="localhost:8000"
        label="The web app: adding, editing and deleting countries and users"
      />
    </div>
  );
}

export default function CrudShowcase() {
  return (
    <div className="crud">
      <h4 className="panel-title">How it fits together</h4>

      <div className="stack" aria-label="Architecture: browser talks JSON to a PHP REST API, which uses PDO to reach MySQL">
        <div className="layer"><b>Browser</b><span>jQuery · Bootstrap</span></div>
        <div className="arrow" aria-hidden="true"><span>JSON</span>→</div>
        <div className="layer"><b>REST API</b><span>PHP 8 · Slim</span></div>
        <div className="arrow" aria-hidden="true"><span>PDO</span>→</div>
        <div className="layer"><b>Database</b><span>MySQL</span></div>
      </div>

      <ul className="endpoints" aria-label="Country endpoints">
        {endpoints.map(([m, p]) => (
          <li key={m + p}><span className={`verb ${m.toLowerCase()}`}>{m}</span><code>/api{p}</code></li>
        ))}
        <li className="more">+ the same five for /users</li>
      </ul>
    </div>
  );
}
