///waits for user to click on "submit grades" button then performs calculation to determine letter grade
$('#grade').click(function () {
    ///grades are weighted as outlined in syllabus, and rounded to two decimal places
    numGrade = (($("#assign").val() * .55) + ($("#gp").val() * .05) + ($("#quiz").val() * .10) + ($("#exam").val() * .20) + ($("#intex").val() * .10)).toFixed(2)
    letGrade = ""
    ///correct letter grade assigned based on final percentage
    if (numGrade >= 94) {
        letGrade = "A"
    }
    else if (90 <= numGrade && numGrade < 94) {
        letGrade = "A-"
    }
    else if (87 <= numGrade && numGrade < 90) {
        letGrade = "B+"
    }
    else if (84 <= numGrade && numGrade < 87) {
        letGrade = "B"
    }
    else if (80 <= numGrade && numGrade < 84) {
        letGrade = "B-"
    }
    else if (77 <= numGrade && numGrade < 80) {
        letGrade = "C+"
    }
    else if (74 <= numGrade && numGrade < 77) {
        letGrade = "C"
    }
    else if (70 <= numGrade && numGrade < 74) {
        letGrade = "C-"
    }
    else if (67 <= numGrade && numGrade < 70) {
        letGrade = "D+"
    }
    else if (64 <= numGrade && numGrade < 67) {
        letGrade = "D"
    }
    else if (60 <= numGrade && numGrade < 64) {
        letGrade = "D-"
    }
    else {
        letGrade = "E"
    }

    alert("Final percentage : " + numGrade + '\n' + "Letter grade: " + letGrade)
})