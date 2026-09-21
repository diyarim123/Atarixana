import type React from "react"
import type { ButtonProps } from "@/components/ui/button"

export interface NavItem {
  /** Label to display on the button */
  label: string
  /** Navigation target URL or hash */
  href?: string
  /** Callback triggered when button is clicked */
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  /** Explicitly marks this item as active */
  isActive?: boolean
  /** Custom button variant for shadcn button */
  variant?: ButtonProps["variant"]
  /** Optional icon component or node to display inside the button */
  icon?: React.ReactNode
  /** Accessible aria-label */
  ariaLabel?: string
  /** Open in new tab or target */
  target?: string
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /** List of navigation items (defaults to Home, About, Contact us) */
  items?: NavItem[]
  /** Active item label or href */
  activeItem?: string
  /** Callback when any item is clicked */
  onItemClick?: (item: NavItem, event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  /** URL or imported path to logo image */
  logoSrc?: string
  /** Alt text for logo */
  logoAlt?: string
  /** Destination for clicking the logo */
  logoHref?: string
  /** Text brand name displayed next to the logo */
  brandName?: string
  /** Whether to show the brand name alongside the logo */
  showBrandName?: boolean
  /** Stick navbar to the top with backdrop blur */
  sticky?: boolean
  /** Size for navigation buttons */
  buttonSize?: ButtonProps["size"]
  /** Additional custom actions on the far right */
  actions?: React.ReactNode
  /** Additional class names for inner container */
  containerClassName?: string
}
