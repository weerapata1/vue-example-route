<template>
    <div id="container">
        <div class="display-4 text-center">All EBooks</div> 
        <div class="row">
              <div class="col-12 col-sm-6 col-lg-3 mt-4" v-for="book in bookLists" v-bind:key="book.id" >
                <div class="card">
                    <div class="card-header">
                        ID : {{book.id}}
                    </div>
                    <div class="card-body">
                        <Ebook :ebookObject="book" />
                        </div> 
                    </div>
                
            </div> 
            
        </div>
    </div>
</template>


<script src="./books.js"></script>


