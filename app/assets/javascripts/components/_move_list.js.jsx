var MoveList = React.createClass({
  render: function() {
    moveList = []

    for(i=1; i < 10; i++) {
      moveList.push(<Move key={ i } tile={ i } />)
    }

    return (
      <div className='col-xs-6 col-xs-6-offset-3'>
        { moveList }
      </div>
    )
  }
});
