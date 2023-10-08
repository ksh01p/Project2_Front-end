function addFriend() {
    const addForm = document.getElementById("addForm");
    const addButton = document.getElementById("addButton");

   
    function validateForm() {
        const name = addForm.querySelector("#name").value;
        const age = addForm.querySelector("#age").value;
        const contact = addForm.querySelector("#contact").value;
        const birthday = addForm.querySelector("#birthday").value;
        const relationship = addForm.querySelector("#relationship").value;
        const address = addForm.querySelector("#address").value;


   
    addButton.addEventListener("click", (e) => {
        e.preventDefault();


       
        const name = addForm.querySelector("#name").value;
        const age = addForm.querySelector("#age").value;
        const contact = addForm.querySelector("#contact").value;
        const birthday = addForm.querySelector("#birthday").value;
        const relationship = addForm.querySelector("#relationship").value;
        const address = addForm.querySelector("#address").value;


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
