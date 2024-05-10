document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const resetButton = document.getElementById('reset-button'); // Get reset button
    const submittedValues = document.getElementById('submitted-values');

    // Submit event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const formValues = {};
        for (let [key, value] of formData.entries()) {
            formValues[key] = value;
        }
        displaySubmittedValues(formValues);
    });

    // Reset button event listener
    resetButton.addEventListener('click', function() {
        form.reset(); // Reset form
        submittedValues.innerHTML = ''; // Clear submitted values
    });
    // Menampilkan nilai yang disubmit
    function displaySubmittedValues(values) {
        submittedValues.innerHTML = '';
        const heading = document.createElement('h3');
        heading.textContent = 'Submitted Values';
        submittedValues.appendChild(heading);
        for (let key in values) {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${key}:</strong> ${key === 'photo' ? '<img src="' + URL.createObjectURL(values[key]) + '">' : values[key]}`;
            submittedValues.appendChild(p);
        }
    }
    // Event listener untuk memperbarui preview foto
    document.getElementById('photo').addEventListener('change', function() {
        const file = this.files[0];
        const imgPreview = document.getElementById('photo-preview');
        imgPreview.style.display = 'block';
        imgPreview.src = URL.createObjectURL(file);
    });
});

function displaySubmittedValues(values) {
    const submittedValues = document.getElementById('submitted-values');
    submittedValues.innerHTML = '';
    const heading = document.createElement('h3');
    heading.textContent = 'Submitted Values';
    submittedValues.appendChild(heading);
    for (let key in values) {
        const p = document.createElement('p');
        const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1); // Huruf pertama menjadi kapital
        p.innerHTML = `<strong>${capitalizedKey}:</strong> ${key === 'photo' ? `<br><img src="${URL.createObjectURL(values[key])}" style="max-width: 100px; max-height: 100px;">` : values[key]}`;
      submittedValues.appendChild(p);
    }
  }