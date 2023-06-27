import React from "react";
import curvyDark from '../images/bg-curvy-dark-mode.svg';
import curvyLight from '../images/bg-curvy-light-mode.svg';
import logoDark from '../images/logo-dark-mode.svg';
import logoLight from '../images/logo-light-mode.svg';

import quotes from '../images/bg-quotes.png';
import intro from '../images/illustration-intro.png';
import stayProductive from '../images/illustration-stay-productive.png';

import access from '../images/icon-access-anywhere.svg';
import anyFile from '../images/icon-any-file.svg';
import arrow from '../images/icon-arrow.svg';
import collaboration from '../images/icon-collaboration.svg';
import email from '../images/icon-email.svg';
import location from '../images/icon-location.svg';
import phone from '../images/icon-phone.svg';
import security from '../images/icon-security.svg';

import profile1 from '../images/profile-1.jpg';
import profile2 from '../images/profile-2.jpg';
import profile3 from '../images/profile-3.jpg';

import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import instagramIcon from '../images/instagram_icon.svg';
import twitter from '../images/twitter.svg';

const images = {
  curvyDark:curvyDark,
  curvyLight:curvyLight,
  logoDark:logoDark,
  logoLight:logoLight,
  quotes:quotes,
  intro:intro,
  stayProductive:stayProductive,
  
  access:access,
  security:security,
  collaboration:collaboration,
  anyFile:anyFile,

  arrow:arrow,
 
  email:email,
  location:location,
  phone:phone,


  profile1:profile1,
  profile2:profile2,
  profile3:profile3,
  facebook:facebook,
  instagram:instagram,
  instagramIcon:instagramIcon,
  twitter:twitter,
};

const types = {
  user:"",
  image:"mx-auto",
  icon:"",
  logo:"w-48 mx-auto md:mx-0 md:absolute top-10 left-10",
  features:"",
  inline:"inline pb-2",

}

const Image = (props) => {
  const { name, type } = props;
  return <img src={images[name]} className={types[type]} alt="selected img" />;
};

export default Image;