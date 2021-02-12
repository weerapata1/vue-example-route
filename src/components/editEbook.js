export default {
    name : 'EditEbook',
    data(){
        return {
            data : this.$route.params.data
        };
    },
    methods :{
        onHome(){
            this.$router.push("/");

        },
        onAbout(){
            this.$router.push("/about");

        }

    }

}