const SplitButton = () => {
  const arr = [{ Id: 1, Name: "בני ברק" }, { Id: 2, Name: "ashdod" }]

  return (
    <>
      <li>
        <select>
          {arr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
        </select>
        {/* <Link to="list-recipe" className="nav-link"><b>ארוחות</b></Link> */}
        <a className="dropdown-item" href="#"><b>ארוחות</b></a>
        <dl><a className="dropdown-item" href="#">בשרי</a></dl>
        <dl><a className="dropdown-item" href="#">חלבי</a></dl>
        <dl><a className="dropdown-item" href="#">פרווה</a></dl>
        <dl><a className="dropdown-item" href="#">מנות ביניים</a></dl>
      </li>





    </>
  )


}
export default SplitButton;
