class Api::EventsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :update]

  def index
    @events = Event.where(:club_id => params[:club_id], :deleted => false).includes(:followers, :event_comments)

    render :index
  end

  def show
    @event = Event.includes(:followers, :event_comments).find(params[:id])
    @club = Club.includes(:members, :admins, :events, :owner).find(params[:club_id])

    render :show
  end

  def create
    @club = Club.find(params[:club_id])
    schedule = Event.create_schedule(schedule_params)
    @event = Event.create(event_params.merge({:schedule => schedule.to_yaml, :user_id => current_user.id, :club_id => @club.id}))
    @club.events << @event

    render :show
  end

  def update
    @event = Event.find(params[:id])
    if @event
      schedule = Event.create_schedule(schedule_params)
      @event.update(event_params.merge({:schedule => schedule.to_yaml}))
      render :show
    else
      render json: { message: 'not found', status: 404 }
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.deleted = true
    @event.save

    render :show
  end

  private

  def event_params
    params.require(:event).permit(
      :name,
      :address,
      :description
    )
  end

  def schedule_params
    params.require(:schedule).permit(
      :start_date,
      :start_time,
      :minute_of_hour,
      :event_repeat,
      :weekly_interval,
      :weekly_day_of_week,
      :monthly_day_of_week,
      :week_of_month,
    )
  end
end
