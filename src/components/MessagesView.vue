<template>
    <div>
        <h2>Messages</h2>
        <div :key="data.display" v-for="data in messages">{{data.message}}</div>
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