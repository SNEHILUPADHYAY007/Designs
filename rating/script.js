var count=1,i;



document.querySelector('.star-1').addEventListener('click',function(){
    //document.querySelector('.st-1').style.color='black';
    while(count<=1){
    for(i=0;i<count;i++){
        document.querySelector('.st-'+count).style.color="red";
        
    }
    count++;
    if(count===2){
        
        reuse();
        //console.log("hello");
        }
    
}
count=0;

});
document.querySelector('.star-2').addEventListener('click',function(){
    
    while(count<=2){
    for(i=0;i<count;i++){
        document.querySelector('.st-'+count).style.color="red";
        
    }
    count++;
    if(count===3){
        reuse();
    }
}
count=0;

});
document.querySelector('.star-3').addEventListener('click',function(){
    
    while(count<=3){
    for(i=0;i<count;i++){
        document.querySelector('.st-'+count).style.color="red";
        
    }
    count++;
    if(count===4){
        reuse();
    }
}
count=0;

});
document.querySelector('.star-4').addEventListener('click',function(){
    while(count<=4){
    for(i=0;i<count;i++){
        document.querySelector('.st-'+count).style.color="red";
        
    }
    count++;
    if(count===5){
        reuse();
    }
}
count=0;

});
document.querySelector('.star-5').addEventListener('click',function(){
    
    while(count<=5){
    for(i=0;i<count;i++){
        document.querySelector('.st-'+count).style.color="red";
    }
    count++;
}
count=0;

});

function reuse(){
    for(i=count;i<=5;i++){
    document.querySelector('.st-'+i).style.color='black';
}}