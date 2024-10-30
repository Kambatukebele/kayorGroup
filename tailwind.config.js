import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                lora: ["Lora", "serif"],
                open_sans: ["Open Sans", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
                poppins: ["Poppins", "sans-seri"],
                merriweather: ["Merriweather", "serif"],
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },

    plugins: [forms],
};
