import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="The Delivery System 
        your small business needs"
        content="Providing delivery solutions for small businesses at a cheaper price, while helping travellers going on the same journey route earn a little token. "
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
