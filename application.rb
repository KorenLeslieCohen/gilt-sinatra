require 'sinatra'

class Application < Sinatra::Base

  get '/' do  
    erb :'index.html'
  end

end