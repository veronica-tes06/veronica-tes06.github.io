import { useState } from "react";

// "Email me" opens the visitor's mail app with a draft already started;
// "Copy" puts the address on their clipboard for webmail users.
const SUBJECT = "Graduate software engineering role";
const BODY = "Hi Veronica,\n\nI came across your portfolio and would like to talk to you about ";

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers that block the clipboard API (e.g. some file:// pages)
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}

export default function EmailActions({ email }) {
  const [copied, setCopied] = useState(false);
  const href = `mailto:${email}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

  const onCopy = async () => {
    if (await copyText(email)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="email-box">
      <a className="email-address" href={href} title="Write me an email">{email}</a>
      <div className="email-buttons">
        <a className="btn" href={href}>Email me</a>
        <button type="button" className="btn ghost" onClick={onCopy} aria-live="polite">
          {copied ? "Copied!" : "Copy address"}
        </button>
      </div>
    </div>
  );
}
