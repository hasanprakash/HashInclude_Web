<template>
<div class="footer-ele">
    <div class="footer-abc">
        <div class="about-us">
            <h1>About Us</h1>
            <div class="img-foot">
                <img alt="" :src="require(`../../assets/Main Logos/hashinclude.png`)"/>
            </div>
            <p1>
                <br>
                An enormous hub of exceptional talents, that opens the
                doors to a world of technical wizardry!
            </p1>
        </div>

        <div class="email-us">
            <div class="eu">
                <h1>Email Us</h1>
                <p>
                    Contact us on Email for Support<br/>
                    <a href="mailto:klcsehashinclude@gmail.com"
                    >klcsehashinclude@gmail.com</a
                    ><br/><a href="mailto:hashinclude@kluniversity.in"
                    >hashinclude@kluniversity.in</a
                    >
                </p>
            </div>
            <div class="mu">
                <p2>
                    <span>Meet us at</span> <br/>
                    KL University, Vaddeswaram, <br/>
                    Andhra Pradesh, India
                </p2>
            </div>
        </div>
        <div class="navigate">
            <h1>Navigate To</h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/team">Gallery</a>
                </li>
                <li>
                    <a href="/team">Sponsors</a>
                </li>
                <li>
                    <a href="/team">Team</a>
                </li>
            </ul>
        </div>
        <div class="connect-with-us">
            <h1>Connect with us</h1>
            <ul class="social-links">
                <li>
                    <a href="#"
                    ><i
                            class="fab fa-twitter fa-4x"
                            id="SocialIcon"
                    ></i
                    ></a>
                </li>
                <li>
                    <a href="#"
                    ><i
                            class="fab fa-facebook-f fa-4x"
                            id="SocialIcon"
                    ></i
                    ></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/kl_hashinclude/"
                    ><i
                            class="fab fa-instagram fa-4x"
                            id="SocialIcon"
                    ></i
                    ></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCqurO5urjBhKYsftAeE_mhg"
                    ><i
                            class="fab fa-youtube fa-4x"
                            id="SocialIcon"
                    ></i
                    ></a>
                </li>
            </ul>
        </div>
    </div>
    <p3 class="copyrights">&copy;Copyright @2022 KLHashInclude</p3>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-ele {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: auto;
  padding: 30px 0px;
  width: 100vw;
  background-color: #15181c;
  overflow: hidden;
}

.footer-ele p3 {
  text-align: center;
  font-size: 14px;
  color: #fff;
  line-height: 2;
}

.footer-abc {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  width: 92%;
  height: 100%;
  margin-bottom: 20px;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.about-us {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: 100%;
  /*width: 300px;*/
  width: 24%;
  margin: 20px 20px;
}

.about-us .img-foot {
  height: 100px;
  width: 120px;
}

.about-us .img-foot img {
  height: 100%;
  width: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}

.about-us h1 {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}

.about-us p1 {
  font-size: 17px;
  width: 300px;
  /*width: 100%;*/
  color: #fff;
  text-align: justify;
  line-height: 2;

}

.about-us p1 span {
  font-size: 18px;
  margin-right: 1px;
}

.email-us {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: 100%;
  /*width: 300px;*/
  width: 24%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin: 20px 20px;
}

.email-us .eu {
  margin-bottom: 20px;
}

.email-us .eu h1 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
}

.email-us .eu p {
  display: block;
  font-size: 17px;
  color: #fff;
  line-height: 2;
  width: 300px;
}

.email-us .eu p a {
  font-size: 17px;
  color: #f3f3f3;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.email-us .eu p a:hover {
  border-bottom: 1px solid #f3f3f3;
}

.email-us .mu {
  margin-bottom: 20px;
}

.email-us .mu p2 {
  display: block;
  font-size: 17px;
  color: #fff;
  line-height: 2;
  width: 300px;
}

.email-us .mu p2 span {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
}

.email-us p3 {
  display: block;
  font-size: 17px;
  color: #fff;
  line-height: 2;
  text-align: center;
}

.navigate {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  /*width: 120px;*/
  width: 14%;
  margin: 20px 20px;
}

.navigate h1 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
  width: 150px;
}

.navigate ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: 50%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-left: 10px;
}

.navigate ul li {
  list-style: disc;
  color: #f3f3f3;
}

.navigate ul li i {
  font-size: 1.6rem;
}

.navigate ul a {
  color: #f3f3f3;
  font-size: 17px;
  font-weight: 500;
  -webkit-transition: 0s linear;
  transition: 0s linear;
}

.navigate ul a:not(.trans-button):hover {
  color: #fff;
}

.connect-with-us {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  /*width: 180px;*/
  width: 14%;
  margin: 20px 20px;
}

.connect-with-us h1 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
  width: 150px;
}

.connect-with-us .social-links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 14px;
}

.connect-with-us .social-links li {
  padding: 10px;
  border-radius: 100%;
}

.connect-with-us .social-links #SocialIcon {
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: whitesmoke;
  cursor: pointer;
}

@media only screen and (max-width: 850px) {
  .footer-abc {
    width: 90%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .about-us {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-align: center;
    margin-top: -15px;
  }
  .email-us {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-align: center;
    margin-top: -15px;
  }
  .connect-with-us {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-align: center;
    margin-top: -15px;
  }
  .navigate {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-top: -15px;
  }
  .navigate {
    width: 80%;
  }
  .navigate ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 100%;
    height: auto;
  }
  .navigate ul li {
    margin: 0px 2px;
  }
  .connect-with-us .social-links {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
  }
}

@media only screen and (max-width: 500px) {
  .navigate {
    width: 90%;
  }
  .navigate ul {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .navigate ul li {
    margin: 5px 8px;
  }
  .navigate ul li a {
    margin: 2px 1px;
  }
}
/*# sourceMappingURL=footer.css.map */
</style>
