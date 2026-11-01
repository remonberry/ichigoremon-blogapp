class CommentsController < ApplicationController
    def new
        article = Article.find(params[:article_id])
        @comment = article.comments.build
    end

    def index
        article = Article.find(params[:article_id])
        comments = article.comments

        render json: comments.as_json(only: [:id, :content])
    end

    def create
        article = Article.find(params[:article_id])
        @comment = article.comments.build(comment_params)

        if @comment.save
            render json: { id: @comment.id, content: @comment.content }, status: :created
        else
            render json: { errors: @comment.errors.full_messages },
                   status: :unprocessable_entity
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:content)
    end
end