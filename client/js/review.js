var Review = React.createClass({

  render: function() {
    return (
      <div className= "list-group-item">
      <small className="text-muted pull-right">
      {this.props.email}
      </small>
      <h4 className="list-group-item-heading">
      {this.props.name}
      </h4>
      <p className= "lit-group-item-text">
      {this.props.review}
      </p>
      </div>
    );
  }
});

var ReviewBox = React.creatClass({

  loadReviewsFromServer: function() {

    $.ajax({
      url: this.props.api,
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({data : data });
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.api, status, err.toString());
      }.bind(this)
    });
  },

  handleReviewSubmit : function(review) {
    var reviews = this.state.data;
    review.id = Date.now().toString();
    var newReviews = reviews.concat([review]);
    this.setState({data: newReviews});
    console.log(review);
    $.ajax({
      url : this.props.api,
      dataType: 'json',
      type: 'POST',
      data: review,
      success: function(data){
        console.log(data);
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
    this.loadReviewsFromServer();
  },
  render: function(){
    return (
        <div>
          <ReviewList data={this.state.data} />
          <ReviewForm onReviewSubmit = {this.handleReviewSubmit} />
        </div>
    );
  }
});

var ReviewList = React.createClass({
  render: function() {
    var reviewNodes = this.props.data.map(function(review){
        return (
          <Review name={review.name} review = {review.review} email= {review.email} key= {review.id}> </Review>
        );
    });

    return (
        <div className = "list-group">
          {reviewNodes}
        </div>
    );
  }
});



