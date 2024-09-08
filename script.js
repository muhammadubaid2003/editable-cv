var form = document.getElementById('resume-form');
var nameField = document.getElementById('name');
var emailField = document.getElementById('email');
var phoneField = document.getElementById('phone');
var profilePictureField = document.getElementById('profile-picture');
var educationField = document.getElementById('education');
var experienceField = document.getElementById('experience');
var skillsField = document.getElementById('skills');
var resumeName = document.getElementById('resume-name');
var resumeContact = document.getElementById('resume-contact');
var resumeImage = document.getElementById('resume-image');
var resumeEducation = document.getElementById('resume-education');
var resumeExperience = document.getElementById('resume-experience');
var resumeSkills = document.getElementById('resume-skills');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        updateResume();
    }
});
function updateResume() {
    resumeName.textContent = nameField.value;
    resumeContact.textContent = "".concat(emailField.value, " | ").concat(phoneField.value);
    resumeEducation.textContent = educationField.value;
    resumeExperience.textContent = experienceField.value;
    resumeSkills.textContent = skillsField.value;
    if (profilePictureField.files && profilePictureField.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                resumeImage.src = e.target.result;
                resumeImage.alt = "Profile Picture";
            }
        };
        reader.readAsDataURL(profilePictureField.files[0]);
    }
}
function validateForm() {
    if (!nameField.value ||
        !emailField.value ||
        !phoneField.value ||
        !educationField.value ||
        !experienceField.value ||
        !skillsField.value) {
        alert('Please fill out all fields.');
        return false;
    }
    return true;
}
document.querySelectorAll('.editable').forEach(function (element) {
    element.addEventListener('input', function (event) {
        var target = event.target;
        console.log("Updated ".concat(target.id, " to: ").concat(target.textContent));
    });
});
