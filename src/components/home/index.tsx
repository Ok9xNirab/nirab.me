import React from "react"

const plugins: {
  name: string
  icon: string
  link: string
  description: string
}[] = [
  {
    name: "Pre Order Addon for WooCommerce",
    icon: "📦",
    link: "https://wordpress.org/plugins/wc-pre-order/",
    description: "Allow customers to pre-order from your store.",
  },
  {
    name: "Booking for wooCommerce",
    icon: "📅",
    link: "https://wordpress.org/plugins/wc-booking/",
    description:
      "Show available dates, time in a simple dropdown, take booking for products and services.",
  },
  {
    name: "WooCommerce Subscription",
    icon: "⏳",
    link: "https://wordpress.org/plugins/subscription/",
    description:
      "A powerfull plugin that allow to enable subscription on woocommerce products.",
  },
  {
    name: "Advance Coupons for Woocommerce",
    icon: "🔖",
    link: "https://wordpress.org/plugins/advance-coupons-for-woocommerce/",
    description:
      "Create gift vouchers, store credits, special discounts based on the amount spent, etc.",
  },
  {
    name: "Bulk Product Selling",
    icon: "🛒",
    link: "https://wordpress.org/plugins/bulk-products-selling/",
    description:
      "Sell many products in one Like Group Product. But you can use single price here.",
  },
  {
    name: "Checkout Field Customizer",
    icon: "🛠",
    link: "https://wordpress.org/plugins/checkout-field-customizer/",
    description: "Customize checkout fields for WooCommerce.",
  },
  {
    name: "Social Sharing Button",
    icon: "🔗",
    link: "https://wordpress.org/plugins/product-sharing-buttons/",
    description: "Add social sharing buttons to your products.",
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
          <li className="flex items-center my-10" key={index}>
            <span className="mr-3 text-6xl">{plugin.icon}</span>
            <div>
              <a href={plugin.link} target="_blank" rel="nofollow">
                {plugin.name}
              </a>
              <p className="w-full">{plugin.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="photo-rotate">
      <img src="/me-classic.jpeg" alt="my-photo" />
    </div>
  </div>
)

export default Home
