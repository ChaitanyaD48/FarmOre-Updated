import Header from "@/components/Header";
import Link from "next/link";
import styled from "styled-components";
// import "./utils.scss";
// import "./mobile.scss";
// import "./style.scss";
// import "./Blog.scss";
const NavLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
export default function BlogPage(){
    return(
        <>
            <Header />
            <><div className="blog-banner"><div className="content">
    <div className="text-content">
      <h1>FarmOre Blogs</h1>
      <p>Join the Conversation, where Ideas Come to Life. <br />
        Creating Connections Through Words.</p>
    </div>
  </div>
  </div>
    <div className="home-articles max-width-1 m-auto font2">
      <h2>Featured Articles</h2>
      <div className="home-article">
        <div className="home-article-img">
        <img src="https://chaitanya-next-ecommerce.s3.amazonaws.com/1685210617546.png" className="vertical" />
        </div>
        <div className="home-article-content font1 a">
        <NavLink href={'/blogpost1'}>Vertical Farming: The Future of Sustainable Agriculture.</NavLink>
          {/* <a onClick={() => navigate("/blogpost1")}> */}
          {/* <h3>Vertical Farming: The Future of Sustainable Agriculture.</h3> */}
          {/* </a> */}
          <div>Otis Gibson</div>
          <pre><span>07 January 2023  |  8 min read</span></pre>
        </div>
      </div>
      <div className="home-article">
        <div className="home-article-img">
        <img src="https://chaitanya-next-ecommerce.s3.amazonaws.com/1685213444062.png" className="vertical" />
        </div>
        <div className="home-article-content font1 b">
        <NavLink href={'/blogpost2'}>Bamboo Farming: The Sustainable Crop of the Future.</NavLink>
        
          <div>Hermione Portman</div>
          <pre><span>15 March 2023  |  6 min read</span></pre>
        </div>
      </div>
      <div className="home-article">
        <div className="home-article-img">
        <img src="https://chaitanya-next-ecommerce.s3.amazonaws.com/1685213457564.png" className="vertical" />
        </div>
        <div className="home-article-content font1 c">
        <NavLink href={'/blogpost3'}>Diversifying Farming Business: The Power of Side Hustles.</NavLink>
          <div>Chris Lockwood</div>
          <pre><span>19 July 2022  |  7 min read</span></pre>
        </div>
      </div>
      <div className="home-article">
        <div className="home-article-img">
        <img src="https://chaitanya-next-ecommerce.s3.amazonaws.com/1685213481397.png" className="vertical" />
        </div>
        <div className="home-article-content font1 d">
        <NavLink href={'/blogpost4'}>Sweet Success: The Art and Science of Apiculture.</NavLink>    
        
          <div>Martin Green</div>
          <pre><span>22 September 2022  |  8 min read</span></pre>
        </div>
      </div>
      <div className="home-article">
        <div className="home-article-img">
        
        <img src="https://chaitanya-next-ecommerce.s3.amazonaws.com/1685213486326.png" className="vertical" />
        </div>
        <div className="home-article-content font1 e">
        <NavLink href={'/blogpost5'}>Animal Husbandry: Nurturing the Bonds Between Humans and Animals.</NavLink>    
          <div>Jennifer Knight</div>
          <pre><span>28 November 2022  |  7 min read</span></pre>
        </div>
      </div>
      <div className="home-article">
        <div className="home-article-img">
        <img src="https://chaitanya-next-ecommerce.s3.amazonaws.com/1685213525644.png" className="vertical" />
        </div>
        <div className="home-article-content font1 f">
        <NavLink href={'/blogpost6'}>From Farm to Future: The Rise of Agrotech.</NavLink>    
          <div>Victor Hudson</div>
          <pre><span>2 May 2022  |  6 min read</span></pre>
        </div>
      </div>
    </div></>
        </>
    );
}