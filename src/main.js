const app = document.querySelector('#app');

fetch(new URL('../aura-website (1).html', import.meta.url))
  .then((r) => {
    if (!r.ok) throw new Error(`Failed to load HTML: ${r.status}`);
    return r.text();
  })
  .then((html) => {
    app.innerHTML = html;
  })
  .catch((err) => {
    app.innerHTML = `<pre style="white-space:pre-wrap;color:red;">${err}</pre>`;
  });
