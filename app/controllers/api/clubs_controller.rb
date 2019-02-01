class Api::ClubsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @clubs = Club.all.includes(:members)
    
    render :index
  end

  def show
    @club = Club.find(params[:id])
  end

  def create
    @club = Club.create!(club_params.merge({:creator_id => current_user.id}))
    render :show
  end

  private

  def club_params
    params.require(:club).permit(
      :name,
      :city,
      :description
    )
  end
end
