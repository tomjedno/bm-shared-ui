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
  containerClassName = "",
  children,
}) {
  return (
    <div className="bm-app-root">
      <div className={`app-container ${containerClassName}`}>
        <Navbar links={links} hideOnPrefix={hideNavbarOnPrefix} />
        {children}
      </div>
    </div>
  );
}

export default AppShell;