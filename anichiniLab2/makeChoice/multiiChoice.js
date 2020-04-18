// Sequoia Anichini Lab 2 Part 2 Rough Draft
function Quiz(userAns, rightAns)
{

    if (userAns == rightAns)
        {
            output = "Correct!";
    }
    else {
            output = "Incorrect...";
    }
    return output;
}


    var userAns = prompt("Q1 - a, b, or c: Which of these is food? a. shoe; b. computer; c. pizza");
    var rightAns = "c";
    var output;
    Quiz(userAns, rightAns);
    document.write("Q1 - Your answer is " + output + " The correct answer is " + rightAns);
    document.write("<br>");
    
    userAns = prompt("Q2 - a, b, or c: Which solar system is closer? a. Barnard's Star; b. Sirius; c. Epsilon Eridani");
    rightAns = "a";
    Quiz(userAns, rightAns);
    document.write("Q2 - Your answer is " + output + " The correct answer is " + rightAns);
    document.write("<br>");
    
    userAns = prompt("Q3 - a, b, or c: Which direction does the sun rise? a. West; b. East; c. South");
    rightAns = "b";
    Quiz(userAns, rightAns);
    document.write("Q3 - Your answer is " + output + " The correct answer is " + rightAns);
    document.write("<br>");

    userAns = prompt("Q4 - a, b, or c: Is this question 1,3 or 4?? a. Question 3; b. Question 1; c. Question 4");
    rightAns = "b";
    Quiz(userAns, rightAns);
    document.write("Q4 - Your answer is " + output + " The correct answer is " + rightAns);
    document.write("<br>");

    userAns = prompt("Q5 - a, b, or c: Which fruit is a berry? a. Goji; b. Fuji; c. Shisito");
    rightAns = "a";
    Quiz(userAns, rightAns);
    document.write("Q5 - Your answer is " + output + " The correct answer is " + rightAns);
    document.write("<br>");

    userAns = prompt("Q6 - a, b, or c: Which of these is a typical ingredient for custard? a. Tomato; b. Canned Chicken; c. Egg");
    rightAns = "c";
    Quiz(userAns, rightAns);
    document.write("Q6 - Your answer is " + output + " The correct answer is " + rightAns);
    document.write("<br>");

    userAns = prompt("Q7 - a, b, or c: Which of these is part of a tree? a. Ventricle; b. Cambium; c. Homunculus");
    rightAns = "b";
    Quiz(userAns, rightAns);
    document.write("Q7 - Your answer is " + output + " The correct answer is " + rightAns);
    document.write("<br>");