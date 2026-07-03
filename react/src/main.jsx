import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import './index.css'
import App from './App.jsx'
import Resume from "./pages/Resume/Resume.jsx";
import {ProjectsMemo} from "./pages/Projects/Projects.jsx";
import About from "./pages/About/About.jsx";

const Router=createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/"
                element={<App />}
                errorElement={<p>Route error: the page failed to render.</p>}
            >
                <Route index element={<About />} />
                <Route path="projects" element={<ProjectsMemo />} />
                <Route  path="resume" element={<Resume />} />
            </Route>,
        ),
        {
            basename: import.meta.env.BASE_URL,
        },
)

createRoot(document.getElementById('root')).render(
        <StrictMode>
                <RouterProvider router={Router}/>
         </StrictMode>

)


