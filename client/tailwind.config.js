/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    //"node_modules/flowbite-react/**/*.{js, ts, jsx, tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), //require("flowbite/plugin")
  ],
};
