<template>
<div class="">
  <h1>Events Dashboard</h1>
  <button class='btn btn-danger btn-sm signout-btn' @click='signOut'>Sign Out</button>
    <router-link to='new'>
        <button class="btn btn-primary">
            Ordering Menu
        </button>
    </router-link>
    <router-link to='reservation'>
        <button class="btn btn-primary">
            Reservation
        </button>
    </router-link>
  <hr>
  <AddEvent />
  <hr>
  {{$store.state}}
  <div class='col-md-12'>
    <EventItem
      v-for="(event_item, index) in this.$store.state.events" 
      :event="event_item"
      :index='index'
      key="index"
    />
  </div>
</div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebaseApp'
//new
import AddEvent from './AddEvent.vue'
import EventItem from './EventItem'

export default {
    methods: {
        signOut() {
            this.$store.dispatch('signOut')
            firebaseApp.auth().signOut()
        }
    },
    components: {
        AddEvent,
        EventItem
    },
    mounted() {
        eventsRef.on('value', snap => {
            let events = []
            snap.forEach(event => {
                events.push(event.val())
            })
            console.log ('events', events)
            this.$store.dispatch('setEvents', events)
            //this.$bindAsArray('events', this.$db.('events'))
            //this.$store.dispatch('setEvents', events)
        })
    }
}
</script>