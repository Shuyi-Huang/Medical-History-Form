
// highlight the input
var inputs = document.querySelectorAll('input');

    inputs.forEach(function(input) {
        input.addEventListener('mouseenter', function() {
            this.classList.add('highlight');
        });

        input.addEventListener('mouseleave', function() {
            this.classList.remove('highlight');
        });
    });



    //
    document.getElementById('age').addEventListener('input', function() {
        var ageInput = document.getElementById('age').value.trim();

        if (!/^\d+$/.test(ageInput)) {
            document.getElementById('error-message').textContent = "Please enter a valid age (numbers only).";
        } else {
            document.getElementById('error-message').textContent = "";
        }
    
    });