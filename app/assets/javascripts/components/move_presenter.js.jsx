MovePresenter = React.createClass({
  getInitialState: function() {
    return ({ moves: this.props.moves })
  },

  updateMoves: function(data) {
    alert(data);
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
      <div id='moves'>
      </div>
    )
  }
})
