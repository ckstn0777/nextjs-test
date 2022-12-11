import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-2 bg-gray-200 px-4 py-4">
      <Link href="/">Home</Link>
      <Link href="/page1">Page 1</Link>
    </header>
  );
}
