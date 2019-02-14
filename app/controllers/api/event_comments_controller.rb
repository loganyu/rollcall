class Api::EventCommentsController < ApplicationController
  def index
    @event_comments = EventComment.where(event_id: params[:event_id], deleted: false)

    render :index
  end

  def update
    @event_comment = current_user.event_comments.find_by(event_id: params[:event_id])
    @event_comment.update!(event_comment_params)

    render :show
  end

  def create
    @event_comment = current_user.event_comments.create!(
      {event_id: params[:event_id]}.merge(event_comment_params)
    )

    render :show
  end

  def destroy
    @event_comment = current_user.event_comments.find_by(id: params[:id])
    @event_comment.deleted = true
    @event_comment.save!

    render :show
  end

  private

  def event_comment_params
    params.require(:event_comment).permit(
      :body
    )
  end
end
