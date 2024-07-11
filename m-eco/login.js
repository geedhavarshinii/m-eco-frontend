// Show dropdown content on button hover
const dropdownBtn = document.querySelector('.relative > button');
const dropdownContent = document.querySelector('.relative > .absolute');

dropdownBtn.addEventListener('mouseover', () => {
    dropdownContent.classList.remove('hidden');
});

dropdownBtn.addEventListener('mouseleave', () => {
    setTimeout(() => {
        dropdownContent.classList.add('hidden');
    }, 200);
});

dropdownContent.addEventListener('mouseover', () => {
    dropdownContent.classList.remove('hidden');
});

dropdownContent.addEventListener('mouseleave', () => {
    setTimeout(() => {
        dropdownContent.classList.add('hidden');
    }, 200);
});
