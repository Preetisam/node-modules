
function cheese(){
    console.log("put some cheese");
    }
    function patty(cheese){
        console.log("add some vegs");
        cheese();
        }
        function buns(patty){
            console.log("add two buns");
            patty(buns)
            }
            function makeBurger(buns){
                console.log("burger is ready");
                buns(patty);
                }