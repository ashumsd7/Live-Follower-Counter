new Vue({
    el: "#app",
    data() {
        return {
            inputSection:false,
            mianSection:true,
            showWarning:false,
            inputBox:'',
            loading:false,
            url:'https://livecounts.io/tiktok-realtime/embed/?u='
        }
    },
    methods: {
       redirectTikTok(){
           if(this.inputBox=='')
           {
               this.showWarning=true;
               setInterval(() => {
                this.showWarning=false;
               }, 2000);
           }
           else{
            this.url=this.url+this.inputBox;
            this.loading=true;
            setTimeout(() => {
                this.loading=false;
                document.location.href=this.url; 
            }, 2000);
           
           }
          
       },
       showInputSection(){
           this.inputSection=true;
           this.mianSection=false;
       }

    
    },
})