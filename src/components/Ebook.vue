<template>
    <div id="container">
        <div class="text-warning text-center">
            <div class="display-4" style="font-size : 20px">
                {{ebook.name}}
            </div>
            <div class="float-right">
                <router-link :to="{name:'Edit-Book',params:{data :ebook}}">
                    <i class="fas fa-edit fa-2x"></i>
                </router-link>    
            </div>
        </div>
    </div>
    
</template>

<script src="./eBook.js"></script> 