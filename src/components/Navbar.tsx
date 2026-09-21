import * as React from "react"
import { Menu, X, Home, Info, Mail } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import defaultLogo from "@/assets/logo.jpeg"
import type { NavItem, NavbarProps } from "@/types/navbar"

const DEFAULT_NAV_ITEMS: readonly NavItem[] = [
  {
    label: "Home",
    href: "#home",
    icon: <Home className="h-4 w-4" />,
  },
  {
    label: "About",
    href: "#about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    label: "Contact us",
    href: "#contact",
    icon: <Mail className="h-4 w-4" />,
  },
]

export const Navbar: React.FC<NavbarProps> = ({
  items = DEFAULT_NAV_ITEMS as NavItem[],
  activeItem,
  onItemClick,
  logoSrc = defaultLogo,
  logoAlt = "Atarixana Logo",
  logoHref = "#",
  brandName = "ATARIXANA",
  showBrandName = true,
  sticky = true,
  buttonSize = "default",
  actions,
  className,
  containerClassName,
  ...props
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [internalActive, setInternalActive] = React.useState<string>("Home")

  // Controlled or uncontrolled active state
  const currentActive = activeItem !== undefined ? activeItem : internalActive

  const handleItemClick = (
    item: NavItem,
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    setInternalActive(item.label)
    setMobileMenuOpen(false)
    if (item.onClick) {
      item.onClick(event)
    }
    if (onItemClick) {
      onItemClick(item, event)
    }
  }

  return (
    <header
      className={cn(
        "w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 z-50 transition-all",
        sticky && "sticky top-0",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {/* Logo and Brand */}
        <a
          href={logoHref}
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg p-1 transition-opacity hover:opacity-90"
          aria-label={`${brandName} Home`}
        >
          <div className="relative flex items-center justify-center h-10 w-10 overflow-hidden rounded-full ring-2 ring-border group-hover:ring-primary/80 transition-all duration-300 shadow-md">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="eager"
            />
          </div>
          {showBrandName && (
            <span className="font-extrabold tracking-widest text-lg sm:text-xl uppercase bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent select-none">
              {brandName}
            </span>
          )}
        </a>

        {/* Desktop Navigation in Row Dimension (justify-between across header) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-2 lg:gap-3"
        >
          {items.map((item) => {
            const isActive =
              item.isActive !== undefined
                ? item.isActive
                : currentActive === item.label || currentActive === item.href

            const resolvedVariant: ButtonProps["variant"] =
              item.variant ?? (isActive ? "secondary" : "ghost")

            return (
              <Button
                key={item.label}
                variant={resolvedVariant}
                size={buttonSize}
                onClick={(e) => handleItemClick(item, e)}
                asChild={Boolean(item.href && !item.onClick)}
                className={cn(
                  "font-medium transition-all duration-200",
                  isActive &&
                    "font-semibold text-primary bg-secondary/80 shadow-xs ring-1 ring-border/50",
                  !isActive && "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.ariaLabel || item.label}
              >
                {item.href && !item.onClick ? (
                  <a href={item.href} target={item.target}>
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <>
                    {item.icon}
                    <span>{item.label}</span>
                  </>
                )}
              </Button>
            )
          })}

          {actions && <div className="ml-2 flex items-center gap-2">{actions}</div>}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          {actions}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="text-foreground"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 transition-transform duration-200" />
            ) : (
              <Menu className="h-5 w-5 transition-transform duration-200" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg px-4 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {items.map((item) => {
              const isActive =
                item.isActive !== undefined
                  ? item.isActive
                  : currentActive === item.label || currentActive === item.href

              const resolvedVariant: ButtonProps["variant"] =
                item.variant ?? (isActive ? "secondary" : "ghost")

              return (
                <Button
                  key={item.label}
                  variant={resolvedVariant}
                  size="default"
                  onClick={(e) => handleItemClick(item, e)}
                  asChild={Boolean(item.href && !item.onClick)}
                  className={cn(
                    "w-full justify-start gap-3 text-base font-medium",
                    isActive &&
                      "font-semibold text-primary bg-secondary/80 ring-1 ring-border/50",
                    !isActive && "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.href && !item.onClick ? (
                    <a href={item.href} target={item.target} className="flex items-center gap-3 w-full">
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <>
                      {item.icon}
                      <span>{item.label}</span>
                    </>
                  )}
                </Button>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
