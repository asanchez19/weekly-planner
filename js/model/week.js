function week() {
    const subject = Subject(),
        weekDays = [];
    return {
        getList: function () {
            return weekDays;
        },
        getWeek: function (curr) {
            weekDays.length = 0;
            let firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
            let lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
            let monthNames = [
                "JAN", "FEB", "MAR",
                "APR", "MAY", "JUN", "JUL",
                "AUG", "SEP", "OCT",
                "NOV", "DEC"
            ];
            let day = firstday.getDate();
            let monthIndex = firstday.getMonth();
            let year = firstday.getFullYear();
            weekDays.push({
                currentMonth: monthNames[monthIndex],
                days: []
            });
            for (let i = 0; i < 7; i++) {
                let currentDay = day + i;
                weekDays[0].days.push({
                    active: false,
                    day: currentDay,
                    date: new Date(`${monthIndex + 1}-${currentDay}-${year}`),
                    notes: '',
                    dailyPlan: [],
                    toDo: [],
                    complete: false,

                });

            }

            subject.notifyObservers();
        },

        selectDay: function (currentDay) {
            weekDays[0].days.forEach(element => {
                element.active = false;
            });
            weekDays[0].days[currentDay].active = true;
            subject.notifyObservers();
        },
        modifyNote: function (text) {
            weekDays[0].days.forEach(element => {
                if (element.active === true) {
                    element.notes = text;
                }
            });
            subject.notifyObservers();
        },
        storeEvent: function (data) {
            weekDays[0].days.forEach(element => {
                if (element.active === true) {
                    element.dailyPlan.push(data);
                }
            });
            subject.notifyObservers();
        },
        delete: function (deleteIndex) {
            weekDays[0].days.forEach(element => {
                if (element.active === true) {
                    element.dailyPlan.splice(deleteIndex, 1);
                }
            });
            subject.notifyObservers();

        },

        // observer
        register: function (...args) {
            args.forEach(elem => {
                subject.add(elem);
            });
        }
    };
}
