<template>
  <div class="books">
    <Book />
  </div>
</template>

<script>
// @ is an alias to /src
import Book from '@/components/Books.vue'

export default {
  name: 'Books',
  components: {
    Book
  }
}
</script>
