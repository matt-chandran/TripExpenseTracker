class Trip < ApplicationRecord
    has_many :expenses, dependent: :destroy

    def participant_ids_array
        participant_ids.split(",").map(&:to_i)
    end

    def participant_ids_array=(ids)
        self.participant_ids = ids.join(",")
    end

    def participants
        User.where(id: participant_ids_array)
    end

    
end
