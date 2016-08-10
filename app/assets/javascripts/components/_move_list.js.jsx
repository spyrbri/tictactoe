var MoveList = React.createClass({
  render: function() {
    moveList = []

    for(i=1; i < 10; i++) {
      moveList.push(<Move key={ i } tile={ i } />)
    }

    return (<div> { moveList } </div>)
  }
});

