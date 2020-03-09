FROM postgres:9.5.3
ENV POSTGRES_USER ufrilla
ENV POSTGRES_PASSWORD dev
ENV POSTGRES_DB ufrilla
ADD ./scripts/*.sql /docker-entrypoint-initdb.d/
RUN echo "America/Sao_Paulo" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata