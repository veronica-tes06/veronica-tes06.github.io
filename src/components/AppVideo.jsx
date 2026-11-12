import { useEffect, useRef } from "react";
import useVideoSrc from "./useVideoSrc.js";

// A looping, muted screen recording of one of my apps, framed like a window.
export default function AppVideo({ src, title, label, portrait = false, browser = false }) {
  const url = useVideoSrc(src);
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || !url) return;
    // React doesn't always set the muted attribute, and browsers only autoplay muted video
    v.muted = true;
    v.setAttribute("muted", "");
    v.play().catch(() => {});
  }, [url]);

  return (
    <figure className={`app-video${portrait ? " portrait" : ""}`}>
      <div className="window">
        <div className="window-bar">
          <span className="dots" aria-hidden="true"><i /><i /><i /></span>
          <span className={browser ? "window-title url" : "window-title"}>{title}</span>
        </div>
        {url && <video ref={ref} src={url} autoPlay muted loop playsInline aria-label={label} />}
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
