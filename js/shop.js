
let heartsolid = document.getElementsByClassName("fa-regular fa-heart");
let heartFull = document.getElementsByClassName("fa-solid fa-heart");

for (let i = 0; i < heartsolid.length; i++) {
    heartsolid[i].addEventListener("click", function () {
        if (heartsolid[i].style.display === "inline") {
            heartsolid[i].style.display = "none";
            heartFull[i].style.display = "inline";
            alert("已加入收藏")

        } else {
            heartsolid[i].style.display = "inline";
            heartFull[i].style.display = "none";
        }
    });

    heartFull[i].addEventListener("click", function () {
        if (heartFull[i].style.display === "inline") {
            heartFull[i].style.display = "none";
            heartsolid[i].style.display = "inline";
        } else {
            heartFull[i].style.display = "inline";
            heartsolid[i].style.display = "none";
        }
    });
}

