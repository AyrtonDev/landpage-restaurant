import Link from "next/link";

type Props = {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => (
  <header className="w-full flex items-center justify-center h-48 bg-transparent">
    <div className="max-w-7xl w-full h-full px-2 py-4 flex items-center justify-between">
      {children}
    </div>
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
    className="text-2xl font-custom text-custom-primary-f hover:text-custom-primary-q"
  >
    {children}
  </Link>
)
