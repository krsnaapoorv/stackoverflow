import React from 'react'

class  Stack extends React.Component {
    constructor(props){
        super(props)
        this.state={
            tagname : "",
            quesId : "",
            data : [],
            table : true
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <img src="/stackoverflow.png" alt="Stackoverflow logo" height="80px" ></img>
                </div>
                <h1 className = "display-3 text-center font-weight-normal">Stack Exchange</h1>
                <h5 className="text-center">Search by Tag name or Question Id</h5>
                <div className="row mt-4">
                    <div className = "col">
                        <div className="form-group ml-5">
                            <label htmlFor="exampleInputEmail1" className="h3 font-weight-bold">Search for Tag(top 10)</label>
                            <input onChange={this.handleChange} name = "tagname" value ={this.state.tagname} type="text" className="form-control border-danger w-50"  placeholder="Enter tagname" />
                        </div>
                        <button   type="submit" onClick={this.getTop} className="btn btn-primary ml-5">Submit</button>
                    </div>
                    <div className = "col">
                        <div className = "col">
                            <div className="form-group w-50 ml-3">
                                <label htmlFor="exampleInputEmail1" className="h3 font-weight-bold">Search for Question Id</label>
                                <input onChange={this.handleChange} name = "quesId" value ={this.state.quesId} type="text" className="form-control border-danger"  placeholder="Enter question id" />
                            </div>
                            <button   type="submit" onClick={this.getQuesAns} className="btn btn-primary ml-3">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Stack
