const app2 = Vue.createApp({
    data() {
     return {
       gallery: [
        {name: 'TNC', url: 'https://i0.wp.com/live.staticflickr.com/65535/49634716071_3d4d4dcb32_z.jpg?ssl=1'},
        {name: 'Asia Pacific College', url: 'https://www.apc.edu.ph/wp-content/uploads/2020/02/APC-Building-Aerial-Shot-web-new.jpg'},
       ]
     }
    }
   })
   
   app2.mount('#app2')