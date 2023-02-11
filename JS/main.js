var allTasks = JSON.parse(tasks);

for (let val of allTasks) {
    let color = "";
    if (val.importance <= 1) {
        color = "green";
    } else if (val.importance <= 3) {
        color = "orange";
    } else {
        color = "red";
    }

    document.getElementById("box").innerHTML += `
    <div class="card m-3 everyCard" id="cardId" style="width: 21rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <img src="/img/blank-papwer-pen.jpg" class="card-img-top" style="height: 40%; width: 100%" alt="${val.title}">
        <div class="card-body">
            <h5 class="card-title text-center">${val.title}</h5>
            <p class="card-text text-center">${val.description}</p>
            <hr>
            <div class="d-flex">
                <p class="card-text" style="margin: 0">&#9888; Priority Level</p>
                <button type="button" class="btnPriority text-white" style="background-color: ${color}; border: none; border-radius: 5px; height: 25px; margin-left: 15px">${val.importance}</button>
            </div>
            <hr>
            <div>
                <p class="card-text" style="margin: 0">Duration: ${val.duration}</p>
            </div>
            <hr>
            <div class="text-end p-1" style="position: relative; bottom: 5px; right: 1px">
                <a href="#" class="btn btn-danger delete">Delete</a>
                <a href="#" class="btn btn-success done">Done</a>
            </div>
        </div>
    </div>
    `;
}

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

function btnsDelete() {
    let btnDel = document.getElementsByClassName("delete");
    let cardArr = document.getElementsByClassName("everyCard");

    for (let i = 0; i < btnDel.length; i++) {
        btnDel[i].addEventListener("click", function() {
            cardArr[i].remove();
        })
    }
}
btnsDelete();


function btnsDone() {
    let btnDone = document.getElementsByClassName("done");
    let cardArr = document.getElementsByClassName("everyCard");

    for (let i = 0; i < btnDone.length; i++) {
        btnDone[i].addEventListener("click", function() {

            cardArr[i].style.filter = "grayscale(100%)";
            btnDone[i].remove();
        })
    }
}
btnsDone();