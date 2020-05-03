import React from 'react'
const Cards = (props)=>{
    return(
        <React.Fragment>
            <div className="card m-2" style = {{width:"18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.label.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted"> Question id :-  {props.label.question_id}</h6>
                    <h6>By <a href={props.label.owner.link} className="card-link">{props.label.owner.display_name}</a></h6>
                    <a href={props.label.link} className="card-link" target="blank">Stackoverflow Link</a>
                    <div>
                            <p>Toal View Count:  {props.label.view_count}</p>
                            <p>Raised at:   {new Date(props.label.creation_date*1000).toLocaleString()}</p>
                            <h6>Tags</h6>
                            <div className="row justify-content-center">
                                {props.label.tags.map(ele =>
                                    <span  className="badge badge-pill bg-primary m-2">{ele}</span>
                                )}
                            </div>
                    </div>
                </div>
            </div>
        </React.Fragment>          
    )
}

export default Cards