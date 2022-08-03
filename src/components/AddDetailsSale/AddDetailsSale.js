const AddDetailsSale=()=>{
    let Sale={
        name:"",
        dis:"",
        dateStart:0,
        dateEnd:0,
        numEnter:0,
        price:0
    }
    const change=(e)=>{
        let { name, type, value } = e.target;
         if (type === "number")
         value = +value;
        Sale[name]=value;
    }
    const Sof=()=>{
        alert("נוסף בהצלחה");
    }
    return (<>
        <h1>AddDetailsSale</h1> 
        <input type="text" placeholder="שם" name="name"onChange={change}></input><br/><br/>
        <input type="text" placeholder="תיאור" name="dis"onChange={change}></input><br/><br/>
        <input type="text" placeholder="תאריך התחלה" name="dateStart"onChange={change}></input><br/><br/>
        <input type="text" placeholder="תאריך סיום" name="dateEnd"onChange={change}></input><br/><br/>
        <input type="text" placeholder="מספר כניסות" name="numEnter"onChange={change}></input><br/><br/>
        <input type="text" placeholder="מחיר" name="price"onChange={change}></input><br/><br/>

        <button onClick={Sof}>סימתי</button>
            </>)
    }
    export default AddDetailsSale;

