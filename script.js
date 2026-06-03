const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const root = document.documentElement;
const hero = document.querySelector(".hero");
const intro = document.querySelector(".intro-section");
const showcase = document.querySelector(".sticky-showcase");
const useSection = document.querySelector(".use-section");
const featureCards = [...document.querySelectorAll("[data-feature-card]")];
const featureFaces = [...document.querySelectorAll("[data-feature-face]")];
const showcaseDescription = document.querySelector("#showcase-description");

const descriptions = [
  "과제, 공지, 온라인 강의, 제출 흐름을 Discord 대화 안에서 정리합니다.",
  "성적, 출석, 졸업 요건과 시간표 후보를 한 화면처럼 비교할 수 있게 도와줍니다.",
  "학교 공지, 학식, 셔틀, 스터디룸처럼 매일 확인하는 정보를 빠르게 가져옵니다.",
  "출석 누락 알림, 연구실 안전 교육, 강의평가 제출처럼 반복되는 흐름을 줄여드립니다.",
];

let activeFeatureIndex = -1;

function sectionProgress(element) {
  if (!element) return 0;
  const rect = element.getBoundingClientRect();
  const scrollable = Math.max(1, rect.height - window.innerHeight);
  return clamp(-rect.top / scrollable);
}

function entryProgress(element) {
  if (!element) return 0;
  const rect = element.getBoundingClientRect();
  return clamp((window.innerHeight - rect.top) / (window.innerHeight * 0.7));
}

function setActiveFeature(index) {
  if (index === activeFeatureIndex) return;
  activeFeatureIndex = index;

  featureCards.forEach((card, cardIndex) => {
    card.classList.toggle("active", cardIndex === index);
  });

  featureFaces.forEach((face, faceIndex) => {
    face.classList.toggle("active", faceIndex === index);
  });

  if (showcaseDescription) {
    showcaseDescription.textContent = descriptions[index] ?? descriptions[0];
  }
}

function updateScrollState() {
  const heroProgress = sectionProgress(hero);
  const heroReveal = clamp((heroProgress - 0.08) / 0.42);
  const heroExit = clamp((heroProgress - 0.68) / 0.24);
  const introProgress = sectionProgress(intro);
  const introEntry = entryProgress(intro);
  const showcaseEntry = entryProgress(showcase);
  const featureProgress = sectionProgress(showcase);
  const featureExit = clamp((featureProgress - 0.88) / 0.12);
  const useEntry = entryProgress(useSection);
  const activeFeature = clamp(
    Math.floor(featureProgress * featureCards.length),
    0,
    featureCards.length - 1,
  );

  root.style.setProperty("--hero-progress", heroProgress.toFixed(3));
  root.style.setProperty("--hero-reveal", heroReveal.toFixed(3));
  root.style.setProperty("--hero-exit", heroExit.toFixed(3));
  root.style.setProperty("--intro-progress", introProgress.toFixed(3));
  root.style.setProperty("--intro-entry", introEntry.toFixed(3));
  root.style.setProperty("--showcase-entry", showcaseEntry.toFixed(3));
  root.style.setProperty("--feature-progress", featureProgress.toFixed(3));
  root.style.setProperty("--feature-exit", featureExit.toFixed(3));
  root.style.setProperty("--use-entry", useEntry.toFixed(3));

  setActiveFeature(activeFeature);
}

let ticking = false;

function requestUpdate() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    updateScrollState();
    ticking = false;
  });
}

window.addEventListener("scroll", requestUpdate, { passive: true });
window.addEventListener("resize", requestUpdate);
updateScrollState();
