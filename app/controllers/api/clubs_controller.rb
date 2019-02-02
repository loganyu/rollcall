class Api::ClubsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @clubs = Club.where(:deleted => false).includes(:members, :admins, :owner)
    
    render :index
  end

  def show
    @club = Club.find(params[:id])
  end

  def create
    @club = Club.create!(club_params.merge({:owner_id => current_user.id}))

    render :show
  end

  def update
    @club = Club.find(params[:id])
    if @club
      @club.update(club_params)
      render :show
    else
      render json: { message: 'not found', status: 404 }
    end
  end

  def destroy
    @club = Club.find(params[:id])
    @club.deleted = true
    @club.save

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
