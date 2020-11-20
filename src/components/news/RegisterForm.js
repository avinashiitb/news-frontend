import React, { Component } from 'react';

class RegisterForm extends Component {
  render (){
    const { items } = this.props || [];
    console.log("News", items);
    let news = "";
    if(items) {
      news = items.map((data, index) => {
        return (
          <a href={data.url} target="_blank" key={index}>
            <div className="col-md-4" style={{height: "325px", marginBottom: "30px"}}>
              <div className="card" style={{backgroundColor: 'white'}}>
                <img className="card-img-top" src={data.urlToImage} alt="Card image" style={{width: '100%'}} />
                <div className="card-body" style={{padding: '10px'}} >
                  <h4 className="card-title" style={{height: '2em', overflow: 'hidden'}}>{data.title}</h4>
                  <p className="card-text" style={{height: '3em', overflow: 'hidden'}}>
                    { data.description }
                  </p>
                </div>
                {/* <h5><span class="badge badge-secondary">{data.source.name} </span></h5> */}
              </div>
            </div>
          </a>
        )
      });
    }
    return (
      <div className="container">
        {
          news
        }
      </div>

    );

  }
}

export default RegisterForm;
