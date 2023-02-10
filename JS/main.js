var allTasks = JSON.parse(tasks);

for (let val of allTasks) {
    //size of the button needs to change
    let color = "";
    if (val.importance <=1) {
        color = "green";
    } else if (val.importance <=3) {
        color = "yellow";
    } else {
        color = "red";
    }

    document.getElementById("box").innerHTML += `
    <div class="card m-3 " id="cardId" style="width: 20rem">
        <img src="/img/blank-papwer-pen.jpg" class="card-img-top" style="height: 40%; width: 100%" alt="${val.title}">
        <div class="card-body" style="height: ">
            <h5 class="card-title text-center">${val.title}</h5>
            <p class="card-text text-center">${val.description}</p>
            <hr>
            <div class="d-flex">
            <p class="card-text pt-3">Priority Level</p>
            <button type="button" class="btn" style="background-color: ${color}; padding-x: .15rem; padding-y: .15rem; font-size: .75rem;">${val.importance}</button>
            </div>

            <hr>
            <div class="text-end">
            <a href="#" class="btn btn-danger">Delete</a>
            <a href="#" class="btn btn-success">Done</a>
            </div>
        </div>
    </div>
    `;
}