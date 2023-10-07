// index.js - Remove the sample friend data
const friends = getFriendsFromLocalStorage();


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
