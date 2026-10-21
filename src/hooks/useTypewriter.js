import { useEffect, useState } from "react";

// Types a word, pauses, deletes it, then moves to the next. Pass a stable array.
export default function useTypewriter(words, { typeSpeed = 90, deleteSpeed = 50, pause = 1600 } = {}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === word) delay = pause;
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") { setDeleting(false); return setIndex((i) => i + 1); }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);
  return text;
}
