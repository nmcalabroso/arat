FROM elixir:1.14.0

COPY . /app

WORKDIR /app

RUN mix local.rebar --force && \
    mix local.hex --force && \
    mix deps.get
