var MoveList = React.createClass({
  render: function() {
    moveList = []

    var symbolForTile = function(tile) {
      var move = _.findWhere(this.props.moves, { tile: tile })

      if (move != undefined)
        if (move.position % 2)
          return 'X'
        else
          return 'O'
      else
        return null
    }.bind(this)

    for(i=1; i < 10; i++) {
      moveList.push(<Move key={ i } tile={ i } symbol={ symbolForTile(i) } />)
    }

    return (
      <div className='col-xs-6 col-xs-6-offset-3'>
        { moveList }
      </div>
    )
  }
});
