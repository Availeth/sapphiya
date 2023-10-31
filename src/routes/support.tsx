import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

export default function SupportPage() {
  return (
    <Layout>
      <Article
        title="Welcome to Our Support Center"
        imageAlt="Lorem Picsum"
        imageSrc="assets/Active Support.gif"
      >
        <p>
          At Sapphiya, we are committed to providing you with the best possible support and
          assistance to ensure your experience with our platform is smooth and enjoyable. If you
          have questions, encounter issues, or need guidance, you've come to the right place. Our
          support center is here to help you find the information and solutions you need.
        </p>
        <details
          className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
          open
        >
          <summary className="-mx-4 cursor-pointer border-primary-200 px-4 py-3">
            Frequently Asked Questions (FAQs)
          </summary>
          <p>
          Before reaching out to our support team, we recommend checking our Frequently Asked Questions (FAQs) section. It contains answers to common queries about our platform, its features, and how it works. You might find the solution to your question here without the need for further assistance.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">
          Contacting Support</summary>
          <p>
          If you can't find the answer you're looking for in our FAQs, or if you have a specific issue that requires personal assistance, our dedicated support team is ready to assist you. You can reach us through the following channels
          <p>Email: Send us an email at support@sapphiya.com, and our team will respond to your inquiry as promptly as possible.</p>
          <p>Live Chat: Look for the live chat icon on our platform for real-time assistance from our support agents during our operating hours.</p>
          </p>
          <p>
          Phone Support: For urgent matters or complex issues, you can reach us by phone at 08082495249. Our support hours and availability can be found on our contact page.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">
          Feedback and Suggestions</summary>
          <p>
          We value your feedback and suggestions. If you have ideas for improving our platform or if you've had an exceptional experience you'd like to share, please let us know. Your input is crucial in helping us enhance our services.{' '}
          </p>
        </details>
      </Article>
    </Layout>
  )
}
