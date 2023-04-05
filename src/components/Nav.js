import Link from "next/link";
import { useRouter } from "next/router";
const Nav = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <nav className="rounded-md bg-white/20">
      <ul className="flex text-white">
        <li>
          <Link
            className={`${
              pathname === "/" ? "bg-white/30" : null
            } hover:bg-white/20 p-5 inline-block rounded-l-md`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === "/about" ? "bg-white/30" : null
            } hover:bg-white/20 p-5 inline-block`}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
