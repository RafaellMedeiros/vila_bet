import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";

import Admin from "./pages/Admin";
import Analysis from "./pages/Analysis";
import CadSeller from "./pages/CadSeller";
import GamesWeek from "./pages/GamesWeek";
import Results from "./pages/Results";
import Bets from "./pages/Bets";
import Confirmation from "./pages/Confirmation";
import NotFound from "./pages/NotFound";

export const Routes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/admin", element: <Admin /> },
    { path: "/analise", element: <Analysis /> },
    { path: "/cadrep", element: <CadSeller /> },
    { path: "/jogos", element: <GamesWeek /> },
    { path: "/resultados", element: <Results /> },
    { path: "/apostas", element: <Bets /> },
    { path: "/apostas/confirmacao", element: <Confirmation /> },

    { path: "*", element: <NotFound /> },
  ]);
};
