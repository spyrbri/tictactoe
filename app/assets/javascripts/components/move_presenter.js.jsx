MovePresenter = React.createClass({
  getInitialState: function() {
    return ({ moves: this.props.moves })
  },

  updateMoves: function(data) {
    var currentMoves = this.props.moves
    var newMoves = currentMoves.push(data.move)
    this.setState({ moves: newMoves })
  },

  componentDidMount: function() {
    this.setupCable();
  },

  setupCable: function() {
    App.move = App.cable.subscriptions.create("MoveChannel",
    {
      connected: function () {
      },

      disconnected: function () {
      },

      received: function(data) {
        this.updateMoves(data);
      },

      selectTile: function(data) {
        this.perform('select_tile', { tile: data })
      },

      updateMoves: this.updateMoves
    });
  },

  render: function () {
    return (
      <div id='moves' className="col-xs-offset-4">
        <MoveList moves={ this.props.moves } />
      </div>
    )
  }
})
