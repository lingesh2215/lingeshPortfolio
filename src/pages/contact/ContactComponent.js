import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
// import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import {  contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
// const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
// const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                 
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={"https://drive.google.com/file/d/1kwqSNHy6WgJ40xGXasyrJptJgcXJYduP/view?usp=drive_link"}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
         
          
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <img
											src={require(`../../assets/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/>
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div" 
              style={{backgroundColor:"rgb(0, 28, 85)", color:"white", margin:"auto", borderRadius:"200px"
              }}>
              
                <h1
                className="address-heading-text" 
                style={{margin:"50px", textDecoration:"none", textAlign:"center"}}
                >
                 📧 Mail ID : <a href="mailto:lingeshj15@gmail.com" style={{ textDecoration:"none", color:"white",   }}
                 >👉 lingeshj15@gmail.com</a>
                </h1>
               
                <h1
                className="address-heading-text"
                style={{margin:"50px"}}
                >
                 📞 Call Me : <a href="tel:+919360216070" class="hover-link" style={{ textDecoration:"none", color:"white", }}
                  >👉 +91 93602 16070</a>
                </h1>
               
                <div className="address-btn-div">
               
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
