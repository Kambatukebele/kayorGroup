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
            // Define custom keyframes
            keyframes: {
                // Wiggle animation with more intense effect
                wiggleMore: {
                    "0%, 100%": { transform: "rotate(-10deg)" },
                    "50%": { transform: "rotate(10deg)" },
                },
                // Bounce animation keyframes
                bounce: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-25%)" },
                },
                fadeRight: {
                    "0%": { opacity: "0", transform: "translateX(-50px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                fadeLeft: {
                    "0%": { opacity: "0", transform: "translateX(50px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
            },
            // Define custom animations
            animation: {
                // wiggle-more: use the wiggleMore keyframes and customize duration
                "wiggle-more": "wiggleMore 1s ease-in-out infinite",

                // thrice: animation that runs three times then stops
                thrice: "wiggleMore 1s ease-in-out 3",

                // linear-ease: using linear easing for smooth movement
                "ease-linear": "wiggleMore 1s linear infinite",
                // Standard bounce with infinite repeat
                bounce: "bounce 1s ease-in-out infinite",

                // Thrice: bounce animation that runs three times then stops
                "bounce-thrice": "bounce 1s ease-in-out 3",

                // Linear easing version of bounce for smooth transition
                "bounce-ease-linear": "bounce 1s linear infinite",
                "fade-right": "fadeRight 1s ease-out forwards",
                "fade-left": "fadeLeft 1s ease-out forwards",
            },
        },
    },

    plugins: [forms],
};
