<template>
    <div>
        <h2>Messages</h2>
        <div :key="data.display" v-for="data in messages">
            <h5>{{data.subject}}</h5>
            <!-- <ul id="v-for-object" class="demo">
                <li >
                    {{ data.message }}
                </li>
            </ul> -->
            <b-list-group>
                <b-list-group-item button>{{ data.message }}</b-list-group-item>
            </b-list-group>
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