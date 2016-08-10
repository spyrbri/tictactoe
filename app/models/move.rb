class Move < ApplicationRecord
  belongs_to :game

  validates :tile, uniqueness: true, presence: true,
    numericality: { only_integer: true, less_than: 10,
                    greater_than: 0, message: 'Position limit exceede' }
end
