import axios from 'axios';
import './bootstrap';



const messages_el = document.getElementById('messages');
const username_input = document.getElementById("username");
const message_input = document.getElementById("massge_input");
const messages_form = document.getElementById("message_form");

messages_form.addEventListener('submit', function(e){
    e.preventDefault();

    let has_errors = false;

if (username_input.value==''){
    alert ('plase enter username');
    has_errors=true;
}

if (message_input.value==''){
    alert ('please enter message');
    has_errors=true;
}

if (has_errors){
    return;  
}

 const options = {
    method: 'post',
    url:'/send-message',
    data:{
        username: username_input.value,
        message: message_input.value
    }
 }

 axios(options);

});

window.Echo.channel('chat')
.listen('.message',(e)=>{
    console.log(e);
})




