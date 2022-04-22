import Link from "next/link";
import { ReactNode } from "react";
import { LinkName } from "./styles";

interface NavLinkProps {
  children: ReactNode;
  url: string;
}

export function NavLink({ children, url }: NavLinkProps) {
  return (
    <Link href={url} passHref>
      <LinkName>
        {children}
      </LinkName>
    </Link>
  );
}
