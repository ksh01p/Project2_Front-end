// Sample friend data
const friends = [
    {
        name: "John Doe",
        age: 30,
        contact: "123-456-7890",
        birthday: "January 15, 1990",
        email: "john@example.com",
        relationship: "Best Friend",
        address: "123 Main St, Cityville"
    },
    {
        name: "Alice Smith",
        age: 25,
        contact: "987-654-3210",
        birthday: "March 5, 1995",
        email: "alice@example.com",
        relationship: "Co-worker",
        address: "456 Elm St, Townsville"
    },
    // Add more friend objects here
];

// Function to populate the friend list
function populateFriendList() {
    const friendList = document.getElementById("friendList");

    friends.forEach((friend, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="friend-info">
                <h3>${friend.name}</h3>
                <p>Age: ${friend.age}</p>
                <p>Contact: ${friend.contact}</p>
                <p>Birthday: ${friend.birthday}</p>
                <p>Email: ${friend.email}</p>
                <p>Relationship: ${friend.relationship}</p>
                <p>Address: ${friend.address}</p>
            </div>
            <a href="view.html?id=${index + 1}">View Details</a>
        `;
        friendList.appendChild(listItem);
    });
}

// Call the populateFriendList function when the page loads
window.addEventListener("load", populateFriendList);
