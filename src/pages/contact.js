import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const socials = [
    {
        "label": "GitHub",
        "url": "https://github.com/ok9xnirab"
    },
    {
        "label": "Twitter",
        "url": "https://twitter.com/ok9xnirab"
    },
    {
        "label": "Facebook",
        "url": "https://www.facebook.com/ok9xnirab"
    },
    {
        "label": "Instagram",
        "url": "https://www.instagram.com/ok9xnirab"
    },
    {
        "label": "LinkedIn",
        "url": "https://www.linkedin.com/in/ok9xnirab/"
    }
]

const ContactPage = ({ path }) => (
    <Layout path={path}>
        <Seo title="Contact" />
        <div className='my-20 lg:max-w-screen-sm mx-auto'>
            <div className="mb-10">
                <h4 className="text-2xl font-semibold text-gray-600 mb-2">Contact</h4>
                <p className="text-sm font-sans text-gray-400">Some of my social links here</p>
            </div>
            <div className="font-sans">
                <ul>
                    {socials.map((social, index) => (
                        <li key={index} className="mb-4">
                            <a href={social.url} className="text-gray-600 hover:text-gray-800" rel="noreferrer" target="_blank">{social.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Layout>
)

export default ContactPage
