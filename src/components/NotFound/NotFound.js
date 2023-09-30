import { useNavigate } from "react-router-dom";
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1, { replace: true });
  }

  return (
    <section className="not-found">
      <div className="not-found__container">
        <div className="not-found__text">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__subtitle">Страница не найдена</p>
        </div>
        <button className="not-found__button" onClick={goBack}>Назад</button>
      </div>
    </section>
  )
}

export default NotFound