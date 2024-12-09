const faqNav = document.querySelectorAll('.faq_tab');
const faqContent = document.querySelectorAll('.faq_content--body');

faqNav.forEach((faq) => {
    faq.addEventListener("click", () => {
        removeActiveMenu();
        faq.classList.add("active");
        const activeContent = document.querySelector(`#${faq.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
    });
    });
    function removeActiveMenu() {
        faqNav.forEach((faq) => {
            faq.classList.remove("active");
        });
    }
    function removeActiveContent() {
        faqContent.forEach((faq) => {
            faq.classList.remove("active");
        });
        
    }
const questions = document.querySelectorAll(".faq_content--text h3");
questions.forEach(question => {
    question.addEventListener("click", () => {
        
        const answer = question.nextElementSibling;
        if (answer && answer.tagName === 'P') {
            answer.classList.toggle('open');
        }
        const dd = question.querySelector('i');
        if (dd) {
            dd.classList.toggle('open');
        }
        OtherAnswers(question);
    });
});
