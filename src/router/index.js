import Vue from 'vue';
import Router from 'vue-router';
import List from '@/components/board/ListVue'; //게시판 리스트 컴포넌트 호출
import Write from '@/components/board/WriteVue'; //게시판 리스트 컴포넌트 호출
import Like from '@/components/board/LikeVue';
import MyPost from '@/components/board/MyPostVue';
import Hot from '@/components/board/HotVue';
import FreePost from '@/components/board/FreePostVue';
import MemberPost from '@/components/board/MemberPostVue';
import Login from '@/components/common/LoginVue';
import Regist from '@/components/common/MemberRegistVue';

Vue.use(Router); //vue 라우터 사용

export default new Router({
  //라우터 연결
  routes: [
    {
      path: '/board/list',
      name: List,
      component: List,
    },
    {
      path: '/board/write',
      name: Write,
      component: Write,
    },
    {
      path: '/board/like',
      name: Like,
      component: Like,
    },
    {
      path: '/board/mypost',
      name: MyPost,
      component: MyPost,
    },
    {
      path: '/board/hot',
      name: Hot,
      component: Hot,
    },
    {
      path: '/board/freepost',
      name: FreePost,
      component: FreePost,
    },
    {
      path: '/board/memberpost',
      name: MemberPost,
      component: MemberPost,
    },
    {
      path: '/login',
      name: Login,
      component: Login,
    },
    {
      path: '/regist',
      name: Regist,
      component: Regist,
    },
  ],
});
