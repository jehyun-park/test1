<template>
  <div>
    <h2>작품 게시판</h2>

    <br /><br />
    <button><router-link to="/board/write">글쓰기</router-link></button>
    <div class="search">
      <select v-model="search_key">
        <option value="">- 선택 -</option>
        <option value="author">작성자</option>
        <option value="title">제목</option>
        <option value="contents">내용</option>
      </select>
      &nbsp;
      <input type="text" v-model="search_value" @keyup.enter="fnPage()" />
      &nbsp;
      <button @click="fnPage()">검색</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped></style>
