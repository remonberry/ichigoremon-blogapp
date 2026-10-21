class AccountsController < ApplicationController
    def show
        @user = User.find(params[:id])
        if @user == current_user
            redirect_to profile_path
        end
    end

    def follows
        @user = User.find(params[:id])
        @followers = @user.followers
    end
end