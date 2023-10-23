import { renderRoutes } from "./routes/renderRoutes";

renderRoutes('.App');
addEventListener('hashchange', () => renderRoutes('.App'));





