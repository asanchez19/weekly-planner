function weekManager(model) {
    const DOM = {
        next: document.getElementById("next"),
        back: document.getElementById("back"),
        body: document.getElementById("body"),
        month: document.getElementById("month"),
        currentWeek: document.getElementById("currentWeek"),
        notes: document.getElementById("notes"),
        days: document.getElementsByName("week-day"),
        event: document.getElementById("event"),
        time: document.getElementById("time"),
        category: document.getElementById("category"),
        save: document.getElementById("save"),
        eventContainer: document.getElementById("eventContainer"),
        deleted: document.getElementById("deleted"),

    };

    const updatingData = () => {
        DOM.eventContainer.innerHTML = "";
        let weekElement = model.getList();
        return model.getList().map(function (elem, index) {
            DOM.days.forEach((day, index) => {
                day.innerHTML = elem.days[index].day;
                if (elem.days[index].active === true) {

                    day.setAttribute("class", "selected days-middle-date ");
                    DOM.notes.value = elem.days[index].notes;
                    elem.days[index].dailyPlan.map((element, index) => {

                        switch (element.category) {
                            case 'medical':
                                DOM.eventContainer.innerHTML += `<div class='medical' >When: ${element.time} - Event: ${element.event} <span onclick="setIndexTodelete(${index})" class="lnr lnr-cross-circle"></span></div>`;
                                break;
                            case 'meeting':
                                DOM.eventContainer.innerHTML += `<div class='meeting' >When: ${element.time} - Event: ${element.event} <span onclick="setIndexTodelete(${index})" class="lnr lnr-cross-circle"></span></div>`;
                                break;
                            case 'personal':
                                DOM.eventContainer.innerHTML += `<div class='personal'>When: ${element.time} - Event: ${element.event} <span  onclick="setIndexTodelete(${index})" class="lnr lnr-cross-circle"></span></div>`;
                                break;
                            default:
                                break;
                        }

                    });
                } else {
                    day.setAttribute("class", "days-middle-date");
                }
            });
        });
    }

    return {
        getDOMa: function () {
            return DOM;
        },
        notify: function () {
            return updatingData();
        }
    };
}
const setIndexTodelete = (index) => {
    let deleted = document.getElementById("deleted");
    deleted.value = index;
    deleted.click();

}