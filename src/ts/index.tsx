import { createRoot } from "react-dom/client"
import Home from "./Home"

const rootElem = document.getElementById("root")
const root = createRoot(rootElem)

root.render(<Home />)
