//put data from json file in the variable 
var allTasks = JSON.parse(tasks);

//create a loop to to display data from var allTasks in cards 
for (let val of allTasks) {
    //create variable for color change of priority button
    let color = "";
    if (val.importance <= 1) {
        color = "green";
    } else if (val.importance <= 3) {
        color = "orange";
    } else {
        color = "red";
    }

    //card, displayed on the page with data from json file. it has 3 buttons with events: 1st button(class="btnPriority") when clicked changes number and color. 2nd button(class="btn btn-danger delete") when clicked removes the card. 3rd button(class="btn btn-success done") when clicked disables the card and hides the button.
    document.getElementById("box").innerHTML += `
    <div>
    <div class="card m-3 everyCard" id="cardId" style="width: 21rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <img src="./img/blank-papwer-pen.jpg" class="card-img-top" style="height: 40%; width: 100%" alt="${val.title}">
        <div class="card-body">
            <h5 class="card-title text-center">${val.title}</h5>
            <p class="card-text text-center">${val.description}</p>
            <hr>
            <div class="d-flex">
                <p class="card-text">&#9888; Priority Level</p>
                <button type="button" class="btnPriority text-white" style="background-color: ${color}; border: none; border-radius: 5px; height: 25px; width: 25px; margin-left: 15px">${val.importance}</button>
            </div>
            <hr>
            <div>
                <p class="card-text"">Duration: ${val.duration}</p>
            </div>
            <hr>
            <div class="text-end p-1" style="position: relative; bottom: 5px; right: 1px">
            <button class="btn btn-danger delete">Delete</button>
            <button class="btn btn-success done">Done</button>
            </div>
        </div>
    </div>
    </div>
    `;
}

//add event to the priority button - click adds number up to 5 and goes back to 0, depending on number, button color changes
let btnsPrior = document.getElementsByClassName("btnPriority");

for (let i = 0; i < btnsPrior.length; i++) {
    btnsPrior[i].addEventListener("click", function() {
        allTasks[i].importance++;
        if (allTasks[i].importance > 5) {
            allTasks[i].importance = 0;
        }
        document.getElementsByClassName("btnPriority")[i].innerHTML = allTasks[i].importance;
        let color = "";
        if (parseInt(document.getElementsByClassName("btnPriority")[i].innerHTML) <= 1) {
            color = "green";
        } else if (parseInt(document.getElementsByClassName("btnPriority")[i].innerHTML) <= 3) {
            color = "orange";
        } else {
            color = "red";
        }
        document.getElementsByClassName("btnPriority")[i].style.backgroundColor = color;
    })

}

//add event to the delete button - click removes card from the page
function btnsDelete() {
    let btnDel = document.getElementsByClassName("delete");
    let cardArr = document.getElementsByClassName("everyCard");

    for (let i = 0; i < btnDel.length; i++) {
        btnDel[i].addEventListener("click", function() {
            cardArr[i].innerHTML = "";
        })
    }
}
btnsDelete();

//add event to the done button - click hides done button and turns card grey, so we don't confuse it with active cards
function btnsDone() {
    let btnDone = document.getElementsByClassName("done");
    let cardArr = document.getElementsByClassName("everyCard");

    for (let i = 0; i < btnDone.length; i++) {
        btnDone[i].addEventListener("click", function() {

            cardArr[i].style.filter = "grayscale(100%)";
            btnDone[i].style.display = "none";
        })
    }
}
btnsDone();