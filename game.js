var mode=6;
var colors = randomColorsArray(mode);
var pickedColor=colorPicker();
var squares = document.querySelectorAll(".squares")
var goal=document.querySelector("#selected_color");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var Modes = document.querySelectorAll(".mode");
goal.textContent = pickedColor;

for(var i=0;i<Modes.length;i++)
    {
        Modes[i].addEventListener("click", function(){
            Modes[0].classList.remove("selected");
            Modes[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? mode=3:mode=6;
            reset();
        });
    }

function reset()
{
    colors = randomColorsArray(mode);
    pickedColor = colorPicker();
    goal.textContent = pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else
        {
            squares[i].style.display = "none";                
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    message.textContent = "";
}

resetButton.addEventListener("click", function(){
    reset();
});

for(var i=0;i<colors.length;i++)
    {
        //initializing color
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            // this.classList.add("selected");
            var selectedColor=this.style.backgroundColor;
            if(selectedColor === pickedColor)
                {
                message.textContent = "Correct!!";
                rightChoice();
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
                }
            else
                {
                message.textContent = "Try Again!!";
                this.style.backgroundColor = "#232323";
                }
        });
    }

function rightChoice()
{
    for(var i=0;i<squares.length;i++)
        {
            squares[i].style.backgroundColor = pickedColor;
        }
}

function colorPicker()
{
    var r = Math.floor(Math.random() * mode)
    return colors[r];
}

function randomColorsArray(num)
{
    arr = [];
    for(var i=0;i<num;i++)
        {
            arr.push(randomColor());
        }
        return arr;
}

function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")"
}