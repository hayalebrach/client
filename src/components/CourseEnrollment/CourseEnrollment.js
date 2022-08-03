import "./CourseEnrollment.css";

const text=()=>{
    document.getElementById("text").style.visibility="visible";
    document.getElementById("text").style.fontSize="25px";
    document.getElementById("div").style.visibility="hidden";
}

export default function CourseEnrollment(){
    return <>
    <div id="text" className="text">
        <h1>!!!איזה יופיייי</h1>
        <h3>!נרשמת לקורס בהצלחה<br/>
        נשמח לראותך איתנו בקרוב<br/>
        פלאפון של המדריך לפרטים נוספים:0521234565</h3>
        <h3>להלן מערכת השעות: ימים א-ה מ-8:00 בבוקר ועד 15:00 בצהרים לבנים. <br/> ומ-15:00 בצהרים ועד 21:00 לבנות.</h3>

    </div>

    <div className="div2" id="div">
        <h1 className="x">:הרשמה לקורס שחיה</h1>
     <h3 className="x">:שם</h3>
    <input type="text"  className="input"></input>
    <h3 className="x">:מייל</h3>
    <input type="email"  className="input"></input>
    <h3 className="x">:פלאפון</h3>
    <input type="number"  className="input"></input>
    <input type="button" className="button" value="!הרשם" onClick={text}></input>
    </div>
    
    
    
    </>


}