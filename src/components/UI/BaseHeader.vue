<template>
  <section class="menu cid-rNfTMffQrz" id="menu1-0" once="menu">
    <nav
      class="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color black"
    >
      <button
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler navbar-toggler-right"
        data-target="#navbarSupportedContent"
        data-toggle="collapse"
        type="button"
      >
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div class="menu-logo">
        <div class="navbar-brand">
          <span class="navbar-logo">
            <router-link to="/">
              <img
                :src="require(`../../assets/Main Logos/focus.png`)"
                style="height: 3.8rem"
              />
            </router-link>
          </span>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true">
          <li class="nav-item">
            <router-link to="/home" class="nav-link link text-white display-4">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link link text-white display-4">About us</router-link>
          </li>
          <li class="nav-item dropdown" role="button" style="width: 90px;">
              <!-- Events -->
              <div class="dropdown" >
                <a class="dropbtn nav-link link text-white display-4 dropdown-toggle">Events</a>
                <div class="dropdown-content">
                  <router-link v-for="event of eventData" :key="event.eventId" :to="'/'+event.eventId">{{ event.eventType }}</router-link>
                </div>
              </div>
          </li>
          <li class="nav-item">
            <router-link to="/gallery" class="nav-link link text-white display-4">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sponsors" class="nav-link link text-white display-4">Our Sponsors</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/team" class="nav-link link text-white display-4">Team</router-link>
          </li>
        </ul>
        <!-- {% if user.is_authenticated %} -->
        <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true">
          <li class="nav-item">
            <router-link to="profile" class="nav-link link text-white display-4">Profile</router-link>
          </li>
        </ul>
        
        <!-- {% else %} -->
        <div class="navbar-buttons mbr-section-btn">
          <router-link class="btn btn-sm btn-primary display-4" to="/join">Join</router-link>
        </div>
        <!-- {% endif %} -->
      </div>
      
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      eventData: [
        {
          eventId: 'technical',
          eventType: 'Technical'
        },
        {
          eventId: 'nontechnical',
          eventType: 'Non-Technical'
        },
        {
          eventId: 'workshop',
          eventType: 'Workshops'
        },
        {
          eventId: 'hackathon',
          eventType: 'Hackathon'
        }
      ]
    }
  }
};
</script>

<style scoped>
/** DROP DOWN */
.dropbtn {
  background-color: transparent;
  color: white;
  padding: 5px;
  width: 70px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

/* .dropdown:hover .dropbtn {
  background-color: #3e8e41;
} */
</style>
