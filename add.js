// Function to add a friend and validate the form
function addFriend() {
    const addForm = document.getElementById("addForm");
    const addButton = document.getElementById("addButton");

    // Validate the form fields (implement your own validation)
    function validateForm() {
        const name = addForm.querySelector("#name").value;
        const age = addForm.querySelector("#age").value;
        const contact = addForm.querySelector("#contact").value;
        const birthday = addForm.querySelector("#birthday").value;
        const relationship = addForm.querySelector("#relationship").value;
        const address = addForm.querySelector("#address").value;


    // Add a click event listener to the "Add Friend" button
    addButton.addEventListener("click", (e) => {
        e.preventDefault();


        // Get the form data and add the friend to the list (simplified)
        const name = addForm.querySelector("#name").value;
        const age = addForm.querySelector("#age").value;
        const contact = addForm.querySelector("#contact").value;
        const birthday = addForm.querySelector("#birthday").value;
        const relationship = addForm.querySelector("#relationship").value;
        const address = addForm.querySelector("#address").value;

        // Create a new friend object
        const newFriend = {
            name,
            age,
            contact,
            birthday,
            relationship,
            address
        };

        // Add the new friend to the friends array (replace this with your data storage method)
        friends.push(newFriend);

        // Alert that the friend is added (you can use a better UI notification)
        alert(`${newFriend.name} has been added to your friend list!`);

        // Redirect to the index page (or any other desired action)
        window.location.href = "index.html";
    });
}

// Call the addFriend function when the page loads
window.addEventListener("load", addFriend);
}
