// Create a interface component for motorcycle Item

var Motorcycle = React.createClass({

  render: function(){
    return (
      <div className="card">
      <img className="card-img-top" src={this.props.image} alt={this.props.make} width="100%"/>
      <div className="card-block">
      <h4 className="card-title">{this.props.make} </h4>
      <p className="card-text">{this.props.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Model: </strong>{this.props.model}</li>
        <li className="list-group-item"><strong>Category: </strong>{this.props.category}</li>
        <li className="list-group-item"><strong>Year: </strong> {this.props.year}</li>
      </ul>
      </div>
    );
  }
});

//Create a motorcycle box component

var MotorcycleBox = React.createClass({

  loadMotorcyclesFromServer : function(){

    $.ajax({

      url: this.props.api,
      type: 'GET',
      dataType: 'json',
      cache: false,
      success : function(data){
        console.log(data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.api, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function(){
    return {
      data: []
    };
  },

  componentDidMount: function(){
   this.loadMotorcyclesFromServer();
  },

});
