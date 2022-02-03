<template>
  <div class="card">
    <h1><slot name="name"></slot></h1>
    <div class="img-cont">
      <img
        class="lazy"
        :src="require(`../../assets/TechnicalPosters/AMoleInAHash.jpg`)"
        onerror="this.onerror=null; this.src='{% static 'images/tech_poster.jpeg' %}'"
        loading="lazy"
      />
    </div>
    <div class="reg-butt">
      <a class="butt" href="/detail/{{t.name}}">
        <button type="button">Details</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cards .card {
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
  /* 550 , 300 */
  height: 580px;
  width: 300px;
  overflow: hidden;
  margin-top: 50px;
  -webkit-transition: 0.5s ease;
  transition: 0.5s ease;
  border: none;
}

.cards .card h1 {
  font-size: 25px;
  font-weight: 600;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#30cfd0),
    to(#330867)
  );
  background: linear-gradient(to left, #30cfd0 0%, #330867 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cards .card .img-cont {
  height: 420px;
  width: 300px;
  -webkit-box-shadow: 0px 10px 20px -15px #464646;
  box-shadow: 0px 10px 20px -15px #464646;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 12px;
  overflow: hidden;
}

.cards .card .img-cont img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.img-cont:hover {
  -webkit-box-shadow: 0px 10px 25px -15px #464646;
  box-shadow: 0px 10px 25px -15px #464646;
  scale: 1.1;
}

.img-cont:hover img {
  height: 100%;
  width: 100%;
}

.butt button {
  color: white;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  width: 140px;
  height: 40px;
  border-radius: 15px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#6a11cb),
    to(#2575fc)
  );
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  outline: none;
  cursor: pointer;
  -webkit-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

button:hover {
  scale: 1.07;
  background-color: #311675;
}
</style>