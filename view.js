const friendId = new URLSearchParams(window.location.search).get("id");


function getFriendsFromLocalStorage() {

    const friendsData = localStorage.getItem("friends");

    return JSON.parse(friendsData) || [];
}

const friends = getFriendsFromLocalStorage();
const friend = friends.find((f) => f.id == friendId);

if (friend) {

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

   
    const deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener("click", () => {
        const confirmDelete = confirm("Are you sure you want to delete this friend?");
        if (confirmDelete) {
            const friendIndex = friends.findIndex((f) => f.id == friendId);
            if (friendIndex !== -1) {
                friends.splice(friendIndex, 1); 

                saveFriendsToLocalStorage(friends);

                alert("Friend deleted!");
                window.location.href = "index.html";
            } else {
                alert("Friend not found!");
            }
        }
    });
} else {
    alert("Friend not found!");
    window.location.href = "index.html";
}

function saveFriendsToLocalStorage(friends) {
    localStorage.setItem("friends", JSON.stringify(friends));
}
