// Central config for the embedded 3DVista tour.
// The 3DVista export lives in /public/tour, so it is served at /tour/index.htm.
export const tourConfig = {
  title: "My Virtual Tour",
  subtitle: "Aerial Panorama",
  description: "Explore the project in an interactive 360° aerial virtual tour.",
  src: "/tour/index.htm",
} as const;
