class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def update 
        @user = selected_user
        if @user.update(user_params)
            render :show
        else
            render json: user.errors.full_messages, status: 401
        end
    end

    def show
        @user = selected_user
        render :show
    end

    private

    def selected_user
        User.find_by(id: params[:id])
    end

    def user_params
        params.require(:user).permit(
            :id, 
            :username, 
            :password, 
            :f_name, 
            :l_name, 
            :bio, 
            :headline,
            :profile_photo
        )
    end
end

