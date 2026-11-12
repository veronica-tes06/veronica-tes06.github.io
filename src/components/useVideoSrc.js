import { useEffect, useState } from "react";

// The single-file build embeds videos as base64 "data:" URLs. Safari won't play
// video from a data: URL, so turn it into an in-memory Blob URL, which every
// browser plays. Normal file URLs (e.g. from `npm run dev`) are used as they are.
export default function useVideoSrc(src) {
  const [url, setUrl] = useState(src.startsWith("data:") ? null : src);

  useEffect(() => {
    if (!src.startsWith("data:")) return;
    const [head, b64] = src.split(",");
    const type = head.slice(5).split(";")[0] || "video/mp4";
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const blobUrl = URL.createObjectURL(new Blob([bytes], { type }));
    setUrl(blobUrl);
    return () => URL.revokeObjectURL(blobUrl);
  }, [src]);

  return url;
}
