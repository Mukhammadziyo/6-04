import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Ozbekiston from "./pages/Ozbekiston";
import Iqtisodiyot from "./pages/Iqtisodiyot";
import Jahon from "./pages/Jahon";
import Jamiyat from "./pages/Jamiyat";
import FanTexnika from "./pages/FanTexnika";
import NuqtayiNazar from "./pages/NuqtayiNazar";
import Audio from "./pages/Audio";
import NotFound from "./pages/NotFound";
import Sport from "./pages/Sport";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ozbekiston",
      element: <Ozbekiston />,
    },
    {
      path: "/iqtisodiyot",
      element: <Iqtisodiyot />,
    },
    {
      path: "/jahon",
      element: <Jahon />,
    },
    {
      path: "/jamiyat",
      element: <Jamiyat />,
    },
    {
      path: "/sport",
      element: <Sport />,
    },
    {
      path: "/fan-texnika",
      element: <FanTexnika />,
    },
    {
      path: "/nuqtayi-nazar",
      element: <NuqtayiNazar />,
    },
    {
      path: "/audio",
      element: <Audio />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
