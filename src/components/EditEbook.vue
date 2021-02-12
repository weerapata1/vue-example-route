<template>
    <div id="container">
        <div class="display-4 text-center">Edit EBook</div>
        <div class="row text-center">
            <div class="col col-sm-6 col-12 mx-auto mt-3">
                <div class="card-header">
                    <div class="card-title">ID : {{data.id}}</div>
                </div>
                <div class="card-body">
                    <div class="display-3 text-primary">
                        Name : {{data.name}}
                    </div>
                </div>
            </div>
        </div>
        <div class="row text-center">
            <div class="col col-sm-6 col-12 mx-auto mt-3">
                <button class="btn btn-primary btn-sm mr-2" @click="onHome()">Home</button>  
                <button class="btn btn-primary btn-sm" @click="onAbout()">About</button>
            </div>
            
        </div>
        
    </div>
</template>
<script src="./editEbook.js"></script>