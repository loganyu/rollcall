class EventFollowsController < ApplicationController
  before_action :require_logged_in!

  def create
    @event_follow = current_user.event_follows.create!(event_id: params[:event_id])

    render :show
  end

  def destroy
    @event_follow = current_user.event_follows.find_by(event_id: params[:event_id])
    @event_follow.destroy!

    render :show
  end
end
