const PROJECTS = [
  {
    "title": "Which earlier programs belong?",
    "body": "Find the programs that reached the same biology, including renamed, transferred and discontinued assets.",
    "action": "Map the field",
    "cluster": [
      "/elements/evaluate/img/investor-presentation.svg",
      "/elements/evaluate/img/internal-research.svg",
      "/elements/evaluate/img/statistical-analysis-plan.svg"
    ],
    "meta": {
      "kind": "docs",
      "icons": [
        "/elements/evaluate/img/sec-filing.svg",
        "/elements/evaluate/img/archived-sponsor-page.svg",
        "/elements/evaluate/img/licensing-agreement.svg"
      ],
      "label": "Program sources"
    }
  },
  {
    "title": "Why did development stop?",
    "body": "Separate efficacy, tolerability, exposure, trial execution and strategy before carrying the result forward.",
    "action": "Trace the stop",
    "cluster": [
      "/elements/evaluate/img/peer-reviewed-paper.svg",
      "/elements/evaluate/img/internal-research.svg",
      "/elements/evaluate/img/earnings-call.svg"
    ],
    "meta": {
      "kind": "docs",
      "icons": [
        "/elements/evaluate/img/peer-reviewed-paper.svg",
        "/elements/evaluate/img/internal-research.svg",
        "/elements/evaluate/img/earnings-call.svg"
      ],
      "label": "Discontinuation evidence"
    }
  },
  {
    "title": "Did exposure drive the finding?",
    "body": "Compare dose, exposure, timing, reversibility and recurrence across the programs that matter.",
    "action": "Test exposure",
    "cluster": [
      "/elements/evaluate/img/statistical-analysis-plan.svg",
      "/elements/evaluate/img/peer-reviewed-paper.svg",
      "/elements/evaluate/img/archived-sponsor-page.svg"
    ],
    "meta": {
      "kind": "docs",
      "icons": [
        "/elements/evaluate/img/statistical-analysis-plan.svg",
        "/elements/evaluate/img/peer-reviewed-paper.svg",
        "/elements/evaluate/img/archived-sponsor-page.svg"
      ],
      "label": "Dose and exposure evidence"
    }
  },
  {
    "title": "What changed in the molecule?",
    "body": "Test whether chemistry, selectivity or dosing changes the condition behind the earlier result.",
    "action": "Compare design",
    "cluster": [
      "/elements/evaluate/img/peer-reviewed-paper.svg",
      "/elements/evaluate/img/archived-sponsor-page.svg",
      "/elements/evaluate/img/internal-research.svg"
    ],
    "meta": {
      "kind": "docs",
      "icons": [
        "/elements/evaluate/img/peer-reviewed-paper.svg",
        "/elements/evaluate/img/archived-sponsor-page.svg",
        "/elements/evaluate/img/internal-research.svg"
      ],
      "label": "Molecular design evidence"
    }
  },
  {
    "title": "Are the trials comparable?",
    "body": "Line up population, background therapy, duration, monitoring and endpoints before comparing outcomes.",
    "action": "Match trials",
    "cluster": [
      "/elements/evaluate/img/statistical-analysis-plan.svg",
      "/elements/evaluate/img/internal-research.svg",
      "/elements/evaluate/img/peer-reviewed-paper.svg"
    ],
    "meta": {
      "kind": "none"
    }
  },
  {
    "title": "What has the agency already said?",
    "body": "Place reviews, holds, correspondence and label decisions beside the current development plan.",
    "action": "Open agency history",
    "cluster": [
      "/elements/evaluate/img/archived-sponsor-page.svg",
      "/elements/evaluate/img/ema-assessment-report.svg",
      "/elements/evaluate/img/sec-filing.svg"
    ],
    "meta": {
      "kind": "docs",
      "icons": [
        "/elements/evaluate/img/archived-sponsor-page.svg",
        "/elements/evaluate/img/ema-assessment-report.svg",
        "/elements/evaluate/img/sec-filing.svg"
      ],
      "label": "Agency record"
    }
  },
  {
    "title": "Which result changes the case next?",
    "body": "Put the upcoming evidence in order and show exactly what each outcome would settle.",
    "action": "Track the readout",
    "cluster": [
      "/elements/evaluate/img/earnings-call.svg",
      "/elements/evaluate/img/sec-filing.svg",
      "/elements/evaluate/img/archived-sponsor-page.svg"
    ],
    "meta": {
      "kind": "docs",
      "icons": [
        "/elements/evaluate/img/statistical-analysis-plan.svg",
        "/elements/evaluate/img/earnings-call.svg",
        "/elements/evaluate/img/archived-sponsor-page.svg"
      ],
      "label": "Upcoming readout record"
    }
  },
  {
    "title": "Which results do not fit the pattern?",
    "body": "Find the programs that break the apparent pattern and check whether biology, exposure or trial design explains the difference.",
    "action": "Test the exception",
    "cluster": [
      "/elements/evaluate/img/peer-reviewed-paper.svg",
      "/elements/evaluate/img/archived-sponsor-page.svg",
      "/elements/evaluate/img/statistical-analysis-plan.svg"
    ],
    "meta": {
      "kind": "docs",
      "icons": [
        "/elements/evaluate/img/peer-reviewed-paper.svg",
        "/elements/evaluate/img/statistical-analysis-plan.svg",
        "/elements/evaluate/img/archived-sponsor-page.svg"
      ],
      "label": "Contradicting evidence"
    }
  }
];
(() => {
  const root = document.querySelector('[data-investigate-project-loop]');
  if (!root) return;
  const asset = path => new URL(path, document.baseURI).href;
  const stack = root.querySelector('[data-investigate-stack]');
  const positions = [-3, -2, -1, 0, 1, 2, 3];
  const transitionMs = 900;
  const holdMs = 2600;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeIndex = 0;
  let timer = null;
  let moving = false;
  const mod = (value, size) => ((value % size) + size) % size;

  function metaMarkup(meta) {
    if (!meta || meta.kind === 'none') return '<div class="investigate-loop__feature-meta is-empty"></div>';
    if (meta.kind === 'docs') {
      const icons = meta.icons.map(icon => `<img src="${asset(icon)}" alt="" width="18" height="18">`).join('');
      return `<div class="investigate-loop__feature-meta"><span class="investigate-loop__doc-set"><span class="investigate-loop__doc-set-icons">${icons}</span><span class="investigate-loop__doc-set-name">${meta.label}</span><span class="investigate-loop__doc-set-more">linked files</span></span></div>`;
    }
    return '<div class="investigate-loop__feature-meta is-empty"></div>';
  }

  function projectMarkup(project) {
    const sourceIcons = project.cluster.map(icon => `<img src="${asset(icon)}" alt="" width="20" height="20">`).join('');
    return `<div class="investigate-loop__row"><span class="investigate-loop__row-title">${project.title}</span></div>
      <div class="investigate-loop__feature">
        <div class="investigate-loop__feature-inner">
          <p class="investigate-loop__feature-title">${project.title}</p>
          <p class="investigate-loop__feature-body">${project.body}</p>
          ${metaMarkup(project.meta)}
        </div>
        <div class="investigate-loop__source-cluster">${sourceIcons}</div>
        <span class="investigate-loop__action">${project.action}</span>
      </div>`;
  }

  function fillSlot(slot, projectIndex) {
    const normalizedIndex = mod(projectIndex, PROJECTS.length);
    slot.dataset.projectIndex = String(normalizedIndex);
    slot.innerHTML = projectMarkup(PROJECTS[normalizedIndex]);
  }

  const slots = positions.map(position => {
    const slot = document.createElement('div');
    slot.className = 'investigate-loop__project';
    slot.dataset.position = String(position);
    fillSlot(slot, activeIndex + position);
    stack.appendChild(slot);
    return slot;
  });

  function schedule() {
    if (reducedMotion || document.hidden) return;
    clearTimeout(timer);
    timer = window.setTimeout(advance, holdMs);
  }
  function advance() {
    if (moving) return;
    moving = true;
    activeIndex = mod(activeIndex + 1, PROJECTS.length);
    slots.forEach(slot => { slot.dataset.position = String(Number(slot.dataset.position) - 1); });
    window.setTimeout(() => {
      const leaving = slots.find(slot => Number(slot.dataset.position) === -4);
      if (leaving) {
        leaving.classList.add('is-resetting');
        fillSlot(leaving, activeIndex + 3);
        leaving.dataset.position = '3';
        void leaving.offsetHeight;
        requestAnimationFrame(() => leaving.classList.remove('is-resetting'));
      }
      moving = false;
      schedule();
    }, transitionMs + 40);
  }
  document.addEventListener('visibilitychange', () => {
    clearTimeout(timer);
    if (!document.hidden) schedule();
  });
  schedule();
})();
