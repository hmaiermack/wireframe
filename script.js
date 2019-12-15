
function start(){
    $('#start').on('click', function (){ 
        event.preventDefault();
        console.log('test');
        $('.content').empty();
        $('.content').append(` <section class = "item quiz-box">
        <section class = "item current-question">
            <h2>Questions go here</h2>
        </section>
        <section class="item question-choices">
        <form class = "item multiple choice">
                <input type="radio" name="question" id="question1">
                <label for="question1">question1</label>
                <input type="radio" name="question" id="question2">
                <label for="question2">question2</label> 
                <input type="radio" name="question" id="question3">
                <label for="question3">question3</label>
                <input type="radio" name="question" id="question4">
                <label for="question4">question4</label>
        </section>
        <div class="item footer">
        <div id="submit">
        <button type="submit" id="submit">Next Question</button>
        </div>
        </form>
        <div class="item progress">x/5</div>
        <div class="item score">x/5</div>
        </div>
    </section>`);
    })
}

function next(){
    $('.content').on('click', '#submit', function (){
        console.log('hi');
        event.preventDefault();
        $('.content').empty();
        $('.content').append(` <section>
        <p>You scored: x out of 5</p>
        <button type="submit">Start Over</button>
    </section>`);
    })
}

start();
next();