defmodule AratApi.Repo do
  use Ecto.Repo,
    otp_app: :arat_api,
    adapter: Ecto.Adapters.Postgres
end
