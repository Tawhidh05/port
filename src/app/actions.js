"use server";

// Contact form Server Action. Runs only on the server, so no separate API is needed.
// Set WEB3FORMS_KEY in .env.local to receive messages by email.
export async function sendMessage(_prev, formData) {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const errors = {};
  if (name.length < 2) errors.name = "Enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Enter a valid email address.";
  if (message.length < 10) errors.message = "Write at least 10 characters.";
  if (Object.keys(errors).length) return { ok: false, errors };

  const key = process.env.WEB3FORMS_KEY;
  if (!key) {
    console.log("[contact] WEB3FORMS_KEY not set. Message:", { name, email, message });
    return { ok: true, note: "Saved to server log (no email key configured)." };
  }
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: key, name, email, message }),
    });
    if (!res.ok) throw new Error("bad status");
    return { ok: true };
  } catch {
    return { ok: false, errors: { form: "Couldn't send your message. Please try again or email me directly." } };
  }
}
