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
            <a
              :href="icon.url"
              class="content-between"
              v-for="(icon, idx) in iconLinks"
              :key="idx"
            >
              <font-awesome
                size="lg"
                class="social-icon text-lg"
                :icon="['fab', icon.value]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="md:flex">
      <div class="mb-4 mt-5">
        <!-- <div class="uppercase tracking-wide text-lg text-indigo-600 font-bold">
          Introduction
        </div> -->
        <p class="mt-2 text-xl text-gray-600">
          Looking for someone who would have a history of developmening complex
          application for businesses within banking, logistics and supply chain
          or computer vision industries?
        </p>
        <div class="text-center m-6 p-6">
          <a
            href="mailto:zigmas@slusnys.com"
            target="_top"
            class="secondary-color text-white font-bold py-3 px-4 rounded"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
    <div class="md:flex">
      <div class="mb-4 mt-5">
        <div
          class="uppercase h2 tracking-wide text-xl font-bold"
        >
          Projects I've been working on
        </div>
        <div class="flex-wrap">
        <template v-for="project in $page.projects.edges">
          <g-link :to="project.node.path" :key="project.id">
            <ProjectComponent
              v-bind="project.node"
              
            ></ProjectComponent>

          </g-link>
        </template>

        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Projects {
  projects: allProject {
    edges {
      node {
        title
        description
        tags
        featuredImage
        path
      }
    }
  }
}
</page-query>

<script>
import ProjectComponent from "@/components/ProjectComponent";
export default {
  components: { ProjectComponent },
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
    sendcloudTags: [
      "Python",
      "Django",
      "Flask",
      "JavaScript",
      "angular.js",
      "Vue.js",
      "Redis",
      "PostgreSQL",
      "RabbitMQ",
      "Kubernetes"
    ]
  })
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
.uppercase {
  /* color: #acb7bc; */
}
h2 {
  margin-top: 2rem;
  @apply text-3xl;
}
h3 {
  margin-top: 1rem;
  @apply text-2xl;
}
.home-links a {
  margin-right: 1rem;
}

p {
  margin-bottom: 1rem;
}

.social-icon:hover {
  animation: shake 0.52s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
