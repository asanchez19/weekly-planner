/**
 * ASANCHEZ 
 * WeeklyInit 
 */
const
    /* Week manager */
    modelWeek = week(),
    viewWeek = weekManager(modelWeek),
    weekCtrl = weekController(viewWeek, modelWeek);