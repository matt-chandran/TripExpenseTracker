class DropTripParticipantsTable < ActiveRecord::Migration[7.2]
  def change
    drop_table :trip_participants
  end
end
