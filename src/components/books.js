export default {
    name : 'books',
    data(){

        return {name : this.$route.params.id};
    }
}