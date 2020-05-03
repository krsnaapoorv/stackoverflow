import React from 'react'
import ReactHtmlParser from 'react-html-parser'

class Answers extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount = () =>{
        let arr = this.props.label.filter(ele => ele.is_accepted === "true")
        if(arr.length === 0){
            // console.log(this.props.label)
            this.setState({
                data : this.props.label
            })
        }
        else{
            this.setState({
                data :arr
            })
        }
    }

    render(){
        return(
            <React.Fragment>
                {this.state.data.map(ele => 
                    <div className="card m-2">
                        <div className="card-body">
                            <h5 className="card-title">{ele.answer_id}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Answer Acception rate of User :-  {ele.owner.accept_rate}%</h6>
                            <h6>By <a href={ele.owner.link} className="card-link">{ele.owner.display_name}</a></h6>
                            <div>
                                <p>Is Accepted? : {ele.is_accepted.toString()}</p>
                                <p>Answered at:   {new Date(ele.last_activity_date*1000).toLocaleString()}</p>
                            </div>
                            <h4>Answer:-</h4>
                            <div>
                                {ReactHtmlParser(ele.body)}
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>          
        )
    }
}

export default Answers