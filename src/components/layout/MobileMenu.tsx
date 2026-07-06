import Link from "next/link";
import { Button } from "@/components/ui/Button";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
};

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="border-t border-border-subtle bg-background md:hidden">
      <div className="flex flex-col gap-2 px-4 py-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-surface hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-2">
          <Button href="/contact" className="w-full">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
