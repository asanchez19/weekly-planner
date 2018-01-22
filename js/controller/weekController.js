function weekController(view, model) {
    const DOM = view.getDOMa();
    // input handler

    DOM.save.onclick = function () {
        console.log('Saving event');
        data = {
            event: DOM.event.value,
            time: DOM.time.value,
            category: DOM.category.value
        }
        model.storeEvent(data);
    };
    DOM.body.onload = function () {
        model.getWeek(new Date());
        console.log('INIT Week')
    };
    DOM.next.onclick = function () {
        console.log('Next Week')
        let currentDate = new Date(0);
        currentDate.setTime(DOM.currentWeek.value);
        let nextWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 8));
        model.getWeek(nextWeek);
    };
    DOM.back.onclick = function () {
        console.log('Past week');
        let currentDate = new Date(0);
        currentDate.setTime(DOM.currentWeek.value)
        let pastWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() - 1));
        model.getWeek(pastWeek);
    };

    DOM.days.forEach((day, index) => {
        day.onclick = function () {
            DOM.eventContainer.innerHTML = "";
            model.selectDay(index);
        };
    });

    DOM.notes.oninput = function () {
        console.log('Typing a note');
        model.modifyNote(DOM.notes.value);
    };

    DOM.deleted.onclick = function () {
        console.log('Deleting an event', DOM.deleted.value);
        model.delete(DOM.deleted.value);
    };


    model.register(view);

}
