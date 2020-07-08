class Api::TagsController < ApplicationController

    def create
        @tag = Tag.new(tag_params)
        if @tag.save
            render :show
        else
            render json: @tag.errors.full_messages, status: 401
        end
    end

    def index 
        @tags = Tag.all
        render :index
    end

    def show 
        @tag = select_tag
        render :show
    end

    private

    def select_tag
        Tag.find_by(id: params[:id])
    end

    def tag_params
        params.require(:tag).permit(:tag_name)
    end

end
