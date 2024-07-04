import Link from "next/link";

type Props = {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => (
  <header className="max-w-7xl w-full h-48 px-2 py-4 flex items-center justify-between">
      {children}
  </header>
)

export const LinkGroup = ({ children }: Props) => (
  <nav className="flex items-center gap-x-20">
    {children}
  </nav>
)

export const LinkAnchor = ({ href, children }: Props & { href: string }) => (
  <Link
    href={href}
    className="text-2xl font-custom text-white hover:text-custom-secondary-q transition ease-in-out"
  >
    {children}
  </Link>
)
