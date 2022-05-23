import { Link } from "gatsby"
import * as React from "react"

const pages: { name: string; slug: string }[] = [
  { name: "Home", slug: "/" },
  { name: "Blog", slug: "/blog/" },
  { name: "Contact", slug: "/contact/" },
]

const Header = ({ path }) => {
  return (
    <div className="lg:flex justify-between items-center lg:max-w-screen-md mx-auto text-center lg:text-left">
      <Link
        to="/"
        className="text-3xl text-black hover:text-black hover:no-underline"
      >
        Nirab
      </Link>
      <ul className="flex justify-center lg:justify-start items-center mt-4 lg:mt-0">
        {pages.map((page, index) => (
          <li key={index} className="mx-3 hover:underline">
            <Link
              className={`text-black hover:text-black ${
                path === page.slug ? "underline" : null
              }`}
              to={page.slug}
            >
              {page.name}
            </Link>
          </li>
        ))}
        {/* <li className='mx-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </li> */}
        <li className="mx-3">
          <Link
            to="/bookmarks"
            className={
              path === "/bookmarks/"
                ? "text-purple-600"
                : "text-black hover:text-black"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
