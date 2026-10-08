import { siteData } from './data.js';
import {
  renderHomeProjects,
  renderPosts,
  renderProjects,
  renderCertifications,
  renderFilters
} from './render.js';

const page = document.body.dataset.page;

function setupNavigation() {
  document.querySelectorAll('[data-nav]').forEach(link => {
    if (link.dataset.nav === page) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!button || !nav) return;

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });
}

function setupFooterYear() {
  document.querySelectorAll('[data-year]').forEach(node => {
    node.textContent = new Date().getFullYear();
  });
}

function renderPage() {
  if (page === 'home') {
    const projectTarget = document.getElementById('home-projects');
    const postTarget = document.getElementById('home-posts');
    if (projectTarget) renderHomeProjects(siteData.projects, projectTarget);
    if (postTarget) renderPosts(siteData.posts.slice(0, 3), postTarget);
  }

  if (page === 'projects') {
    const projectTarget = document.getElementById('projects-list');
    const certTarget = document.getElementById('certifications-list');
    if (projectTarget) renderProjects(siteData.projects, projectTarget);
    if (certTarget) renderCertifications(siteData.certifications, certTarget);
  }

  if (page === 'blog') {
    const filterTarget = document.getElementById('topic-filters');
    const blogTarget = document.getElementById('blog-list');
    if (!filterTarget || !blogTarget) return;

    const show = topic => {
      const filtered = topic === 'All'
        ? siteData.posts
        : siteData.posts.filter(post => post.topics.includes(topic));
      renderPosts(filtered, blogTarget, true);
    };

    renderFilters(siteData.posts, filterTarget, show);
    show('All');
  }
}

setupNavigation();
setupFooterYear();
renderPage();
