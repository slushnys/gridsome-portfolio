<template>
  <Layout>
      <div class="flex">
          <!-- I'm excited to get in touch with you.  -->
          <h3>I'm glad you decided to contact me</h3>
      </div>
          <p>Please send me an email to <a href="mailto:zigmas@slusnys.com">zigmas@slusnys.com</a></p>
    <ContactForm class="mt-6"></ContactForm>
  </Layout>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
  components: { ContactForm }
};
</script>

<stylescoped>

</stylescoped>
