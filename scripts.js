document.addEventListener('DOMContentLoaded', function(event) {
    //create a button
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Add Square");
    button.appendChild(buttonText);
    document.body.appendChild(button);

    let container = document.createElement("div");
    container.className = 'container';
    document.body.appendChild(container);

    let id = 0;

    button.addEventListener('click', function() {
        let newDiv = document.createElement('div');
        newDiv.className = "square-container"; 
        newDiv.setAttribute("id", id);
        container.appendChild(newDiv);
        id++;

        newDiv.addEventListener("mouseover", function() {
            let divText = document.createTextNode(this.id);
            newDiv.appendChild(divText);
        });

        newDiv.addEventListener("mouseout", function() {
            newDiv.innerText = " ";
        });

        newDiv.addEventListener('click', function() {
            let selectColor = randomColor();
            newDiv.style.backgroundColor = selectColor;
        });

        //add color and a function that changes the color
        let colors= ['blue', 'yellow', 'green', 'grey', 'red']
            
        function randomColor() {
            let randomColor = colors[Math.floor(Math.random()*colors.length)];
            return randomColor;
        };

        newDiv.addEventListener('dblclick', function () {
            let nextDivID = parseInt(newDiv.id, 10);

            // First if statement to check if the id is even or odd.
            if (nextDivID % 2 === 0) {
                // Checking if the document currently holds the id after the selected id.
                let itemToRemove = document.getElementById(nextDivID + 1);
                if (document.body.contains(itemToRemove)) {
                    container.removeChild(itemToRemove);
                } else {
                    alert('The square does not exist');
                }
            }
            else {
                // Checking if the document currently holds the id before the selected id.
                let itemToRemove = document.getElementById(nextDivID - 1);
                if (document.body.contains(itemToRemove)) {
                    container.removeChild(itemToRemove);
                } else {
                    alert('The square does not exist');
                }
            };
        });

    });
});