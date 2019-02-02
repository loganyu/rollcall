class Api::MembersController < ApplicationController
  def create
    @club = Club.find(params[:club_id])
    @member = User.find(params[:id])
    @club.members << @member

    render :show
  end

  def destroy
    @club = Club.find(params[:club_id])
    @member = User.find(params[:id])
    @club.members.destroy(@member)

    render :show
  end
end
