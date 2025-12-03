class AddParticipantIdsAsStringToTrips < ActiveRecord::Migration[7.2]
  def change
    add_column :trips, :participant_ids, :string
  end
end
