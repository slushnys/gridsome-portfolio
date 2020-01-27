<template>
  <Layout>
    <div class="flex items-center mb-5 flex-wrap">
      <div class="w-1/2 md:w-1/3 flex-shrink-0">
        <h1>
          <div>Freelance</div>
          <div>Software</div>
          <div>Developer</div>
        </h1>
      </div>
      <div class="w-1/2 md:w-2/3 flex-grow-1">
        <div>
          <g-image
            class="rounded-full"
            src="~/assets/working-late-cut.png"
          ></g-image>
          <div class="mt-3 flex justify-between">
            <a :href="icon.url" class="content-between" v-for="(icon, idx) in iconLinks" :key="idx">
              <font-awesome size="lg" class="social-icon text-lg"  :icon="['fab', icon.value]" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="md:flex">
      <div class="mb-4 mt-5">
        <div class="uppercase tracking-wide text-lg text-indigo-600 font-bold">
          Introduction
        </div>
        <p class="mt-2 text-lg text-gray-600">
          Looking for someone who would have a history of developmening complex application for businesses within banking, logistics and
          supply chain or computer vision industries?
        </p>
        <div class="text-center pt-5"><a href="mailto:zigmas@slusnys.com" target="_top" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Contact me
        </a></div>
      </div>
    </div>
    <div class="md:flex">
      <div class="mb-4 mt-5">
        <div
          class="uppercase h2 tracking-wide text-lg text-indigo-600 font-bold"
        >
          Projects
        </div>
        <div class="mt-2 md:flex">
          <div class="max-w-sm w-full lg:max-w-full lg:flex">
            <div
              class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style="background-image: url('sendcloud-job.png')"
              title="Woman holding a mug"
            ></div>
            <div
              class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
            >
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
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
                </p>
                <div class="text-gray-900 font-bold text-xl mb-2">
                  SendCloud - Number one shipping tool across Europe
                </div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="flex items-center">
                <div class="text-sm">
                  <span
                    v-for="(bullet, idx) in sendcloudTags"
                    :key="idx"
                    class="mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2"
                    >{{ bullet }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  data: () => ({
    iconLinks: [
      { value: "github", url: "https://github.com/slushnys" },
      { value: "twitter", url: "https://twitter.com/slushnys" },
      { value: "dev", url: "https://dev.to/slushnys" },
      { value: "instagram", url: "https://instagram.com/slushnysltd" }
    ],
    knowledgeBullets: [
      "Python",
      "Django",
      "Flask",
      "FastAPI",
      "JavaScript",
      "Vue.js",
      "Vuetify",
      "Google Cloud Platform ",
      "Google Firebase",
      "Computer vision",
      "TypeScript",
      "Node.js",
      "Micro-service architecture",
      "Serverless",
      "Kubernetes",
      "DevOps",
      "Continuous Integration",
      "Continuous Delivery",
      "Data analysis",
      "Process Mining",
      "Business Intelligence"
    ],
    sendcloudTags: ["Python", "Django", "Flask", "JavaScript", "angular.js", "Vue.js", "Redis", "PostgreSQL", "RabbitMQ", "Kubernetes"]
  }),
  // metaInfo: {
  //   title: "Hello, world!"
  // }
};
</script>

<style>
h1 {
  font-family: Rubik, sans-serif;
  @apply text-3xl;
}
h2 {
  @apply text-3xl;
}
.home-links a {
  margin-right: 1rem;
}

.social-icon:hover {
  animation: shake 0.52s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
