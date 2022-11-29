<template>
  <div class="icon-bar">
    <router-link to="/"><i class="fa fa-home"></i></router-link>
    <router-link to="/board/mypost"
      ><i class="far fa-address-card"></i
    ></router-link>
    <router-link to="/board/list"
      ><i class="fas fa-clipboard-list"></i
    ></router-link>
    <router-link to="/board/like"><i class="fas fa-star"></i></router-link>
    <router-link to="/board/hot"><i class="fab fa-hotjar"></i></router-link>
    <router-link to="/board/freepost"
      ><i class="fas fa-comments"></i
    ></router-link>
    <router-link to="/board/memberpost"
      ><i class="fas fa-users"></i
    ></router-link>
  </div>
</template>

<style>
.icon-bar {
  height: 100%;
  width: 90px;
  background-color: #555;
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  /*z-index: 1;*/ /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 0;
}

.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 36px;
}

.icon-bar a:hover {
  background-color: #858585;
}

.active {
  background-color: #5eaf13;
}
</style>
