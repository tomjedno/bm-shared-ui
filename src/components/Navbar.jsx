import { Link, useLocation } from "react-router-dom";

/**
 * Shared Navbar
 *
 * Props:
 *  - links: [{ label, href, external? }]
 *  - hideOnPrefix: string | null  (např. "/share" – stejné chování jako teď)
 *
 * Pokud links nepředáš, použije se default (Portal + Dashboard + Import).
 */
export function Navbar({
  links,
  hideOnPrefix = "/share", // zachováme tvoje původní chování
}) {
  const location = useLocation();

  if (hideOnPrefix && location.pathname.startsWith(hideOnPrefix)) {
    return null;
  }

  const effectiveLinks =
    links && links.length
      ? links
      : [
          {
            label: "Portál",
            href: "https://tomasjedno.cz/portal",
            external: true,
          },
          { label: "Dashboard", href: "/dashboard" },
          { label: "Import", href: "/upload" },
        ];

  return (
    <nav className="navbar">
      {effectiveLinks.map((link, index) =>
        link.external ? (
          <a
            key={index}
            href={link.href}
            className="nav-link"
            target="_blank"
            rel="noopener"
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={index}
            to={link.href}
            className={`nav-link${
              location.pathname === link.href ? " active" : ""
            }`}
          >
            {link.label}
          </Link>
        )
      )}
    </nav>
  );
}

export default Navbar;
