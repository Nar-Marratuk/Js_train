const Tweet = Vue.component('tweet', {
 props: ['list', 'message', 'author'],
 template: '<div class="tweet"><h3>{{ author }}</h3><p>{{ message }}</p><button v-on:click="list.splice(list.indexOf(message), list.indexOf(message))">DELETE</button></div>'
});