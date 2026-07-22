import "./styles.css";
import { setupControllers } from "./ui/controllers";
import { pageTemplate } from "./ui/template";

const app = document.querySelector<HTMLElement>("#app");
if (!app) throw new Error("Unable to mount AI Cities: #app was not found.");

app.innerHTML = pageTemplate();
setupControllers();
