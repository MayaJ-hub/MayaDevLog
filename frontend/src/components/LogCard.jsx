function LogCard({Logtitle, date, entryNumber, children}) {
    return (
        <div id="dev-log">
           <h1>{Logtitle}</h1>  
           <h3>Date:{date}</h3>
           <h3>Entry Number: {entryNumber} </h3>
        
           <p>{children}</p>
</div>
    );
}
export default LogCard;

