import React from "react";
import { Navbar } from "./Navbar.jsx";
import "../styles/index.css";

/**
 * AppShell: společný základ pro stránky
 *
 * Props:
 *  - appName? (zatím nepoužíváme vizuálně, nechávám do budoucna)
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
      <Navbar links={links} hideOnPrefix={hideNavbarOnPrefix} />
      <div className="app-container">{children}</div>
    </div>
  );
}

export default AppShell;