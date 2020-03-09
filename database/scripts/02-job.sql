CREATE TABLE "job" (
    "id"  SERIAL  NOT NULL,
    "quantity" INT NOT NULL,
    "value" REAL NOT NULL,
    "description" VARCHAR(10000) NOT NULL,
    "job_start" TIMESTAMP WITH TIME ZONE NOT NULL,
    "job_end" TIMESTAMP WITH TIME ZONE NOT NULL,
    "freelancer_type_id" INT NOT NULL,
    "created_at" TIMESTAMP NOT NULL,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "pk_job" PRIMARY KEY (
        "id"
     )
);
ALTER TABLE "job" ADD CONSTRAINT "fk_job_freelancer_type_id" FOREIGN KEY("freelancer_type_id")
REFERENCES "freelancer_type" ("id");