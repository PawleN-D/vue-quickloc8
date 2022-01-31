<template>
    <div class="m-3 p-3">
        <h2>Messages</h2>
        <div :key="index" v-for="(data, index) in messages" class="border mb-2  p-3" >
            <div class="row w-75">
                <div class="col- text-truncate">
                    <h5 class="text-left">{{data.subject}}</h5>
                    <b-list-group>
                        <b-list-group-item button>{{ data.message }}</b-list-group-item>
                    </b-list-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import json from "../data/messages.json"
export default {
    name: "Messages",
    data() {
        return {
            messages: json
        }
    }
}
</script>

<style>
 li {
     list-style: none;
 }
</style>