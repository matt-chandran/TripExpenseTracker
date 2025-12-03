class TripsController < ApplicationController 

    before_action :set_trip, only: [:show, :edit, :update, :destroy]

    def new 
        @trip=Trip.new
    end

    def create
        ids = params[:participant_ids_text].to_s.split(",").map(&:strip).map(&:to_i)

        @trip = Trip.new(trip_params)
        @trip.participant_ids_array = ids

        if @trip.save
            redirect_to new_trip_path, notice: 'Trip was successfully created'
        else
            render :new, status: :unprocessable_entity
        end
    end

    def index
        @trips=Trip.all
    end

    def edit
     
    end
  
    def update
        if @trip.update(trip_params)
            redirect_to trips_path, notice:'Trip was successfully updated'
        else
        render 'edit', status: :unprocessable_entity
        end
    end

  def destroy
    @trip.destroy     # Delete the trip
    redirect_to trips_path, alert: 'Trip was successfully deleted.' 
  end

  def show
    if @trip.nil?
      flash[:info]='Trip not found!'
      redirect_to trips_path
    end
  end


    private

    def set_trip
        @trip = Trip.find_by_id(params[:id])
    end
    
    def trip_params
        params.require(:trip).permit(:name, :start_date, :end_date)
    end


end
