import Ebook from '../components/Ebook.vue'

export default {
    name : 'books',
    components : {
        Ebook
    },
    data(){
        return {
            bookLists : [
                { id : "0001" , name : "Vue.js"},
                { id : "0002" , name : "Angular"},
                { id : "0003" , name : "React"},
                { id : "0004" , name : "Node.Js"},
                { id : "0005" , name : "PHP"},
                { id : "0006" , name : "Linux"},
            ],
        };
    },
    methods:{
        
    }
}