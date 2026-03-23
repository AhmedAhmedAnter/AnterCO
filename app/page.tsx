import { VStack } from "@/components/layout"
import { Navbar } from "@/components/shared"
import { StoreAlert } from "@/components/store"
import { Hero } from "@/components/pages/home"

const navLinks = [
  {
    label: "Shop",
    href: "/shop",
    hasDropdown: true,
    subLinks: [
      { label: "Men's Clothing", href: "/shop/men" },
      { label: "Women's Clothing", href: "/shop/women" },
      { label: "Accessories", href: "/shop/accessories" },
      { label: "New Arrivals", href: "/shop/new-arrivals" },
    ],
  },
  { label: "On Sale", href: "/on-sale" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Brands", href: "/brands" },
]

export default function Home() {
  return (
    <VStack fullHeight fullWidth as="main" gap="none">
      <StoreAlert
        id="default"
        message="Sign up and get 20% off to your first order."
        linkText="Sign Up Now"
        href="/sign-up"
      />
      <Navbar links={navLinks} logo="ANTER.CO" />
      <Hero />
    
    </VStack>
  )
}
