class MoveBroadcastJob < ApplicationJob
  queue_as :default

  def perform(move)
    ActionCable.server.broadcast('move_channel', move: move)
  end
end
