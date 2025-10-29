function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}

document.addEventListener('DOMContentLoaded', function() {
    const ptoRadios = document.querySelectorAll('input[name="ptoType"]');
    const dateInputs = document.getElementById('dateInputs');
    const timeInputs = document.getElementById('timeInputs');

    function selectType(selected) {
        if (selected === 'days') {
            dateInputs.style.display = 'block';
            timeInputs.style.display = 'none';
        } else {
            dateInputs.style.display = 'none';
            timeInputs.style.display = 'block';
        }
    }

    ptoRadios.forEach(radio => {
        radio.addEventListener('change', function(e) {
        selectType(e.target.value);
        });
    });
});
