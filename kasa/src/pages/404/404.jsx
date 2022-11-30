import {Link} from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Ouops ! La page que vous demandez n'existe pas.</h2>

        <Link to={'/'}>Retourner à l'accueil</Link>
    </div>
  );
}

export default NotFoundPage;
