import React from 'react'
import Link from 'gatsby-link';
import Card from '../components/card';

const IndexPage = () => (
  <div>
      <div className="Hero">
          <div className="HeroGroup">
            <h1>Learn to Code</h1>
            <p>This way we learn react.</p>
            <Link to="/video">Watch the video</Link>
          </div>
      </div>

    <div className="CardGroup">
      <Card
        title="DesignSystem"
        text="10 sections"
        image={require('../images/wallpaper.jpg')} />
      <Card
        title="React for Designers"
        text="11 sections"
        image={require('../images/wallpaper2.jpg')} />
      <Card
        title="Sound Design"
        text="5 sections"
        image={require('../images/wallpaper3.jpg')} />
      <Card
        title="ARKit 2"
        text="10 sections"
        image={require('../images/wallpaper4.jpg')} />
    </div>
  </div>
)

export default IndexPage
