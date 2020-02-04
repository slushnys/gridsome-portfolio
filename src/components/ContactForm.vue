<template>
    <form class="w-full max-w-lg" name="contact" method="POST" data-netlify="true">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-full px-3 md:mb-0 max-w">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="full-name"
          >
            Your name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="full-name"
            type="text"
            placeholder="Mary Jane"
          />
          <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            E-mail
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            required
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Message
          </label>
          <textarea
            class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
          ></textarea>
        </div>
      </div>
      <div class="text-center">
          <button type="submit"
            class="shadow secondary-color focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
    </form>
</template>

<script>
export default {};
</script>

<style scoped></style>
