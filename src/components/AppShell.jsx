import { Navbar } from "./Navbar.jsx";
import "../styles/index.css";

/**
 * AppShell: společný základ pro stránky
 *
 * Props:
 *  - appName? (zatím nepoužíváme vizuálně)
 *  - links? (propaguje se do <Navbar />)
 *  - hideNavbarOnPrefix? (např. "/share")
 */
export function AppShell({
  appName,
  links,
  hideNavbarOnPrefix = "/share",
  children,
}) {
  return (
    <div className="bm-app-root">
      <header className="app-header">
        <div className="container">
          <Navbar links={links} hideOnPrefix={hideNavbarOnPrefix} />
        </div>
      </header>

      <main className="app-container">
        {children}
      </main>
    </div>
  );
}

export default AppShell;
