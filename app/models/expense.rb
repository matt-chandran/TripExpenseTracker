class Expense < ApplicationRecord
  belongs_to :trip

  def owed_by_array
    owed_by.to_s.split(",").map(&:to_i)
  end

  def owed_by_array=(ids)
    self.owed_by = ids.join(",")
  end

  def owed_by_users
    User.where(id: owed_by_array)
  end

  def payer
    User.find_by(id: paid_by)
  end


end
