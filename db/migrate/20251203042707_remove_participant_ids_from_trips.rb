class RemoveParticipantIdsFromTrips < ActiveRecord::Migration[7.2]
  def change
    remove_column :trips, :participant_ids, :integer
  end
end
