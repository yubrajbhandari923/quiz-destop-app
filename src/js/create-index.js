var app = new Vue({
    el:"#app",
    data:{
        projects: [{
                Name : "Project-no-Name",
                Description : "Short-Description-dont-goes-here!.",
                Date: '200000',
                Author : "yubraj Bhandry",
                noOfSets : 5 ,
                Protected: false 

            },
            {
                Name : "Project-Name",
                Description : "Short-Description-goes-here!.",
                Date: Date.now(),
                Author : "Barsha Bhandry",
                noOfSets : 10 ,
                Protected: true 

            }
         ],
         questions : [{
             Que: "Who is the father of Science?",
             Type: "text"
         }],
        projectTab : true 
    },
    methods : {
        tabchange() {
            this.projectTab = this.projectTab ? false : true ;
        }
    }
})