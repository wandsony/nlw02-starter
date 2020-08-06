// Search the button
document.querySelector("#add-time")
    // When you click the button
    .addEventListener('click', cloneField)


// Perform an action
function cloneField() {
    // Duplicate the fields. What field?
    const newFiledContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false

    // Catch the fields. What fields?
    const fileds = newFiledContainer.querySelectorAll('input')

    // For each field, clear
    fileds.forEach(function(field) {
            // Take the field of the moment and clean it
            field.value = ""
        })
        // Place on page: where?
    document.querySelector('#schedule-items').appendChild(newFiledContainer)
}