import {
  Link as RouterLink,
  useLocation,
  useParams as useRouterParams,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

type AnyProps = Record<string, unknown>;

/** Thin wrapper so the ported pages can keep using `to="/some/path"` strings. */
export function Link({ to, ...rest }: { to: string } & AnyProps) {
  const Cmp = RouterLink as unknown as React.ComponentType<AnyProps>;
  return <Cmp to={to} {...rest} />;
}

type NavLinkRender = ((state: { isActive: boolean }) => ReactNode) | ReactNode;

export function NavLink({
  to,
  end,
  className,
  children,
  ...rest
}: {
  to: string;
  end?: boolean;
  className?: string | ((state: { isActive: boolean }) => string);
  children?: NavLinkRender;
} & AnyProps) {
  const { pathname } = useLocation();
  const isActive = end ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);
  const cls = typeof className === "function" ? className({ isActive }) : className;
  const content = typeof children === "function" ? children({ isActive }) : children;
  return (
    <Link to={to} className={cls} {...rest}>
      {content}
    </Link>
  );
}

export function useParams() {
  return useRouterParams({ strict: false }) as Record<string, string | undefined>;
}

export { useLocation };