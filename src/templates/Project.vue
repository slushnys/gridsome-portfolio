<template>
  <Layout>
    <div :style="bgImage" class="featured-image-header md:h-64 h-32"></div>
    <!-- <g-image class="featured-image-header" :title="$page.project.title" :alt="$page.project.title" :src="$page.project.featuredImage"></g-image> -->
    <h1 class="pt-5">{{ $page.project.title }}</h1>
<div class="flex items-center mt-5">
      <div class="text-sm">
        <span
          v-for="(bullet, idx) in $page.project.tags"
          :key="idx"
          class="mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2"
          >{{ bullet }}</span
        >
      </div>
    </div>
    <div class="content mt-5" v-html="$page.project.content"></div>
    
  </Layout>
</template>

<page-query>
query ($id: ID!) {
    project(id: $id) {
        title
        description
        tags
        featuredImage
        content
    }
}
</page-query>

<script>
export default {
  computed: {
    bgImage() {
      return `background-image: url(${this.$page.project.featuredImage})`;
    }
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      description: this.$page.project.description
    };
  }
};
</script>

<style scoped>
.featured-image-header {
  width: 100%;
  /* height: 30ch; */
  background-size: cover;
}
</style>
