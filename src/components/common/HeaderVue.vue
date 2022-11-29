<template>
  <header>
    <h1>80%</h1>
    <div class="menuWrap">
      <ul class="menu">
        <input
          type="text"
          class="searchform"
          placeholder="검색어를 입력하세요."
        />
        <button type="submit" class="searchsubmit" value="검색">검색</button>
      </ul>
    </div>
    <div class="menuWrap">
      <ul class="menu">
        <router-link to="/login">로그인</router-link>
        &nbsp;
        <router-link to="/regist">회원가입</router-link>
        <br />
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>
<style scoped>
header {
  width: 100%;
  text-align: center;
  position: relative;
  height: 120px;
  border-bottom: 1px solid #35495e;
}
header h1 {
  font-size: 70px;
  position: absolute;
  top: -20px;
  left: 50px;
  color: black;
}
header ul.menu::after {
  display: block;
  clear: both;
  content: '';
}
header ul.menu {
  position: absolute;
  top: 30px;
  right: 10px;
}
input.searchform {
  width: 650px;
  height: 40px;
}
button.searchsubmit {
  width: 50px;
  height: 43px;
  background-color: black;
  border: 1px solid black;
  color: white;
}
</style>
