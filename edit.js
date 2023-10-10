const friendId = new URLSearchParams(window.location.search).get("id");
function getFriendsFromLocalStorage() {
    const friendsData = localStorage.getItem("friends");
    return JSON.parse(friendsData) || [];
}

const friends = getFriendsFromLocalStorage();
const friend = friends.find((f) => f.id == friendId);

if (friend) {
    const editForm = document.getElementById("editForm");

    editForm.querySelector("#name").value = friend.name;
    editForm.querySelector("#age").value = friend.age;
    editForm.querySelector("#contact").value = friend.contact;
    editForm.querySelector("#birthday").value = friend.birthday;
    editForm.querySelector("#relationship").value = friend.relationship;
    editForm.querySelector("#address").value = friend.address;

    const editButton = document.getElementById("editButton");
    editButton.addEventListener("click", (e) => {
        e.preventDefault();


        const updatedName = editForm.querySelector("#name").value;
        const updatedAge = editForm.querySelector("#age").value;
        const updatedContact = editForm.querySelector("#contact").value;
        const updateBirthday = editForm.querySelector("#birthday").value;
        const updatedRelationship = editForm.querySelector("#relationship").value;
        const updateAddress = editForm.querySelector("#address").value;

        const confirmEdit = confirm("Are you sure you want to edit this friend?");
        if (confirmEdit) {
            friend.name = updatedName;
            friend.age = updatedAge;
            friend.contact = updatedContact;
            friend.birthday = updateBirthday;
            friend.relationship = updatedRelationship;
            friend.address = updateAddress;

            saveFriendsToLocalStorage(friends);

            alert("Friend edited!");

            window.location.href = `view.html?id=${friend.id}`;
        }
    });
} else {
    alert("Friend not found!");
    window.location.href = "index.html";
}

function saveFriendsToLocalStorage(friends) {
    localStorage.setItem("friends", JSON.stringify(friends));
}
