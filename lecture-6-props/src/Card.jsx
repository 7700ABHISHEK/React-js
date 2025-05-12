const Card = (props) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.pageName}</h5>
                <p className="card-text">{props.ds}</p>
                <a href="#" className={`btn btn-${props.color}`} >{props.btn}</a>
            </div>
        </div>
    )
}

export default Card 