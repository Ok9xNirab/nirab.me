import { Link } from "gatsby"
import React from "react"

const PostItem = ({ date, path, title, excerpt, tags }) => (
  <Link to={`/post${path}`} className="post-card">
    <div className="post-item__title">
      <h4 className="text-xl leading-normal block mb-6 font-bold">{title}</h4>
    </div>
    <div>
      <p className="leading-6 font-thin text-gray-400 text-sm">{excerpt}</p>
    </div>
    <div className="flex justify-between items-center mt-5">
      <p className="text-sm text-gray-800">
        {tags.map(tag => (
          <span className="mr-3" key={tag}>
            # {tag}
          </span>
        ))}
      </p>
      <p className="text-sm text-gray-800">{date}</p>
    </div>
  </Link>
)
export default PostItem
