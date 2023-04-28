<template>
  <div class="block">
    <AboutBlock @scrollMeTo="scrollMeTo" />
    <ProfileBlock />
    <CourcesBlock />
    <FeedbackBlock @scrollMeTo="scrollMeTo" />
    <ContactsBlock @scrollMeTo="scrollMeTo" />
  </div>
</template>

<script>
import AboutBlock from "@/components/AboutBlock.vue";
import ProfileBlock from "@/components/ProfileBlock.vue";
import ContactsBlock from "@/components/ContactsBlock.vue";
import CourcesBlock from "@/components/CourcesBlock.vue";
import FeedbackBlock from "@/components/FeedbackBlock.vue";
export default {
  name: "HomePage",
  data() {
    return {};
  },
  methods: {
    scrollMeTo(ref) {
      console.log(2);
      window.scrollTo(0, this?.$refs[ref].offsetTop);
    },
  },

  components: {
    AboutBlock,
    ProfileBlock,
    ContactsBlock,
    CourcesBlock,
    FeedbackBlock,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  display: none;
}
.block {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}
</style>
