document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contactForm");
    form.setAttribute("autocomplete", "off");
    var inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(function (input) {
        input.setAttribute("autocomplete", "off");
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        var formData = new FormData(form);

        fetch('your_server_endpoint', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                alert("Form submitted successfully!");
            })
            .catch(error => {
                console.error('Error:', error);
            });

        form.reset();
    });
});
