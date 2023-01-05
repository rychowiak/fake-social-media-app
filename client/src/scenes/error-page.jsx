import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      id="error-page"
      style={{
        position: "relative",
        textAlign: "center",
        top: "50%",
        fontSize: "25px",
      }}
    >
      <h1>Ooops!</h1>
      <p>Sorry, an unexpected error has ocurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
