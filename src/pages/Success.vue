<template>
    <Layout>
        <div class="flex flex-wrap justify-center">

        <div class="text-center mb-6">
            <font-awesome
                size="6x"
                class="text-lg text-green-600"
                :icon="['fas', 'check-circle']"
              />
        </div>
        <div class="mt-6 text-2xl text-center">
            Your message has been successfully received, I'll contact you in 24 hours!
        </div>
        <div class="text-center py-24">
            <g-link class="secondary-color text-white font-bold py-3 px-4 rounded" to="/">
            Go back

            </g-link>
        </div>
        </div>
        
    </Layout>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>