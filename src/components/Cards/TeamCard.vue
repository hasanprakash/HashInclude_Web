<template>
  <div class="card inner-tilt">
    <div class="profile-pic">
      <img alt="" src="https://klhashinclude.in/static/images/hod_sir.jpeg" />
    </div>
    <h6 style="color: white"><slot name="designation"></slot></h6>
    <h6 style="color: white"><slot name="name"></slot></h6>
    <ul class="social-links inner-tilt" style="margin-bottom: 10px">
      <li>
        <a href="#" target="__blank">
          <i class="fab fa-twitter fa-2x" id="SocialIcon"></i>
        </a>
      </li>
      <li>
        <a href="#" target="__blank">
          <i class="fab fa-facebook-f fa-2x" id="SocialIcon"></i>
        </a>
      </li>
      <li>
        <a href="#" target="__blank">
          <i class="fab fa-instagram fa-2x" id="SocialIcon"></i>
        </a>
      </li>
      <li>
        <a href="" target="__blank">
          <i class="fab fa-linkedin-in fa-2x" id="SocialIcon"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    font-size: 45%;
    width: 300px;
    height: 500px;
    /* margin-top: 50px; */
    margin: auto;
    margin-bottom: 50px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #4834d4; 
    background: linear-gradient(315deg, #4834d4 0%, #0c0c0c 74%);
    -ms-flex-pack: distribute; 
    justify-content: space-around;
    border-radius: 39px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    -webkit-box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2),
        0 5px 20px 0 rgba(0, 0, 0, 0.19);
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 5px 20px 0 rgba(0, 0, 0, 0.19);
}

.card .profile-pic {
    /* margin-top: 10px; */
    width: 100%;
    height: 70%;
    /* border-radius: 39px 39px 0px 0px; */
    /* -webkit-box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.3),
        0 5px 20px 0 rgba(0, 0, 0, 0.4);
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.3), 0 5px 20px 0 rgba(0, 0, 0, 0.4); */
    overflow: hidden;
}

.card .profile-pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 39px;
    border-top-right-radius: 39px;
    overflow: hidden;
}

.card .doc-name {
    font-size: 18px;
    color: whitesmoke;
    font-weight: 600;
}

.card em {
    font-size: 14px;
    font-weight: 400;
    width: 85%;
    text-align: center;
    color: whitesmoke;
    font-family: 'Open Sans', sans-serif;
}

.card .social-links {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 60%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.card .social-links li {
    padding: 10px;
    border-radius: 100%;
}

.card .social-links #SocialIcon {
    width: 100%;
    height: 100%;
    color: whitesmoke;
    cursor: pointer;
}

.card:hover {
    -webkit-box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.27),
        0 10px 35px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.27),
        0 10px 35px 0 rgba(0, 0, 0, 0.3);
}

.card {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

ul {
  padding-left: 0rem;
}
</style>
