const form = document.getElementById('resume-form') as HTMLFormElement;
const nameField = document.getElementById('name') as HTMLInputElement;
const emailField = document.getElementById('email') as HTMLInputElement;
const phoneField = document.getElementById('phone') as HTMLInputElement;
const profilePictureField = document.getElementById('profile-picture') as HTMLInputElement;
const educationField = document.getElementById('education') as HTMLTextAreaElement;
const experienceField = document.getElementById('experience') as HTMLTextAreaElement;
const skillsField = document.getElementById('skills') as HTMLInputElement;

const resumeName = document.getElementById('resume-name') as HTMLElement;
const resumeContact = document.getElementById('resume-contact') as HTMLElement;
const resumeImage = document.getElementById('resume-image') as HTMLImageElement;
const resumeEducation = document.getElementById('resume-education') as HTMLElement;
const resumeExperience = document.getElementById('resume-experience') as HTMLElement;
const resumeSkills = document.getElementById('resume-skills') as HTMLElement;

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    if (validateForm()) {
        updateResume();
    }
});

function updateResume() {
    resumeName.textContent = nameField.value;
    resumeContact.textContent = `${emailField.value} | ${phoneField.value}`;
    resumeEducation.textContent = educationField.value;
    resumeExperience.textContent = experienceField.value;
    resumeSkills.textContent = skillsField.value;

    if (profilePictureField.files && profilePictureField.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target?.result) {
                resumeImage.src = e.target.result as string;
                resumeImage.alt = "Profile Picture";
            }
        };
        reader.readAsDataURL(profilePictureField.files[0]);
    }
}

function validateForm(): boolean {
    if (
        !nameField.value ||
        !emailField.value ||
        !phoneField.value ||
        !educationField.value ||
        !experienceField.value ||
        !skillsField.value
    ) {
        alert('Please fill out all fields.');
        return false;
    }


    return true;
}

document.querySelectorAll('.editable').forEach((element) => {
    element.addEventListener('input', (event) => {
        const target = event.target as HTMLElement;
        console.log(`Updated ${target.id} to: ${target.textContent}`);
    });
});
