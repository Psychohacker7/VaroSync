/* Morphs one word into another through random glyphs. */

export class TextScramble {
  // The trailing underscores are deliberate: 8 of these 25 characters are '_',
  // so ~a third of scramble frames read as a cursor/placeholder rather than
  // pure noise. Swap this string to change the texture of the effect.
  constructor(el, chars = '!<>-_\\/[]{}—=+*^?#________') {
    this.el = el;
    this.chars = chars;
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const done = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      // Each character gets its OWN random start and end frame. That is the
      // whole trick — letters begin and finish at different moments, so the
      // morph is ragged instead of a clean left-to-right wipe.
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from: oldText[i] || '', to: newText[i] || '', start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return done;
  }

  update() {
    let output = '';
    let complete = 0;

    for (const item of this.queue) {
      if (this.frame >= item.end) {          // finished → final character
        complete++;
        output += item.to;
      } else if (this.frame >= item.start) { // scrambling → random glyph
        // Only re-roll 28% of frames, so a glyph persists a few frames and
        // reads as a character rather than strobing noise.
        if (!item.char || Math.random() < 0.28) item.char = this.randomChar();
        output += `<span class="dud">${item.char}</span>`;
      } else {                               // not started → old character
        output += item.from;
      }
    }

    this.el.innerHTML = output;
    if (complete === this.queue.length) return this.resolve();
    this.frameRequest = requestAnimationFrame(this.update);
    this.frame++;
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

/** Loop a list of words forever. `hold` = ms to rest on each word. */
export function cycle(el, phrases, hold = 800) {
  const fx = new TextScramble(el);
  let i = 0;
  const next = () => {
    fx.setText(phrases[i]).then(() => setTimeout(next, hold));
    i = (i + 1) % phrases.length;
  };
  next();
  return fx;
}
