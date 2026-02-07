/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          "primary-soft": "#1f2937",
          "secondary-medium": "#374151",
          "tertiary-medium": "#4b5563",
          tertiary: "#6b7280",
        },
        default: "#e5e7eb",
        heading: "#ffffff",
        body: "#9ca3af",
      },
      borderRadius: {
        base: "0.5rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
      borderColor: {
        default: "#e5e7eb",
        "default-medium": "#d1d5db",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-motion")],
  
};
