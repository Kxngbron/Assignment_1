function generateStory() {
    let name = userInput("name");
    let subject = userInput("subject");
    let animal = userInput("animal");
    let color = userInput("color");
    let furniture = userInput("furniture");
    let verb = userInput("verb ending in -ing");

    const storyContainer = document.getElementById("story-container");
    const story = `Once upon a time, there was a student at Centennial College named ${name}. One day, while studying ${subject}, a ${animal} ran into the classroom. The professor, who was wearing a ${color} tie, jumped onto his ${furniture} in surprise. The whole class, including ${name}, couldn’t stop ${verb}.`;

    storyContainer.innerHTML = story;
    document.body.style.backgroundColor = color;
    localStorage.setItem('backgroundcolor',color);
    localStorage.setItem('story', story)

}
function userInput(user) {
    let input;
    do
    {
        input = prompt("Enter a "+ user + ":");
        if (input == null || input == "") {
            alert("You didn't enter anything. Try again.")
        } 
    } while (input == null || input == "");
    return input;
}

window.onload = function() {
    const lastBackgroundColor = localStorage.getItem('backgroundcolor');
    document.body.style.backgroundColor = lastBackgroundColor;
    const lastStory = localStorage.getItem('story');
    document.getElementById("story-container").innerHTML = lastStory;
}
