import type { ProjectId } from "@/config/projects";

/** Per-frame scene inputs, mutated outside React so the 3D scene never re-renders on scroll. */
export const sceneState = {
  scroll: 0,
  /** Raw scroll progress from the page; `scroll` eases toward it each frame. */
  scrollTarget: 0,
  /** Page scroll in viewport heights, used to carry the opening globe away with the first screen. */
  heroScroll: 0,
  pointerX: 0,
  pointerY: 0,
  focus: null as ProjectId | null,
  reducedMotion: false,
  activeSection: "top",
  /** 0→1 as the final section scrolls in; drives the Earth rising behind the closing title. */
  finalRise: 0,
  /** Screen-space (NDC) vertical centre of the closing title. */
  finalY: -2,
};