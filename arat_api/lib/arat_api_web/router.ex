defmodule AratApiWeb.Router do
  use AratApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", AratApiWeb do
    pipe_through :api
  end
end
