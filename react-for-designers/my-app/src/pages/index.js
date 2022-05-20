import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
      <div className="Hero">
          <div className="HeroGroup">
            <h1>Learn to Code</h1>
            <p>This way we learn react.</p>
            <Link to="/video">Watch the video</Link>
          </div>
      </div>
  </div>
)

export default IndexPage
