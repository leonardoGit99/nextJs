import Link from "next/link";
import './navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar py-5">
    <h1 className="text-3xl font-bold">Navbar Leonardo</h1>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
      <Link href="/about">About</Link>
      </li>
      <li>
      <Link href="/tienda">Tienda</Link>
      </li>
      <li>
      <Link href="/posts">Posts</Link>
      </li>
    </ul>
  </nav>
  );
}