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
    const editForm = document.getElementById("editForm");

    // Populate the form fields with the existing data
    editForm.querySelector("#name").value = friend.name;
    editForm.querySelector("#age").value = friend.age;
    editForm.querySelector("#contact").value = friend.contact;
    editForm.querySelector("#birthday").value = friend.birthday;
    editForm.querySelector("#relationship").value = friend.relationship;
    editForm.querySelector("#address").value = friend.address;

    // Edit button
    const editButton = document.getElementById("editButton");
    editButton.addEventListener("click", (e) => {
        e.preventDefault();

        // Validate the form fields (implement your own validation)

        // Get the updated data from the form
        const updatedName = editForm.querySelector("#name").value;
        const updatedAge = editForm.querySelector("#age").value;
        const updatedContact = editForm.querySelector("#contact").value;
        const updateBirthday = editForm.querySelector("#birthday").value;
        const updatedRelationship = editForm.querySelector("#relationship").value;
        const updateAddress = editForm.querySelector("#address").value;

        // Show a confirmation dialog (use a more stylish dialog in production)
        const confirmEdit = confirm("Are you sure you want to edit this friend?");
        if (confirmEdit) {
            // Update the friend's data (replace this with your data storage method)
            friend.name = updatedName;
            friend.age = updatedAge;
            friend.contact = updatedContact;
            friend.birthday = updateBirthday;
            friend.relationship = updatedRelationship;
            friend.address = updateAddress;

            // Update the friend data in the localStorage
            saveFriendsToLocalStorage(friends);

            // Alert that the friend is edited (you can use a better UI notification)
            alert("Friend edited!");

            // Redirect to the view page or perform any desired action
            window.location.href = `view.html?id=${friend.id}`;
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
