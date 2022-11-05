import React from "react";
import "./Home.css";
import ProfileImage from "../../assets/images/profile_pic.jpg";
import ShareButton from "../../assets/svgs/share_button.svg";
import ShareButton1 from "../../assets/svgs/share_button1.svg";
import SlackIcon from "../../assets/svgs/slack.svg";
import GithubIcon from "../../assets/svgs/github.svg";

import LinkBox from "../../components/LinkBox/LinkBox";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <section className="profile-section">
          <div className="image-container">
            <img src={ProfileImage} alt="profile-pic" id="profile_img" />
          </div>
          <h2 id="twitter">rotii_mii</h2>
          <h2 id="slack" className="hidden">
            Moyinoluwa
          </h2>
          <div className="share-container">
            <img src={ShareButton} alt="share-logo" className="share1" />
            <img src={ShareButton1} alt="share-logo" className="share2" />
          </div>
        </section>
        <section className="link-section">
          <LinkBox
            idName={"twitter_link"}
            Link={"https://twitter.com/rotii_mii"}
            Text={"Twitter Link"}
          />
          <LinkBox
            idName={"btn__zuri"}
            Link={"https://training.zuri.team/"}
            Text={"Zuri Team"}
          />
          <LinkBox
            idName={"books"}
            Link={"https://books.zuri.team/"}
            Text={"Zuri Books"}
          />
          <LinkBox
            idName={"book__python"}
            Link={
              "https://books.zuri.team/python-for-beginners?ref_id=Moyinoluwa"
            }
            Text={"Python Books"}
          />
          <LinkBox
            idName={"pitch"}
            Link={"https://background.zuri.team/"}
            Text={"Background Check for Coders"}
          />
          <LinkBox
            idName={"book_design"}
            Link={"https://books.zuri.team/design-rules"}
            Text={"Design Books"}
          />
        </section>
      </div>
      <div className="socials">
        <div className="container">
          <div className="socials-box">
            <img src={SlackIcon} alt="slack-icon" />
          </div>
          <div className="socials-box">
            <img src={GithubIcon} alt="slack-icon" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
