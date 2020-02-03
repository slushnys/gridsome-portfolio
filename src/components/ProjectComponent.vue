<template>
  <div class="mt-2 md:flex pt-5 component">
          <div class="max-w w-full lg:max-w-full lg:flex">
            <div
              class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-t lg:border-b-none border-l border-r lg:border-l lg:border-b lg:border-t lg:border-gray-400 lg:rounded-r-none lg:border-r-0" 
              :style="backgroundImage"
              :title="title"
            ></div>
            <div
              class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
            >
              <div class="mb-8">
                <!-- <p class="text-sm text-gray-600 flex items-center">
                  <svg
                    class="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                    />
                  </svg>
                  Members only
                </p> -->
                <div class="text-gray-900 font-bold text-xl mb-2">
                  {{ title }}
                </div>
                <p class="text-gray-700 text-base">
                  {{ description }}
                </p>
              </div>
              <div class="flex items-center">
                <div class="text-sm">
                  <span
                    v-for="(bullet, idx) in tags"
                    :key="idx"
                    class="mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2"
                    >{{ bullet }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    tags: Array,
    url: String,
    featuredImage: String,
  },
  computed: {
    backgroundImage() {
      return `background-image: url('${this.featuredImage}')`
    }
  }
};
</script>

<style scoped>
.component{
  transition: linear .2s;
  transition-timing-function: cubic-bezier(.64,.47,.83,.67);
}
.component:hover {
  transform: translateX(-10px);
}
</style>
