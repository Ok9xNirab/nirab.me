import React from "react"

const plugins: { name: string; link: string }[] = [
  {
    name: "📦 Pre Order Addon for WooCommerce",
    link: "https://wordpress.org/plugins/wc-pre-order/",
  },
  {
    name: "📅 Booking for wooCommerce",
    link: "https://wordpress.org/plugins/wc-booking/",
  },
  {
    name: "⏳ WooCommerce Subscription",
    link: "https://wordpress.org/plugins/subscription/",
  },
  {
    name: "🔖 Advance Coupons for Woocommerce",
    link: "https://wordpress.org/plugins/advance-coupons-for-woocommerce/",
  },
  {
    name: "🛒 Bulk Product Selling",
    link: "https://wordpress.org/plugins/bulk-products-selling/",
  },
  {
    name: "🛠 Checkout Field Customizer",
    link: "https://wordpress.org/plugins/checkout-field-customizer/",
  },
  {
    name: "🔗 Social Sharing Button",
    link: "https://wordpress.org/plugins/product-sharing-buttons/",
  },
]

const Home = () => (
  <div className="my-20 lg:max-w-screen-md mx-auto lg:flex items-start">
    <div className="mx-5 lg:mx-0 lg:w-2/3">
      <h3 className="text-5xl mb-2">Hi 👋</h3>
      <p className="leading-9 text-gray-400">
        My name is <b className="text-black">Istiaq Nirab</b>. I am a software
        developer. I have a passion for web development and I am currently
        working on my portfolio. <br /> <br />
        Some Woocommerce based Plugins I developed :
      </p>
      <ul className="leading-9 text-sm">
        {plugins.map((plugin, index) => (
          <li key={index}>
            <a href={plugin.link} target="_blank" rel="nofollow">
              {plugin.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="border p-2 ml-5 w-1/3 hidden lg:block">
      <img src="/me-classic.jpeg" alt="my-photo" />
    </div>
  </div>
)

export default Home
