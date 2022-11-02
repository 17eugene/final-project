import { useEffect, useCallback, useState } from "react";

import { useAppDispatch } from "./redux/hooks/hooks";
import { Routes, Route } from "react-router-dom";
import authOperations from "./redux/users/users-operations";

import Layout from "./components/Layout/Layout";
import MainPage from "./components/_pages/MainPage/MainPage";
import AuthPage from "./components/_pages/AuthPage/AuthPage";
import NotFoundPage from "./components/_pages/NotFoundPage/NotFoundPage";

const App = () => {
  const dispatch = useAppDispatch();
  const [theme, setTheme] = useState<string | null>(null);
  const fetchCurrentUser = useCallback(() => {
    dispatch(authOperations.getCurrent());
  }, [dispatch]);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout theme={theme} setTheme={setTheme} />}>
          <Route index element={<MainPage theme={theme} />} />
          <Route path=":id" element={<h1>Car id</h1>} />
        </Route>
        <Route path="signup" element={<AuthPage />} />
        <Route path="signin" element={<AuthPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
