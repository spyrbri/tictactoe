class Game < ApplicationRecord
  has_many :moves, -> { order("position ASC") }
end
