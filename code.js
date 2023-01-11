
function aboutMe(id){
    if(id == "Skills"){
        document.getElementById(id).classList.add();
        document.getElementById("skillData").classList.remove("hide")
        document.getElementById("skillData").classList.add("flex")
        document.getElementById("ExperienceData").classList.add("hide");
        document.getElementById("EducationData").classList.add("hide");
    }
    else if(id == "Experience"){
        document.getElementById("skillData").classList.remove("flex")
        document.getElementById("ExperienceData").classList.remove("hide")
        document.getElementById("skillData").classList.add("hide");
        document.getElementById("EducationData").classList.add("hide");
    }

    else if(id == "Education"){
        document.getElementById("skillData").classList.remove("flex")
        document.getElementById("EducationData").classList.remove("hide")
        document.getElementById("skillData").classList.add("hide");
        document.getElementById("ExperienceData").classList.add("hide");
    }

}