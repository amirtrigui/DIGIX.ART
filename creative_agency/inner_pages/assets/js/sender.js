function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var topic = document.getElementById("selected-topic").value;
    var budget = document.getElementById("budget").value;
    var message = document.getElementById("message").value;

    // Check if any input field is empty or if the topic is still set to the default value
    if (!name) {
        alert("Please Tape Your Name!");
        return;
    }
    if (!email) {
        alert("Please Tape your Email!");
        return;
    }
    if (!budget) {
        alert("Please tell us your budget!");
        return;
    }


    // Check if the topic is still set to the default value
    if (topic === "Select a Discussion Topic") {
        alert("Please select a valid discussion topic.");
        return;
    }


    var params = {
        name: name,
        email: email,
        topic: topic,
        budget: budget,
        message: message,
    };

    const serviceID = "service_t070ere";
    const templateID = "template_gd7opny";

    emailjs.send(serviceID, templateID, params)
        .then(res => {

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("selected-topic").value = "";
            document.getElementById("budget").value = "";
            document.getElementById("message").value = "";
            alert("We appreciate your interest. Your message has been successfully sent!!");
            console.log(res);
        })
        .catch(err => console.log(err));
}
