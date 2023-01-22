import { shallowEqual, useSelector } from "react-redux";



export default function CourseSchedule() {
    const { TimeToCourses } = useSelector(state => ({

        TimeToCourses: state.TimeToCourses
    }), shallowEqual);

    const checkDay = (id) => {
        switch (id) {
            case 1: return "ראשון";
            case 2: return "שני";
            case 3: return "שלישי";
            case 4: return "רביעי";
            case 5: return "חמישי";
            case 6: return "שישי";
            default: return "ראשון";

        }

    }

    return (
        <>
            {TimeToCourses.map(Time => <><b>{Time.Type===true?":נשים":":גברים"}</b> <br/>{checkDay(Time.IdDays)}<br/>{Time.StartHour}:שעת התחלה  {Time.EndHour} :שעת סיום <br />   </>)}

        </>)



}