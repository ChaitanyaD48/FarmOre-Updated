import Link from "next/link";
import styled from "styled-components";
const NavLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;

export default function BlogPage1(){
    return(
        <>
            <center>
                <img src="https://chaitanya-next-ecommerce.s3.amazonaws.com/1685210617546.png" className="vertical" /></center>
      <div className="m-auto blog-post-content max-width-2 m-auto my-2">
        <h1 className="font1">"Vertical Farming: The Future of Sustainable Agriculture."</h1>
        <div className="blogpost-meta">
          <div className="author-info">
            <div>
              <b>Otis Gibson</b>
            </div>
            <pre><div>07 January 2023  |  8 min read</div></pre>
          </div>
          {/* <div className="social">
            <FacebookShareButton url={shareURL1}>
              <FacebookIcon size={40} />
            </FacebookShareButton>
            <TwitterShareButton url={shareURL2}>
              <TwitterIcon size={40} />
            </TwitterShareButton>
            <LinkedinShareButton url={shareURL3}>
              <LinkedinIcon size={40} />
            </LinkedinShareButton>
            <WhatsappShareButton url={shareURL4}>
              <WhatsappIcon size={40} />
            </WhatsappShareButton>
          </div> */}
        </div>
        <p className="font1">
          <br />
          <br />
          Vertical farming is a new and innovative way to grow crops in a controlled and efficient environment. By stacking layers of plants vertically, vertical farms can produce high yields in a small space, using less water and fertilizer than traditional farms. Additionally, vertical farms can operate year-round, providing fresh produce even in areas with limited growing seasons. Let's take a closer look at the benefits of vertical farming and how it's changing the future of agriculture.
          <br />
          <br />
          Why vertical farming? Vertical farming offers many benefits over traditional agriculture, including:
          <br />
          <br />
          Space efficiency: Vertical farms can produce high yields in a small footprint, making them ideal for urban areas where space is limited.
          <br />
          <br />
          Water conservation: Vertical farms use up to 90% less water than traditional farming methods, making them a more sustainable option in areas with limited water resources.
          <br />
          <br />
          Climate control: Vertical farms can control temperature, humidity, and light to optimize plant growth, resulting in faster growth and higher yields.
          <br />
          <br />
          Year-round production: Vertical farms can operate year-round, providing fresh produce even in areas with limited growing seasons.
          <br />
          <br />
          Applications of vertical farming: Vertical farming has a range of applications across a variety of industries. In the food industry, vertical farms can produce fresh produce for local markets, restaurants, and grocery stores. Additionally, vertical farms can be used to grow medicinal plants and herbs for the pharmaceutical industry. Vertical farms can also be used for research and development, testing new plant varieties and growing methods in a controlled environment.
          <br />
          <br />
          Getting started with vertical farming: If you're interested in vertical farming, there are a few key steps to take to get started. First, you'll need to research the different vertical farming systems available and decide which one is best suited for your needs. You'll also need to invest in the proper equipment for planting, harvesting, and maintaining your vertical farm. Finally, it's important to establish a market for your vertical farm products, whether through direct sales or through partnerships with local retailers.
          <br />
          <br />
          In conclusion, vertical farming is a sustainable and innovative way to grow crops in a controlled and efficient environment. By exploring the benefits of vertical farming and taking the time to plan and research your vertical farm, you can create a successful and sustainable business for the future.
        </p>
      </div>
      <center>
        {/* <i class="fa fa-thumbs-up" onClick={onLikeButtonClick}><br />{like}</i><input type="text" value={InputValue} onChange={e => setInputValue(e.target.value)} /> */}
        {/* <CopyToClipboard text={InputValue}>
          <button>Copy</button>
        </CopyToClipboard> */}
        </center>
      <div className="max-width-1 m-auto">
        <hr />
      </div>
      <div className="home-articles max-width-1 m-auto font2">
        <h2>People who read this also read</h2>
        <div className="row">
          <div className="home-article more-post">
            <div className="home-article-img e">
            <img src="https://chaitanya-next-ecommerce.s3.amazonaws.com/1685213444062.png" />
            </div>
            <div className="home-article-content font1 center extra">
            <NavLink href={'/blogpost2'}>Bamboo Farming: The Sustainable Crop of the Future.</NavLink>
              {/* <a onClick={() => navigate("/blogpost2")}>
                <h3>
                  Learn more about the sustainable crops of future in India by clicking on here.
                </h3>
              </a> */}
              <div>Hermione Portman</div>
              <pre><span>15 March 2023  |  6 min read</span></pre>
            </div>
          </div>
          <div className="home-article more-post">
            <div className="home-article-img ex">
            <img src="https://chaitanya-next-ecommerce.s3.amazonaws.com/1685213457564.png" />
            </div>
            <div className="home-article-content font1 center extra">
            <NavLink href={'/blogpost3'}>Diversifying Farming Business: The Power of Side Hustles.</NavLink>
              {/* <a onClick={() => navigate("/blogpost3")}>
                <h3>
                  Learn more about the power of side hustles in India by clicking on here.
                </h3>
              </a> */}
              <div>Chris Lockwood</div>
              <pre><span>19 July 2022  |  7 min read</span></pre>
            </div>
          </div>
          <div className="home-article more-post">
            <div className="home-article-img ex1">
            <img src="https://chaitanya-next-ecommerce.s3.amazonaws.com/1685213481397.png" />
            </div>
            <div className="home-article-content font1 center extra">
            <NavLink href={'/blogpost4'}>Sweet Success: The Art and Science of Apiculture.</NavLink>
              {/* <a onClick={() => navigate("/blogpost4")}>
                <h3>
                  Learn more about the science of apiculture in India by clicking on here.
                </h3>
              </a> */}
              <div>Martin Green</div>
              <pre><span>22 September 2022  |  8 min read</span></pre>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}