import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next";

import "../../../styles/NotFoundPage/NotFoundPage.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 4443000);
  }, [navigate]);

  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">{t("notFound")}</h1>
    </div>
  );
};

export default NotFoundPage;
