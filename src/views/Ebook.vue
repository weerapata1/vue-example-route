<template>
  <div class="ebooks">
    <EBook />
  </div>
</template>

<script>
// @ is an alias to /src
import EBook from '@/components/Ebook.vue'

export default {
  name: 'Books',
  components: {
    EBook
  },
  props: ["ebookObject"]

}
</script>