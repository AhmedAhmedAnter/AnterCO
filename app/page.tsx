import { VStack } from "@/components/layout"
import { Navbar } from "@/components/shared"
import { StoreAlert } from "@/components/store"

export default function Home() {
  return (
    <VStack fullHeight fullWidth as="main" gap="none">
      <StoreAlert
        id="default"
        message="Sign up and get 20% off to your first order."
        linkText="Sign Up Now"
        href="/sign-up"
      />
      <Navbar />
    </VStack>
  )
}
