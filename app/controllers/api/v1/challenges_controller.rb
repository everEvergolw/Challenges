module Api
    module V1
        class ChallengesController < ApplicationController
            before_action :set_challenge, only: %i[show update destroy]

            # GET api/v1/challenges
            def index
                
               @challenges =  Challenge.all
               render json: @challenges 
            
            end

            #  POST   /api/v1/challenges 
            def create
               
            #Create single challenge 
                if @challenge.save
                    render json: {message: 'Challenge added successfully',data: @challenge }
                else
                    render json: {message: 'Failed to  add challenge',data: @challenge.errors }

                end
            
            end
            
                       
            # GET    /api/v1/challenges:id 
            def show
            # Show single challenge
                if(@challenge)
                
                    render json: {message: 'Challenge found',data: @challenge }

                
                else
                
                    render json: {message: 'Challenge not found',data: @challenge.errors }

                
                end


            end

            
            #  PATCH/PUT   /api/v1/challenges:id 
            def update
            # Update single challenge 
                if(@challenge.update(challenge_params))
                
                    render json: {message: 'Challenge found',data: @challenge }

                
                else
                
                    render json: {message: 'Challenge not found',data: @challenge.errors }
                
                end


            end


            #  DELETE   /api/v1/challenges:id 
            def destroy
                #Delete single chanllenge
                if(@challenge.destroy)
                
                    render json: {message: 'Challenge delete',data: @challenge }

                
                else
                
                    render json: {message: 'Challenge not found',data: @challenge.errors }
                
                end

            end



            private 

            def challenge_params
                params.require(:challenge).permit(:title, :description, :start_date, :end_date)    

            end 

            def set_challenge
                @challenge = Challenge.find(params[:id])
            end


        end
    end
end
