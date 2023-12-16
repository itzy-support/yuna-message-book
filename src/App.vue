<template>
  <VApp id="messagebook">
    <VAppBar>
      <VAppBarNavIcon @click="drawer = !drawer" />

      <VToolbarTitle> {{ TITLE }} </VToolbarTitle>

      <VBtn
        icon
        color="red-darken-1"
        href="https://drive.google.com/file/d/1qdiF0b4vV2jsNTmDyTAbhkSYH3XZxBgu/view?usp=drive_link"
        target="_blank"
      >
        <VIcon icon="mdi-file-pdf-box" />
      </VBtn>
    </VAppBar>

    <VNavigationDrawer v-model="drawer">
      <VList :items="index" item-value="page" @click:select="setScroll($event)" color="primary" />
    </VNavigationDrawer>

    <VMain>
      <VRow no-gutters>
        <VCol v-for="(_, index) in pages" :key="index" :id="index + 1" cols="12" md="6" class="mb-6">
          <VImg :src="`./book/YUNA_MESSAGE_BOOK_${(index + 1).toString().padStart(3, 0)}.webp`" />
        </VCol>
      </VRow>
    </VMain>
  </VApp>
</template>

<script setup>
import { ref } from "vue";

const TITLE = "아름답고 찬란하神 유나";

const drawer = ref(false);
const MAX_PAGE = 214;
const pages = new Array(MAX_PAGE);

const setScroll = (page) => {
  document.getElementById(page.id).scrollIntoView({
    behavior: "smooth",
  });
};

const index = [
  {
    title: TITLE,
    page: 1,
  },
  {
    title: "최애의 유나",
    page: 6,
  },
  {
    title: "믿지랑 한끼 식사",
    page: 24,
  },
  {
    title: "2024 믿지 버킷리스트",
    page: 32,
  },
  {
    title: "신유나 대나무숲?!",
    page: 42,
  },
  {
    title: "키 큰 막냉이 유나",
    page: 52,
  },
  {
    title: "유나 로드맵",
    page: 66,
  },
  {
    title: "100문100답",
    page: 120,
  },
];
</script>

<style>
html * {
  font-family: "Pretendard", sans-serif;
}
</style>
