import { Article } from '@/components/article'
import { Layout } from '@/components/layout'
import { useState } from 'react'


export default function ContactPage() {
  const [success, setSuccess] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    setSuccess(true)
  }
  return (
    <Layout>
      <Article
        title="Contact"
        imageAlt="Lorem Picsum"
        imageSrc="assets/338795572_1258521691747646_7855995808619013156_n.jpg"
      >
Feel free to reach out if you have any more questions or need further information. We're excited to have you on board and help you discover new horizons while making money along the way!        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="name"
              name="name"
              type="text"
            />
          </div>
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="message"
              name="message"
            />
          </div>

          <button
            className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg"
            onClick={handleClick}
            type="submit"
          >
            Submit
          </button>

          {success && (
            <div className="mt-2 text-xs italic text-gray-500">
              🎉 Do something when the form is submitted!
            </div>
          )}
        </form>
      </Article>
      
    </Layout>
  )
}
