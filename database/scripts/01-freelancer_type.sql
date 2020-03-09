CREATE TABLE "freelancer_type" (
    "id"  SERIAL  NOT NULL,
    "type" VARCHAR(45) NOT NULL,
    "created_at" TIMESTAMP NOT NULL,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "pk_freelancer_type" PRIMARY KEY (
        "id"
     )
);