function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function linkAttrs(url) {
  const external = /^https?:\/\//i.test(url);
  return external ? ' target="_blank" rel="noopener noreferrer"' : '';
}

export function renderProjects(items, target) {
  const featured = items.filter(item => item.featured);
  const rest = items.filter(item => !item.featured);

  const card = item => `
    <article class="project-card ${item.featured ? 'project-card-featured' : ''}">
      <div class="project-card-top">
        <span class="card-kicker">${escapeHTML(item.role)}</span>
        <span class="status">${escapeHTML(item.status)}</span>
      </div>
      <h3>${escapeHTML(item.name)}</h3>
      <p>${escapeHTML(item.description)}</p>
      <div class="tag-row">${item.stack.map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}</div>
      ${item.note ? `<p class="project-note">${escapeHTML(item.note)}</p>` : ''}
      <a class="text-link" href="${escapeHTML(item.link)}"${linkAttrs(item.link)}>Repository / source <span aria-hidden="true">↗</span></a>
    </article>
  `;

  target.innerHTML = `
    <div class="project-group-title"><span>01</span><h2>Featured</h2></div>
    <div class="project-grid">${featured.map(card).join('')}</div>
    <div class="project-group-title project-group-secondary"><span>02</span><h2>Selected archive</h2></div>
    <div class="project-grid">${rest.map(card).join('')}</div>
  `;
}

export function renderHomeProjects(items, target) {
  const featured = items.filter(item => item.featured).slice(0, 3);
  target.innerHTML = featured.map(item => `
    <article class="project-card compact">
      <div class="project-card-top">
        <span class="card-kicker">${escapeHTML(item.category)}</span>
        <span class="status">${escapeHTML(item.status)}</span>
      </div>
      <h3>${escapeHTML(item.name)}</h3>
      <p>${escapeHTML(item.description)}</p>
      <a class="text-link" href="${escapeHTML(item.link)}"${linkAttrs(item.link)}>View source <span aria-hidden="true">↗</span></a>
    </article>
  `).join('');
}

export function renderPosts(items, target, large = false) {
  target.innerHTML = items.map(item => `
    <article class="post-row ${large ? 'post-row-large' : ''}">
      <div class="post-meta">
        <span>${escapeHTML(item.dateLabel)}</span>
        <span>${escapeHTML(item.type)}</span>
      </div>
      <div class="post-body">
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.summary)}</p>
        <div class="tag-row">${item.topics.map(topic => `<span>${escapeHTML(topic)}</span>`).join('')}</div>
      </div>
      <a class="text-link post-link" href="${escapeHTML(item.link)}"${linkAttrs(item.link)}>Read <span aria-hidden="true">↗</span></a>
    </article>
  `).join('');
}

export function renderCertifications(items, target) {
  target.innerHTML = items.map(item => `
    <article class="cert-row">
      <div>
        <h3>${escapeHTML(item.name)}</h3>
        <p>${escapeHTML(item.provider)} · ${escapeHTML(item.detail)}</p>
      </div>
      <div class="cert-actions">
        <span>${escapeHTML(item.year)}</span>
        <a class="text-link" href="${escapeHTML(item.link)}"${linkAttrs(item.link)}>Provider <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  `).join('');
}

export function renderFilters(items, target, onFilter) {
  const topics = ['All', ...new Set(items.flatMap(item => item.topics))];
  target.innerHTML = topics.map((topic, index) => `
    <button class="filter-button ${index === 0 ? 'active' : ''}" type="button" data-topic="${escapeHTML(topic)}">${escapeHTML(topic)}</button>
  `).join('');

  target.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
      target.querySelectorAll('.filter-button').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      onFilter(button.dataset.topic);
    });
  });
}
