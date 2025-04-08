const toggleButton = document.getElementById("toggleButton")

const body = document.body;
const header = document.querySelector("header");

const currentMode = localStorage.getItem("mode") || "light";
if (currentMode === "dark") {
    body.classList.add("dark");
    body.classList.remove("bg-green-50/80", "text-gray-900");
    body.classList.add("dark:bg-gray-950/90", "dark:text-gray-50");

}

toggleButton.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("bg-green-50/80", "text-gray-900");
        body.classList.remove("dark:bg-gray-950/90", "dark:text-gray-50");
        header.classList.remove("dark");
        header.classList.remove("dark:bg-gray-900/90", "dark:text-gray-50");
        header.classList.add("bg-gray-50/90", "text-gray-950/90")

        localStorage.setItem("mode", "light");
        } else {
            body.classList.add("dark");
            body.classList.remove("bg-green-50/80", "text-gray-900");
            body.classList.add("dark:bg-gray-950/90", "dark:text-gray-50");
            header.classList.add("dark");
            header.classList.add("dark:bg-gray-900/90", "dark:text-gray-50");
            header.classList.remove("bg-gray-50/90", "text-gray-950/90")
            localStorage.setItem("mode", "dark");
        }
})
