/** Prefer Next image optimisation in production; keep dev nimble when iterating local assets */
export function shouldOptimizeImages() {
  return process.env.NODE_ENV === "production";
}
