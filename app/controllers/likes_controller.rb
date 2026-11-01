class LikesController < ApplicationController
    before_action :authenticate_user!

    def show
        article = Article.find(params[:article_id])
         render json: { hasLiked: current_user.has_liked?(article) }
    end
    
    def create
        article = Article.find(params[:article_id])
        article.likes.create!(user_id: current_user.id)

        render json: { hasLiked: true}
    end

    def destroy
        article = Article.find(params[:article_id])
        like = article.likes.find_by!(user_id: current_user.id)
        like.destroy!
        
        render json: { hasLiked: false }
    end
end