class Api::AdminsController < ApplicationController
  def create
    @club = Club.find(params[:club_id])
    @admin = User.find(params[:id])
    @club.admins << @admin
    @club.members.destroy(@admin)

    render :show
  end

  def destroy
    @club = Club.find(params[:club_id])
    @admin = User.find(params[:id])
    @club.admins.destroy(@admin)
    @club.members << @admin

    render :show
  end
end
