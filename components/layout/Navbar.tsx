import Link from "next/link";

interface NavbarProps {
  menuOpen: boolean;
  cartCount: number;
  onMenuToggle: () => void;
  onCartOpen: () => void;
}

/**
 * Top navigation bar: logo (start) · cart + menu (end).
 * Purely presentational — all state lives in `SiteHeader`.
 */
export function Navbar({
  menuOpen,
  cartCount,
  onMenuToggle,
  onCartOpen,
}: NavbarProps) {
  return (
    <div className="flex h-16 items-center justify-between px-5 sm:px-8 md:h-20 md:px-12">
      {/* Logo — top start */}
      <Link
        href="/"
        className="text-[11px] font-bold uppercase tracking-[0.3em] text-white md:text-xs"
      >
        3WEEQ
      </Link>

      {/* Actions — top end: cart + menu */}
      <div className="flex items-center gap-5 md:gap-7">
        {/* Cart */}
        <button
          type="button"
          onClick={onCartOpen}
          aria-label="السلة — open cart"
          className="relative flex items-center text-white/85 transition-colors hover:text-white"
        >
          <svg
            width="17"
            height="19"
            viewBox="0 0 17 19"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 6.5h11l-.8 11H3.8L3 6.5Z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 6.5V5a3 3 0 0 1 6 0v1.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
          <span
            aria-hidden="true"
            className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[9px] font-bold leading-none text-black"
          >
            {cartCount}
          </span>
        </button>

        <span aria-hidden="true" className="h-4 w-px bg-white/20" />

        {/* Menu toggle: label + modern burger that morphs into a close icon */}
        <button
          type="button"
          onClick={onMenuToggle}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="group flex items-center gap-3 text-white/85 transition-colors hover:text-white"
        >
          <span
            lang="ar"
            className="text-[11px] font-medium tracking-[0.18em] md:text-xs"
          >
            القائمة
          </span>
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-[5.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300 ${
                menuOpen ? "-translate-y-[5.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
    </div>
  );
}
