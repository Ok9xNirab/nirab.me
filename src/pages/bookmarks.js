import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const booksmarks = [
    {
        title: "YouTube",
        items: [
            {
                "label": "CodersTrape",
                "url": "https://www.youtube.com/c/CodersTape/videos"
            },
            {
                "label": "New Features in PHP 8.0",
                "url": "https://www.youtube.com/watch?v=3Be2T5dhN0A&ab_channel=PHPDevelopersTV"
            },
        ]
    }
]

const BookmarksPage = ({ path }) => (
    <Layout path={path}>
        <Seo title="Bookmarks" />
        <div className='my-20 lg:max-w-screen-sm mx-auto'>
            <div className="mb-10">
                <h4 className="text-2xl font-semibold text-gray-600 mb-2">Bookmarks</h4>
                <p className="text-sm font-sans text-gray-400">Some of regular stuff need to browse sometimes</p>
            </div>
            <div className="font-sans">
                {booksmarks.map((bookmark, index) => (
                    <div key={index}>
                        <h5 className="text-xl font-semibold text-gray-500">{bookmark.title}</h5>
                        <ul>
                            {bookmark.items.map((item, index) => (
                                <li className="my-4" key={index}>
                                    <a href={item.url} rel="noreferrer" target="_blank" className="text-purple-500">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </Layout>
)
export default BookmarksPage;
