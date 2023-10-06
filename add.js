// Function to add a friend
function addFriend() {
    const addForm = document.getElementById("addForm");
    const addButton = document.getElementById("addButton");

    addButton.addEventListener("click", (e) => {
        e.preventDefault();

        // Validate the form fields (implement your own validation)

        // Get the form data and add the friend to the list (simplified)
        const name = addForm.querySelector("#name").value;
        const age = addForm.querySelector("#age").value;

        // Add the friend to the friends array (replace this with your data storage method)
        friends.push({ id: friends.length + 1, name, age });

        // Alert that the friend is added (you can use a better UI notification)
        alert("Friend added!");

        // Redirect to the index page (or any other desired action)
        window.location.href = "index.html";
    });
}

// Call the addFriend function when the page loads
window.addEventListener("load", addFriend);
