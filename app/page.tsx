import Header from "@/components/header"
import Hero from "@/components/hero"
import Problem from "@/components/problem"
import Features from "@/components/features"
import Flow from "@/components/flow"
import UserTypes from "@/components/user-types"
import Gamification from "@/components/gamification"
import MatIA from "@/components/matia"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Features />
      <Flow />
      <UserTypes />
      <Gamification />
      <MatIA />
      <CTA />
      <Footer />
    </main>
  )
}
