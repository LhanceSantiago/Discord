const questions = document.querySelectorAll('.faq-question');

    questions.forEach((question) => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.plus-icon');

        questions.forEach((q) => {
          const otherAnswer = q.nextElementSibling;
          const otherIcon = q.querySelector('.plus-icon');
  
          if(otherAnswer !== answer){
            otherAnswer.classList.remove('open');
            otherIcon.classList.remove('rotate');
          }
        });


        answer.classList.toggle('open');
        icon.classList.toggle('rotate');
      });
    });