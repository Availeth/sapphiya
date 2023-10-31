import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

export default function FaqsPage() {
  return (
    <Layout>
      <Article
        title="FAQ's"
        imageAlt="Lorem Picsum"
        imageSrc="assets/341009659_1189816558353636_1206077134523712621_n.jpg"
      >
        <p>Add your FAQ content here.</p>
        <details
          className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
          open
        >
          <summary className="-mx-4 cursor-pointer border-primary-200 px-4 py-3">
          What is this platform all about, and how does it work?
          </summary>
          <p>
          Our platform offers a unique way to earn money while traveling. It connects you with opportunities to generate income by sharing your travel experiences, insights, and expertise.{' '}
          </p>
          <p>
          Essentially, you can monetize your passion for travel. You'll receive guidance on how to get started, find potential earning opportunities, and engage with the community.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">Is this opportunity suitable for all types of travelers?</summary>
          <p>
          Yes, our platform is designed to cater to a wide range of travelers. Whether you're a frequent globetrotter, an occasional vacationer, or someone looking to turn their passion for travel into income, there's a place for you.
          </p>
          <p>
          Our system is adaptable, allowing anyone to participate and earn based on their preferences and availability.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">What kind of support and resources can I expect as a member of the waitlist?</summary>
          <p>
          As a waitlist member, you'll gain early access to our platform, which includes exclusive resources, tutorials, and guidance to help you get started. You'll also be part of a growing community of like-minded travelers who can share tips and experiences. We're here to support you on your journey to both travel and earn, making it a seamless and enjoyable experience.{' '}
          </p>
        </details>
      </Article>
    </Layout>
  )
}
