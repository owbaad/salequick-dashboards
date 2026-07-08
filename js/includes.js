async function inject(id, url) {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to load ${url}: ${res.status}`);
    return;
  }
  document.getElementById(id).innerHTML = await res.text();
}

(async function build() {
  await inject('site-header', 'partials/header.html');
  await inject('site-nav', 'partials/nav.html');
  await inject('main-selector', 'partials/selector.html');

  const pageTitle = document.body.dataset.title;

  // update header
  const titleEl = document.querySelector('#site-header .header-title');
  if (titleEl && pageTitle) {
    titleEl.textContent = pageTitle;
  }

  // highlight active nav link
  const current = location.pathname.split('/').pop() || 'index.html';
  const link = [...document.querySelectorAll('#site-nav a')]
    .find(a => a.getAttribute('href').split('/').pop() === current);
  if (link) link.classList.add('active');
})();