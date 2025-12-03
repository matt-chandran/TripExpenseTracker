class ExpensesController < ApplicationController
    before_action :set_trip

    def index
        @expenses = @trip.expenses
        calculate_balances
    end

    def new
        @expense = @trip.expenses.new
    end

    def create
        @expense = @trip.expenses.new(expense_params)
        ids = params[:owed_by_text].to_s.split(",").map(&:strip).map(&:to_i)
        @expense.owed_by_array = ids

        if @expense.save
            redirect_to trip_expenses_index_path(@trip), notice: "Expense Created"
        else
            render :new, status: :unprocessable_entity
        end
    end

    private

    def set_trip
        @trip = Trip.find(params[:trip_id])
    end

    def expense_params
        params.require(:expense).permit(:description, :amount, :paid_by)
    end

    def calculate_balances
        @balances = Hash.new { |h, k| h[k] = Hash.new(0) }
        @trip.expenses.each do |expense|
            payer = expense.paid_by
            owes = expense.owed_by_array
            split_amount = expense.amount.to_f / owes.size

            owes.each do |user_id|
                next if user_id == payer
                @balances[user_id][payer] += split_amount
            end
        end
    end


end
