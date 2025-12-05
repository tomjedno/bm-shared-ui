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
      <main className="app-container">
        {/* NAVBAR JE UVNITŘ OBSAHU */}
        <div className="app-header app-header--inside">
          <Navbar links={links} hideOnPrefix={hideNavbarOnPrefix} />
        </div>

        {children}
      </main>
    </div>
  );
}

export default AppShell;
