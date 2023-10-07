// Sample friend data (you can replace this with your own data source)
const friendId = new URLSearchParams(window.location.search).get("id");
const friend = friends.find((f) => f.id == friendId);

if (friend) {
    // Display friend details
    const friendDetails = document.getElementById("friendDetails");
    friendDetails.innerHTML = `
        <h2>${friend.name}</h2>
        <p>Age: ${friend.age}</p>
        <p>Contact: ${friend.contact}</p>
        <p>Birthday: ${friend.birthday}</p>
        <p>Relationship: ${friend.relationship}</p>
        <p>Address: ${friend.address}</p>
        <!-- Display other friend details here -->
    `;

    // Delete button
    const deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener("click", () => {
        // Show a confirmation dialog (use a more stylish dialog in production)
        const confirmDelete = confirm("Are you sure you want to delete this friend?");
        if (confirmDelete) {
            // Implement friend deletion logic (remove from the friends array)
            const friendIndex = friends.findIndex((f) => f.id == friendId);
            if (friendIndex !== -1) {
                friends.splice(friendIndex, 1); // Remove the friend from the array
                // Optionally, you can update your data source or send a request to a server to delete the friend.

                // Redirect to the index page or perform any desired action
                alert("Friend deleted!");
                window.location.href = "index.html";
            } else {
                alert("Friend not found!");
            }
        }
    });
} else {
    // Handle the case where the friend ID is not found
    alert("Friend not found!");
    window.location.href = "index.html";
}
