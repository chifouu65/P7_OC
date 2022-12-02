import {Link} from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <h1>404</h1>
      <h2>Ouops ! La page que vous demandez n'existe pas.</h2>

        <Link to={'/'}>Retourner à l'accueil</Link>
    </main>
  );
}

export default NotFoundPage;
