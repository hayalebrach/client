const SwimmingPool = (props) => {
    return (
    <>
    
        <h2>{props.user.UserName}</h2>
        <p>{props.user.Email    }</p>
        <p>{props.user.Password}</p>
        <p>{props.user.Street}</p>
        <p>{props.user.City}</p>
        <p>{props.user.House_num}</p>
        <p>{props.user.Phone}</p>  
        <p>{props.user.Stat}</p>  
        
        
     </>
    
    );
}
export default SwimmingPool; 