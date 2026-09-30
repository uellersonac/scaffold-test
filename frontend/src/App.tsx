import "./App.css";

function App() {
  return (
    <main className="page">
      <section className="welcome" aria-labelledby="page-title">
        <span className="eyebrow">Frontend</span>
        <h1 id="page-title">Seu projeto começa aqui.</h1>
        <p>
          Esta aplicação React está pronta para evoluir e se comunicar com a
          API FastAPI do monorepo.
        </p>
        <a
          className="api-link"
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          Conheca o React <span aria-hidden="true">↗</span>
        </a>
      </section>
      <footer className="footer">React + TypeScript + Vite</footer>
    </main>
  );
}

export default App;
