class AddParticipantIdsToTrips < ActiveRecord::Migration[7.2]
  def change
    add_column :trips, :participant_ids, :integer
  end
end
