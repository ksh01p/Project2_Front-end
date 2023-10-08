// Sample friend data (you can replace this with your own data source)
const friendId = new URLSearchParams(window.location.search).get("id");

// Function to get friends from localStorage
function getFriendsFromLocalStorage() {
    // localStorage에서 친구 데이터 가져오기
    const friendsData = localStorage.getItem("friends");

    // localStorage에 데이터가 없을 경우 빈 배열을 반환
    return JSON.parse(friendsData) || [];
}

const friends = getFriendsFromLocalStorage();
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

                // Save the updated friends list to localStorage
                saveFriendsToLocalStorage(friends);

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

// Function to save friends to localStorage
function saveFriendsToLocalStorage(friends) {
    // 친구 데이터를 문자열로 변환하여 localStorage에 저장
    localStorage.setItem("friends", JSON.stringify(friends));
}
